import React, { useState, useMemo } from "react";
import SeatingChart from "./ghetau";

const listChuyen = [
    { id: 1, start_time: '08:30', start_gate: 'Bạch Đằng', end_gate: 'Thanh Đa', end_time: '09:30', price: 15000 },
    { id: 2, start_time: '09:30', start_gate: 'Bình An', end_gate: 'Linh Đông', end_time: '10:30', price: 20000 },
    { id: 3, start_time: '12:30', start_gate: 'Bà Triệu', end_gate: 'Thanh Đa', end_time: '01:30', price: 12000 }
];

function ChuyenTau() {
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
    }, [selectedOption]);

    return (
        <div className="mx-auto container p-4">
            <div className="flex items-center space-x-4 my-4">
                <span className="font-semibold">Sắp xếp theo:</span>
                {options.map(option => (
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
                        <h1 className="text-lg font-bold mb-2">Ghế ngồi 75 chỗ</h1>
                        <div className="flex items-center mb-2">
                            <div className="ghe1 px-2">
                                <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 dSQflF" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74">
                                    <path fill="none" stroke="#787878" strokeLinecap="round" strokeWidth="2" strokeDasharray="0 7" d="M7 13.5v46"></path>
                                    <g fill="none" stroke="#484848" strokeWidth="3">
                                        <circle cx="7" cy="7" r="7" stroke="none"></circle>
                                        <circle cx="7" cy="7" r="5.5"></circle>
                                    </g>
                                    <path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path>
                                </svg>
                            </div>
                            <div className="chuyen">
                                <h1 className="font-medium">{chuyen.start_time} ● {chuyen.start_gate}</h1>
                                <span className="text-xs text-gray-500">32 phút</span>
                                <h1 className="font-medium">{chuyen.end_time} ● {chuyen.end_gate}</h1>
                            </div>
                        </div>
                        <div className="gap-1">
                            <div className="flex items-center">
                                <span className="font-medium">Thông tin chi tiết</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <h1 className="text-sm text-gray-600">Vé chặng thuộc chuyến {chuyen.start_time} 27-05-2024 {chuyen.start_gate} - Linh Đông</h1>
                        </div>
                    </div>
                    <div className="w-3/12 flex flex-col items-end justify-between">
                        <h1 className="text-xl font-bold text-blue-600">{chuyen.price.toLocaleString()}đ</h1>
                        <button onClick={() => setOpenSeat(prevState => ({ ...prevState, [chuyen.id]: !prevState[chuyen.id] }))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py
                        -2 px-4 rounded transition">
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
