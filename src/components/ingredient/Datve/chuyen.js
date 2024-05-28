import React, { useState, useMemo, useRef} from "react";
import SeatingChart from "./ghetau";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function ChuyenTau() {
      const [startDate, setStartDate] = useState(new Date());
//fetch api
const [listChuyen, setListChuyen]= useState([])
const [message1, setMessage1]= useState('')

  const fromRef = useRef();
  const toRef = useRef();

const year = startDate.getFullYear();
const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Lưu ý rằng tháng trong JavaScript là từ 0 đến 11
const day = String(startDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;


const timChuyen = async (event) =>{
        // event.preventDefault();
 if (event) {
        event.preventDefault();
    }
const searchParams = {
    from: fromRef.current.value,
    to: toRef.current.value,
    departDate: formattedDate
};
try {
    const response= await axios.get('http://localhost:8080/dat-ve',{
        params: searchParams
    });
        setListChuyen(response.data)
   setMessage1('')

} catch (error) {
   setMessage1('Thông tin tìm kiếm không phù hợp vui lòng kiểm tra lại!')
    setListChuyen([])
}    
}



    const [selectedOption, setSelectedOption] = useState('Giờ đi sớm nhất');
    const [openSeat, setOpenSeat] = useState({});

    const options = [
        'Giờ đi sớm nhất',
        'Giờ đi muộn nhất',
        'Giá tăng dần',
        'Giá giảm dần'
    ];

const sortedChuyen = useMemo(() => {
    let sortedList = [...listChuyen];
    switch (selectedOption) {
        case 'Giờ đi sớm nhất':
            sortedList.sort((a, b) => new Date('1970/01/01 ' + a.start_time) - new Date('1970/01/01 ' + b.start_time));
            break;
        case 'Giờ đi muộn nhất':
            sortedList.sort((a, b) => new Date('1970/01/01 ' + b.start_time) - new Date('1970/01/01 ' + a.start_time));
            break;
        case 'Giá tăng dần':
            sortedList.sort((a, b) => a.price - b.price);
            break;
        case 'Giá giảm dần':
            sortedList.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }
    return sortedList;
}, [listChuyen, selectedOption]);

    return (
        <div className="mx-auto container p-4">
        {/* form tim chuyen */}
<div className="flex justify-center content-center">
                      <span className="font-bold text-3xl p-4"> {message1}</span>
</div>
<form
              autoComplete="off"
              className="w-full"
            onSubmit={timChuyen}
            >
              <div className="search-box-content flex flex-wrap gap-4 items-end">
                <div className="flex-1 flex flex-col w-full md:w-auto relative">
                  <label className="block text-gray-700">Nơi đi</label>
            <div className="flex items-center relative">
                <select
                        className="appearance-none w-full p-2 border border-gray-300 rounded pr-10"
                        id="inputFrom"
                        ref={fromRef} // Giá trị mặc định của select, có thể thay đổi tùy theo nhu cầu của bạn
                    >
                                            <option value="nơi đến" selected disabled hidden>Nhập nơi đi</option>
                        <option value="1">Bạch đằng</option> 
                            <option value="2">Bình an</option>
                        <option value="3">Thanh đa</option>
                            <option value="4">Hiệp Bình Chánh</option>
                        <option value="5">Linh Đông</option>
                    </select>
                    <img
                        decoding="async"
                        src="//static.vexere.com/webnx/prod/img/from-v5.svg"
                        alt=""
                        className="h-8 absolute right-3"
                    />
                    </div>
                  <input id="from" name="from" type="hidden" defaultValue="" />
                  <input id="nameFrom" name="nameFrom" type="hidden" />
                  <input
                    id="pickupPointDistrict"
                    name="pickupPointDistrict"
                    type="hidden"
                  />
                  <input id="pickupPointName" name="pickupPointName" type="hidden" />
                  <input id="fromLabel" name="fromLabel" type="hidden" />
                </div>
                {/* button chuyen qua lai ngay di noi di den */}
                <button>
                <img class="swap-area" decoding="async" src="//static.vexere.com/webnx/prod/img/swap-v3.svg" alt=""></img>
                </button>
                <div className="flex-1 flex flex-col w-full md:w-auto relative">
                  <label className="block text-gray-700">Nơi đến</label>
                <div className="relative">
                <select
                    className="appearance-none w-full p-2 border border-gray-300 rounded pr-10" // Thêm pr-10 để tạo khoảng trống bên phải cho icon
                    id="inputTo"
                    ref={toRef}
                                    >
                        <option value="nơi đến" selected disabled hidden>Nhập nơi đến</option>
                        <option value="1">Bạch đằng</option> 
                            <option value="2">Bình an</option>

                        <option value="3">Thanh đa</option>
                            <option value="4">Hiệp Bình Chánh</option>

                        <option value="5">Linh Đông</option>
                    </select>
                    <img
                        decoding="async"
                        src="//static.vexere.com/webnx/prod/img/to-v5.svg"
                        alt=""
                        className="h-8 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                    </div>
                  <input id="to" name="to" type="hidden" defaultValue="" />
                  <input id="nameTo" name="nameTo" type="hidden" />
                  <input
                    id="dropoffPointDistrict"
                    name="dropoffPointDistrict"
                    type="hidden"
                  />
                  <input id="dropoffPointName" name="dropoffPointName" type="hidden" />
                  <input id="toLabel" name="toLabel" type="hidden" />
                </div>
            <div className="flex-1 flex flex-col w-full md:w-auto relative">
                <label className="block text-gray-700">Ngày khởi hành</label>
                <div className="flex items-center relative">
                        <DatePicker
                            className="p-2 lg:w-80 w-auto border border-gray-300 rounded mr-2"
                            name="departDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                    
                            dateFormat="dd/MM/yyyy"
                            style={{ width: '165%' }} // Loại bỏ !important và chỉ cần truyền một đối tượng JavaScript với thuộc tính width
                        />
                <img
                decoding="async"
                src="//static.vexere.com/webnx/prod/img/date-v5.svg"
                alt=""
                className="h-8 absolute right-3 "
              />  
            </div>
          </div>
                <div className="flex w-full md:w-auto">
                      <button
                        className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 inline-block mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                        <span className="inline-block">Tìm vé</span>
                      </button>
                </div>
              </div>
            </form>
            <div className="flex items-center space-x-4 my-4">
                <span className="font-semibold">Sắp xếp theo:</span>
                {listChuyen&&options.map(option => (
                    <button
                        key={option}
                        className={`px-4 py-2 rounded transition ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

   {sortedChuyen.map(chuyen => (
    <div>
    <div key={chuyen.id} className="pageChuyen gap-2 flex container mx-auto p-4 border-b border-gray-300 shadow-lg mb-4">
        <div className="w-3/12">
            <img className="w-full h-full object-cover rounded-lg" alt="" src="/img/chuyentau.jpeg" />
        </div>
        <div className="w-6/12 px-4">
            <h1 className="text-lg font-bold mb-2">Ghế ngồi {chuyen.availableSeats} chỗ</h1>
            <div className="flex items-center mb-2">
                <div className="ghe1 px-2">
                    <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 dSQflF" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74">
                        {/* Mã SVG */}
                    </svg>
                </div>
                <div className="chuyen">
                    <h1 className="font-medium">{chuyen.departureTime} ● {chuyen.fromTerminal}</h1>
                    <span className="text-xs text-gray-500">32 phút</span>
                    <h1 className="font-medium">{chuyen.arrivalTime} ● {chuyen.toTerminal}</h1>
                </div>
            </div>
            <div className="gap-1">
                <div className="flex items-center">
                    <span className="font-medium">Thông tin chi tiết</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                        {/* Mã SVG */}
                    </svg>
                </div>
                <h1 className="text-sm text-gray-600">Vé chặng thuộc chuyến {chuyen.departureDate} {chuyen.fromTerminal} - {chuyen.toTerminal}</h1>
            </div>
        </div>
        <div className="w-3/12 flex flex-col items-end justify-between">
            <h1 className="text-xl font-bold text-blue-600">{chuyen.totalSeats.toLocaleString()}đ</h1>
            <button onClick={() => setOpenSeat(prevState => ({ ...prevState, [chuyen.id]: !prevState[chuyen.id] }))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                Chọn chỗ
            </button>
        </div>

    </div>
                                {openSeat[chuyen.id] && <SeatingChart />}

</div>
))}


        </div>
    );
}

export default ChuyenTau;
