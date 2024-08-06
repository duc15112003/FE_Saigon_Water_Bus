import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const formatDateTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);

    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();

    return ` ${day}/${month}/${year}`;
};

const LichSuDatVe = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await fetch('http://localhost:8080/api/saigonwaterbus/booking-history', requestOptions);
            const jsonData = await response.json();
            setData(jsonData.result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'check':
                return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
            case 'x':
                return <XCircleIcon className="w-5 h-5 text-red-500" />;
            default:
                return null;
        }
    };

    // Tính tổng tiền từ mảng data
    const totalAmount = data.reduce((acc, item) => acc + parseFloat(item[5]), 0);

    return (
    <div className="">
      <div className="flex items-center justify-center bg-stone-200 h-40 mb-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Lịch sử đặt vé</h1>
        </div>
      </div>
      {data && data.length > 0 ? (
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg text-sm lg:text-base">
              <thead>
                <tr className="bg-blue-400 text-white">
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">STT</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Tên tuyến đi</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Tên ghế</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Số lượng vé</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Ngày mua</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Thành tiền</th>
                  <th className="px-2 py-2 border-b text-left font-medium text-gray-600">Phương thức thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-2 py-2 border-b text-gray-700">{index + 1}</td>
                    <td className="px-2 py-2 border-b text-gray-700">{item[1]}</td>
                    <td className="px-2 py-2 border-b text-gray-700">{item[2]}</td>
                    <td className="px-2 py-2 border-b text-gray-700">{item[3]}</td>
                    <td className="px-2 py-2 border-b text-gray-700">{formatDateTime(item[4])}</td>
                    <td className="px-2 py-2 border-b text-gray-700">
                      {parseFloat(item[5]).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </td>
                    <td className="px-2 py-2 border-b text-gray-700">
                      {item[6] === 'BANK_TRANSFER' ? 'Chuyển khoản' : 'Tiền mặt'}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td colSpan="6" className="px-2 py-2 border-b text-left font-medium text-gray-600">Tổng cộng</td>
                  <td className="px-2 py-2 border-b text-left font-medium text-gray-600">
                    {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="container mx-auto text-center mt-4 bg-gray-200 border border-gray-300 p-4 rounded-lg flex items-center justify-center space-x-2">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
          </svg>
          <p className="text-gray-600">
            Không có lịch sử đặt vé{' '}
            <a href="/dat-ve">
              <button className="bg-green-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Đặt vé ngay</span>
              </button>
            </a>
          </p>
        </div>
      )}
    </div>
    );
};

export default LichSuDatVe;
