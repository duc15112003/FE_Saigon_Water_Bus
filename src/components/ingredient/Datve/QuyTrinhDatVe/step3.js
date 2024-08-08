import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const apiUrl = process.env.REACT_APP_API_URL;

const Step3 = ({ prevStep }) => {
  let paymentWindow = null;
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    trip: JSON.parse(localStorage.getItem('chuyenData')) || {},
    seat: JSON.parse(localStorage.getItem('seatData')) || [],
    total: localStorage.getItem('total')
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message, phone, trip, seat, total } = userDetails;
    const orderData = { name, email, message, phone, trip, seat, total };
    localStorage.setItem('orderData', JSON.stringify(orderData)); // Lưu thông tin đơn hàng vào localStorage

    try {
      const response = await axios.post(`${apiUrl}/payment/vnpay`, {
        orderId: new Date().getTime().toString(), // Sử dụng timestamp làm orderId
        amount: total,
        returnUrl: `${apiUrl}/payment/vnpay/return`
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
    const handlePaymentMessage = (event) => {
      if (event.data === 'payment_success') {
        closePaymentPopup();
        sendEmail();
      }
    };

    window.addEventListener('message', handlePaymentMessage);
    return () => {
      window.removeEventListener('message', handlePaymentMessage);
    };
  }, []);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }

  const sendEmail = async () => {
    setIsLoading(true); // Show loading indicator
    const chuyenMail = JSON.parse(localStorage.getItem('orderData'));
    const chuyenData = JSON.parse(localStorage.getItem('chuyenData'));
    const seatData = JSON.parse(localStorage.getItem('seatData'));
    if (!seatData) {
      console.error('Seat data is not available');
      setIsLoading(false); // Hide loading indicator if seat data is not available
      return;
    }

    const seatNames = seatData.map(seat => seat.seatName).join(', ');
    const to = chuyenMail.email;
    const subject = "Thanh toán thành công đặt vé Saigonwaterbus";
    const body = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #87CEEB;">
        <img src="https://saigonwaterbus.com/wp-content/uploads/2022/06/logo-swb-v-white.png" alt="" style="width: 200px; height: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
        <h2 style="color: #007bff; margin-bottom: 20px; font-size: 24px;">Thông tin vé Saigonwaterbus</h2>
        <p style="font-size: 18px;"><strong>Thời gian khởi hành:</strong>${chuyenData.departureTime} ngày ${formatDate(chuyenData.departureDate)}</p>
        <p style="font-size: 18px;"><strong>Bến khởi hành:</strong> ${chuyenData.startTerminal}</p>
        <p style="font-size: 18px;"><strong>Bến kết thúc:</strong> ${chuyenData.endTerminal}</p>
        <p style="font-size: 18px;"><strong>Thời gian khởi hành:</strong> ${chuyenData.departureTime}</p>
        <p style="font-size: 18px;"><strong>Số ghế đã đặt:</strong> ${seatNames}</p>
        <hr style="border-top: 1px solid #ddd; margin-top: 20px; margin-bottom: 20px;">
        <p style="font-size: 16px; color: #FF3300;">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Vui lòng giữ mã QR này lại khi tới bến.</p>
    </div>
    `;
    const emailContent = `Ngày khởi hành: ${chuyenData.departureDate} \nBến khởi hành: ${chuyenData.startTerminal} \nBến kết thúc: ${chuyenData.endTerminal} \nThời gian khởi hành: ${chuyenData.departureTime} \nSố ghế: ${seatNames}`;

    const emailData = {
      to: to,
      subject: subject,
      body: body,
      contentForQR: emailContent
    };

    try {
      const response = await axios.post(`${apiUrl}/send-mail`, emailData);
      console.log(response.data);
      sendLocalStorageToServer();
      window.location.href = 'https://saigonwaterbus.click/dat-ve/thanh-toan-thanh-cong';
    } catch (error) {
      console.error('Error calling the send-mail API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closePaymentPopup = () => {
    if (paymentWindow) {
      paymentWindow.close();
    }
  };

  return (
      <div className="container mx-auto max-w-md mt-10">
        {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="flex items-center space-x-2 text-white text-lg">
                <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                          strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5"></path>
                </svg>
                <span className='text-base'>{t('paymentProcessing')}</span>
              </div>
            </div>
        )}
        <h2 className="text-2xl font-bold text-center">{t('contactBooking')}</h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('name')} *</label>
            <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
                required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('phone')}</label>
            <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('email')} *</label>
            <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
                required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('message')}</label>
            <textarea
                name="message"
                value={userDetails.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <button
                className="button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                onClick={prevStep}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              {t('back')}
            </button>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-2"
            >
              {t('pay')}
            </button>
          </div>

          {submitted && (
              <div className="mt-4 text-green-500">{t('paymentSuccessMessage')}</div>
          )}
        </form>
      </div>
  );
};

export default Step3;
