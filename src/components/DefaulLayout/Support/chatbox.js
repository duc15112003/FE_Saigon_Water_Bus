import React, { useState, useEffect, useRef } from "react";
// Import hàm từ file vừa tạo
import axios from "axios";
const ChatWidget = () => {
const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = "http://localhost:8080/api/saigonwaterbus";
  const [isChatOpen, setIsChatOpen] = useState(false);
  const glowAnimation = {
    animation: 'glow 2s infinite',
  };

  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
};
    let chuyenMail = null;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [stations, setStations] = useState([]);
  const [selectedDepartureStation, setSelectedDepartureStation] = useState(null);
  const [selectedArrivalStation, setSelectedArrivalStation] = useState(null);
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDateInput, setShowDateInput] = useState(false);
  const [trips, setTrips] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const token = localStorage.getItem("token");
  const [EmailBooking, setEmailBooking] = useState(''); 
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showSeatSelection, setShowSeatSelection] = useState(true); 
  const [showTripSelection, setShowTripSelection] = useState(true); // State mới để kiểm soát hiển thị nút chọn chuyến
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [isLoadingMessage, setIsLoadingMessage] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);// Trạng thái tin nhắn đang chờ
  let paymentWindow = null;
  const [submitted, setSubmitted] = useState(false);
  // Function to recognize the intent
  const recognizeIntent = (message) => {
      if (message.includes('còn chỗ') || message.includes('kiểm tra')) return 'CheckAvailability';
      if (message.includes('đặt vé') || message.includes('mua vé')) return 'BookTicket';
      if (message.includes('bao nhiêu vé đã được đặt')) return 'CountBookedTickets';
      if (message.includes('chuyến đi') && message.includes('ngày')) return 'GetTripsByDate';
      if (message.includes('bạn là ai')) return 'About';
      return 'GeneralQuery';
  };
  
  // Function to fetch stations
  const fetchStations = async () => {
      try {
          const response = await axios.get(`${apiUrl}/stations`);
          setStations(response.data.result.content);
      } catch (error) {
          console.error('Error fetching stations:', error);
      }
  };

 // Function to fetch trips
// Function to fetch trips
const fetchTrips = async (selectedDepartureStation, selectedArrivalStation, date) => {
    try {
        const response = await axios.get(`${apiUrl}/booking-ticket`, {
            params: {
                from: selectedDepartureStation.id,
                to: selectedArrivalStation.id,
departDate: date
            },
        });
       
        if (response.data.result.length > 0) {
            // Lọc các chuyến đi có departure_time lớn hơn thời gian hiện tại
            const validTrips = response.data.result.filter(trip => {
                const [hours, minutes] = trip.departureTime.split(':');
                const departureDateTime = new Date(trip.departureDate);
                departureDateTime.setHours(hours);
                departureDateTime.setMinutes(minutes);
                
                return departureDateTime > new Date();
            });
        
            setTrips(validTrips);
        
            if (validTrips.length > 0) {
                setMessages([
                    ...messages,
                    { role: 'assistant', content: `Có ${validTrips.length} chuyến đi vào ngày ${date} sau khi loại bỏ các chuyến đã khởi hành.` }
                ]);
            } else {
                setMessages([
                    ...messages,
                    { role: 'assistant', content: `Không có chuyến đi nào còn lại vào ngày ${date} sau khi loại bỏ các chuyến đã khởi hành.` }
                ]);
            }
        } else {
            setMessages([
                ...messages,
                { role: 'assistant', content: `Không có chuyến đi nào vào ngày ${date}.` }
            ]);
        }
        
    } catch (error) {
        console.error('Error fetching trips:', error);
    }
};

  // Function to fetch seats
const fetchSeats = async (trip) => {
  try {
      const response = await axios.get(`${apiUrl}/booking-ticket/${trip.id}`);
      return response.data.result; // Return the list of available seats
  } catch (error) {
      console.error('Error fetching seats:', error);
      return [];
  }
};
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }

// Function to fetch booked seats
const fetchBookedSeats = async (tripId, departureDate) => {
  try {
      const response = await axios.get(`${apiUrl}/booking-ticket/${tripId}/${departureDate}/getSeat`);
      return response.data.result; // Return the list of booked seats
  } catch (error) {
      console.error('Error fetching booked seats:', error);
      return [];
  }
};

  const handleTripSelection = async (trip) => {
      setSelectedTrip(trip);
      localStorage.setItem('chuyenData', JSON.stringify(trip));
      setMessages([...messages, { role: 'assistant', content: `Bạn đã chọn chuyến: ${trip.id}. Bây giờ hãy chọn ghế.` }]);
      setShowTripSelection(false); 
      // Fetch booked seats for the selected trip and date
      const bookedSeats = await fetchBookedSeats(trip.id, selectedDate);
      const bookedSeatIds = bookedSeats.map(seat => seat.id); // Get the list of booked seat IDs
  
      // Fetch all seats for the trip
      const allSeats = await fetchSeats(trip);
// Combine the seat data, marking booked seats
      const combinedSeats = allSeats.map(seat => ({
          ...seat,
          isBooked: bookedSeatIds.includes(seat.id) // Mark seat as booked if it is in the bookedSeats list
      }));
  
      setSeats(combinedSeats);
  
      if (combinedSeats.length === 0) {
          setMessages([...messages, { role: 'assistant', content: `Không có ghế nào khả dụng cho chuyến đi ${trip.id}.` }]);
      }
  };
  const handleVNPay = async () => {
      try {
        const response = await axios.post(`${apiUrl}/payment/vnpay`, {
          orderId: new Date().getTime().toString(), // Sử dụng timestamp làm orderId
          amount: localStorage.getItem("total"),
          returnUrl: 'https://saigonwaterbus.click/api/saigonwaterbus/payment/vnpay/return'
        });
        // Mở cửa sổ popup khi nhận được URL từ server
        paymentWindow = window.open(response.data, 'Payment', 'width=600,height=600');
        setSubmitted(true);
      } catch (error) {
        console.error('Error sending payment request:', error);
      }
     
    };
  
    const sendLocalStorageToServer = async () => {
      const localStorageData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        localStorageData[key] = localStorage.getItem(key);
      }
      try {
        await axios.post(`${apiUrl}/saveLocalStorageData`, { localStorageData });
      } catch (error) {
        console.error('Error sending localStorage data to server:', error);
      }
    };
    useEffect(() => {
        setMessages([{ role: 'Hỗ trợ', content: 'Chào bạn đến với Saigon Waterbus, tôi có thể giúp gì cho bạn?' }]);
      const handlePaymentMessage = (event) => {
        if (event.data === 'payment_success') {
          closePaymentPopup();
        //   sendEmail()

          setMessages(prevMessages => [
              ...prevMessages,
              { role: 'assistant', content: 'cảm ơn vì đã sử dụng dịch vụ' }
          ]);
          setMessages(prevMessages => [
              ...prevMessages,
              { role: 'assistant', content: 'Vì đây đang là dịch vụ thử nghiệm nếu có lỗi vui lòng liên hệ qua email của chúng tôi để khắc phục' }
          ]);
          setMessages(prevMessages => [
              ...prevMessages,
              { role: 'assistant', content: 'Đã thanh toán thành công vui lòng check email để có được thông tin vé' }
          ]);
          setMessages(prevMessages => [
              ...prevMessages,
              { role: 'assistant', content: 'Lưu ý! khi đến bến vui lòng mở email chứa thông tin vé cho nhân viên kiểm tra và quét mã' }
          ]);
        }
      };
      const closePaymentPopup = () => {
          if (paymentWindow) {
            paymentWindow.close();
          }
        };
      
  
      window.addEventListener('message', handlePaymentMessage);
      return () => {
window.removeEventListener('message', handlePaymentMessage);
      };
    }, []);
  // Function to handle seat selection
  const handleSeatSelection = (seat) => {
    const seatIndex = selectedSeats.findIndex(s => s.id === seat.id);

    if (seatIndex !== -1) {
        // If the seat is already selected, remove it from selectedSeats
        setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
        // If the seat is not selected and the maximum number of seats is reached
        if (selectedSeats.length >= 6) {
            setMessages([...messages, { role: 'assistant', content: 'Bạn không thể chọn quá 6 ghế.' }]);
        } else {
            // Add the seat to selectedSeats
            setSelectedSeats([...selectedSeats, seat]);
        }
    }
};

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



const [userDetails, setUserDetails] = useState({
    name: '',
    email: "",
    phone: '',
    message: '',
    trip: JSON.parse(localStorage.getItem('chuyenData')) || {},
    seat: JSON.parse(localStorage.getItem('seatData')) || [],
    total: localStorage.getItem('total')
  });

const { name, email, message, phone, trip, seat, total } = userDetails;
    const orderData = { name, email, message, phone, trip, seat, total };
  // Function to handle sending the message
  const handleSendMessage = async () => {
      const trimmedMessage = inputMessage.trim();

      if (!trimmedMessage) {
          console.error('Message cannot be empty');
          return;
      }

      const intent = recognizeIntent(trimmedMessage);
      let cohereResponse = '';

      // Hiển thị tin nhắn của người dùng trước khi có câu trả lời của AI
      setMessages([...messages, { role: 'user', content: trimmedMessage }]);
      setInputMessage('');
      setIsLoadingMessage(true);
      try {
          if (intent === 'BookTicket') {
              await fetchStations();
              cohereResponse = "Bạn muốn chọn bến đi ở đâu?";
          } else if (intent === 'CountBookedTickets') {
              const response = await axios.get(`${apiUrl}/ticketAlls`);
              const bookedTickets = response.data.result.content.filter(ticket => ticket.status === 'booked').length;
              cohereResponse = `Có ${bookedTickets} vé đã được đặt.`;
          } else if (intent === 'GetTripsByDate') {
              const dateMatch = trimmedMessage.match(/\d{4}-\d{2}-\d{2}/); // Extract date from message
              if (dateMatch) {
                  const date = dateMatch[0];
                  const response = await axios.get(`${apiUrl}/trips/${date}`);
                  const trips = response.data.result;
                  if (trips.length > 0) {
                      cohereResponse = `Có ${trips.length} chuyến đi vào ngày ${date}.`;
                  } else {
cohereResponse = `Không có chuyến đi nào vào ngày ${date}.`;
                  }
              } else {
                  cohereResponse = "Xin lỗi, tôi cần ngày cụ thể để tìm chuyến đi.";
              }
          }else if(intent === "About"){
             cohereResponse = "Tôi là một trợ lý ảo của Saigon Waterbus. Tôi có thể giúp bạn tìm chuyến, đặt vé và trả lời các câu hỏi của bạn";
          }
           else if (intent === 'GeneralQuery') {
              const response = await axios.post(
                  'https://api.cohere.ai/v1/generate',
                  {
                      prompt: `You are a helpful assistant knowledgeable about trips. Answer the following question: ${trimmedMessage}`,
                      model: 'command-xlarge-nightly',
                      max_tokens: 50,
                      temperature: 0.75,
                  },
                  {
                      headers: {
                          Authorization: `Bearer BHkuI7CHIGeS3TFuwge8EEI2CSvZ3CHBPrrLfuMo`, // Replace with your actual API key
                          'Content-Type': 'application/json',
                      },
                  }
              );

              cohereResponse = response.data.generations[0].text;
          } else {
              cohereResponse = "Xin lỗi, tôi không hiểu yêu cầu của bạn.";
          }

          if (cohereResponse) {
              setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: cohereResponse }]);
          }
      } catch (error) {
          console.error('Error during chat:', error.response?.data || error.message);
      }finally {
              setIsLoadingMessage(false); // Tắt loading sau 5 giây
      }
  };

  const handleStationSelection = (station) => {
      if (!selectedDepartureStation) {
          setSelectedDepartureStation(station);
          setMessages([...messages, { role: 'assistant', content: `Bạn đã chọn bến đi: ${station.name}` }]);
          setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: 'bây giờ xin chọn bến đến' }]);
      } else {
          setSelectedArrivalStation(station);
          setMessages([...messages, { role: 'assistant', content: `Bạn đã chọn bến đến: ${station.name}.` }]);
          setShowDateOptions(true);
      }
  };
  const handlePayment = async () => {
    const seatData = JSON.parse(localStorage.getItem('seatData')) || [];
    const chuyenData = JSON.parse(localStorage.getItem('chuyenData')) || {};
    const total = selectedSeats.length * 15000;
    const username = localStorage.getItem("us");
    console.log(selectedSeats);
    localStorage.setItem('seatData', JSON.stringify(selectedSeats));
    localStorage.setItem('total', total.toString());

    setShowSeatSelection(false);
    setShowTripSelection(false);

      const emailInput = prompt("Vui lòng nhập email thanh toán bạn:");

        localStorage.setItem('us', emailInput);
  
        setUserDetails((prevDetails) => ({
        ...prevDetails,
          email: emailInput,
        }));
        const updatedOrderData = {
          ...orderData,
          email: emailInput,
        }; 
        localStorage.setItem('orderData', JSON.stringify(updatedOrderData));
  
        try {
          const response = await axios.post(`${apiUrl}/check-ticket`, seatData, {
            params: {
              departureDate: chuyenData.departureDate,
            },
          });
  
          if (response.data.code === 500) {
            alert("Trùng ghế");
            return;
          } else {
            console.log("data", updatedOrderData);
  
            const localStorageData = {
              total: localStorage.getItem('total'),
              chuyenData: localStorage.getItem('chuyenData'),
              seatData: localStorage.getItem('seatData'),
              orderData: JSON.stringify(updatedOrderData),
            };
  
            const now = new Date();
            localStorage.setItem('paymentStatus', 'inProgress');
            const expirationTime = new Date(now.getTime() + 12 * 60 * 1000);
            const expirationTimeString = expirationTime.toISOString();
            localStorage.setItem('expirationTime', expirationTimeString);
  
            try {
            const response= await axios.post(`${apiUrl}/hold-ticket`, { localStorageData });
            localStorage.setItem('idHd',response.data)
            } catch (error) {
              console.error('Error sending localStorage data to server:', error);
            }
              
          }
  
          window.location.href = '/dopayment';
        } catch (error) {
          console.error('Error:', error);
        }
  
        try {
          const paymentResponse = await axios.post(`${apiUrl}/payment/vnpay`, {
            orderId: new Date().getTime().toString(), // Sử dụng timestamp làm orderId
            amount: total,
            returnUrl: 'https://saigonwaterbus.click/api/saigonwaterbus/payment/vnpay/return',
          });
          const paymentWindow = window.open(paymentResponse.data, 'Payment', 'width=600,height=600');
          setSubmitted(true);
        } catch (error) {
          console.error('Error sending payment request:', error);
        }
  };
  
  
  
  const handleDateOptionSelection = (option) => {
      if (option === 'today') {
          const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
          setSelectedDate(today);
          setMessages([...messages, { role: 'assistant', content: `Bạn đã chọn đi vào hôm nay: ${today}.` }]);
          setShowDateInput(false); // Hide date input
          fetchTrips(selectedDepartureStation, selectedArrivalStation, today); // Fetch trips
      } else {
          setMessages([...messages, { role: 'assistant', content: `Bạn muốn chọn ngày khởi hành.` }]);
          setShowDateInput(true); // Show date input
      }
      setShowDateOptions(false);
  };

  const handleDateChange = (e) => {
      const date = e.target.value;
      setSelectedDate(date);
setMessages([...messages, { role: 'assistant', content: `Bạn đã chọn ngày khởi hành: ${e.target.value}.` }]);
      fetchTrips(selectedDepartureStation, selectedArrivalStation, e.target.value); // Fetch trips
      setShowDateInput(false);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
        <div className={`w-72 h-96 bg-gray-100 border p-4 mb-4 rounded-lg shadow-lg flex flex-col transform transition-transform duration-1000 ease-in-out ${
          isChatOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}>
            <div className="flex-grow overflow-y-auto mb-4 flex flex-col text-sm">
                {/* Các thành phần chat */}
                {/* ... */}
                {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`mb-3 max-w-lg ${
                                message.role === 'user' ?
'flex justify-end' : 
                                'flex justify-start'
                            }`}
                        >
                            <div 
                                className={`p-3 rounded-lg shadow-lg break-words ${
                                    message.role === 'user' ? 
                                    'bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-right' : 
                                    'bg-gradient-to-r from-gray-300 to-gray-400 text-black text-left'
                                }`}
                                style={{ maxWidth: '80%' }}  // Giới hạn chiều rộng của tin nhắn
                            >
                                <strong>{message.role === 'user' ? 'Bạn' : 'hỗ trợ'}:</strong> {message.content}
                            </div>
                        </div>
                    ))}

                    {isLoadingMessage && (
                        <div className="mb-3 max-w-lg flex justify-start">
                            <div 
                                className={`p-3 rounded-lg shadow-lg break-words bg-gradient-to-r from-gray-200 to-gray-300 text-black text-left`}
                                style={{ maxWidth: '80%' }}  // Giới hạn chiều rộng của tin nhắn
                            >
                                 <div className="flex justify-center items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400"></div>
                                </div>
                            </div>
                        </div>
                    )}


                        {stations.length > 0 && !selectedArrivalStation && (
                            <div className="mb-4 grid grid-cols-2 gap-3 justify-center">
                                {stations.map((station) => (
                                    <button
                                        key={station.id}
                                        onClick={() => handleStationSelection(station)}
                                        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                                    >
                                        {station.name}
                                    </button>
                                ))}
                            </div>
                        )}

                    {showDateOptions && (
                        <div className="mb-4 flex gap-3 justify-center">
                            <button 
                                onClick={() => handleDateOptionSelection('today')} 
                                className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
>
                                Đi hôm nay
                            </button>
                            <button 
                                onClick={() => handleDateOptionSelection('other')} 
                                className="px-5 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
                            >
                                Chọn ngày khác
                            </button>
                        </div>
                    )}

                    {showDateInput && (
                        <div className="mb-4">
                            <input
                                type="date"
                                onChange={handleDateChange}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    {showTripSelection && trips.length > 0 && (
                        <div className="mb-4 grid grid-cols-1 gap-3">
                            {trips.map((trip) => (
                                <button
                                    key={trip.id}
                                    onClick={() => handleTripSelection(trip)}
                                    className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
                                >
                                    {`Chuyến số: ${trip.id}: ${trip.startTerminal}-${trip.endTerminal}`}
                                </button>
                            ))}
                        </div>
                    )}


                    {showSeatSelection ? (
                        seats.length > 0 && (
                            <div className="mb-4 flex flex-wrap gap-2 justify-center">
                                {seats.map((seat) => (
                                    <div key={seat.id} className="flex flex-col items-center">
                                        <button
                                            onClick={() => handleSeatSelection(seat)}
                                            className={`w-12 h-12 ${
                                                seat.isBooked 
                                                ? 'bg-red-500 text-white cursor-not-allowed' 
                                                : selectedSeats.find(s => s.id === seat.id) 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-white text-blue-700 hover:bg-blue-500 hover:text-white' 
                                            } border border-gray-300 rounded-lg transition duration-200 flex items-center justify-center text-sm`}
                                            disabled={seat.isBooked}
                                        >
                                            {seat.seatName}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : null}
                    {showSeatSelection && selectedSeats.length > 0 && (
                        <div className="flex justify-center mt-4">
                            <button 
                                onClick={handlePayment} 
                                className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
                            >
                                Thanh toán
                            </button>
                        </div>
                    )}

            </div>

            <div className="flex">
                <input type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={handleSendMessage} 
                    className="px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Send
                </button>
            </div>
        </div>

    <div
      className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-105 active:scale-95 overflow-hidden"
      onClick={toggleChat}
      style={glowAnimation}
    >
      <div
        className="absolute inset-0 rounded-full ring-4 ring-blue-300 ring-opacity-50"
        style={{
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)', // Default state
          animation: 'glow 2s infinite',
        }}
></div>
      💬
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          50% {
            box-shadow: 0 0 10px rgba(29, 78, 216, 0.8); /* Adjust color and intensity as needed */
          }
          100% {
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </div>
    </div>
);

};

export default ChatWidget;