import React, { useState, useEffect } from 'react';
import axios from "axios";

const Step3 = ({ prevStep }) => {
  let paymentWindow = null;
  const [submitted, setSubmitted] = useState(false);
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
      const response = await axios.post('http://localhost:8080/api/payment/vnpay', {
        orderId: new Date().getTime().toString(), // Sử dụng timestamp làm orderId
        amount: total,
        returnUrl: 'http://localhost:8080/api/payment/vnpay/return'
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
      await axios.post('http://localhost:8080/api/saveLocalStorageData', { localStorageData });
    } catch (error) {
      console.error('Error sending localStorage data to server:', error);
    }
  };

  useEffect(() => {
    const handlePaymentMessage = (event) => {
      if (event.data === 'payment_success') {
        closePaymentPopup();
        sendLocalStorageToServer();
        window.location.href = 'http://localhost:3000';
        alert("Thanh toán thành công");
      }
    };

    window.addEventListener('message', handlePaymentMessage);
    return () => {
      window.removeEventListener('message', handlePaymentMessage);
    };
  }, []);

  const closePaymentPopup = () => {
    // Đóng cửa sổ popup khi hoàn thành thanh toán hoặc người dùng hủy bỏ
    if (paymentWindow) {
      paymentWindow.close();
    }
  };

  return (
      <div className="container mx-auto max-w-md mt-10">
        <h2 className="text-2xl font-bold text-center">Liên hệ</h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Họ tên *</label>
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
            <label className="block text-gray-700 mb-2">Số điện thoại</label>
            <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email *</label>
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
            <label className="block text-gray-700 mb-2">Ghi chú</label>
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
                onClick={prevStep}
            >
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
              Quay lại
            </button>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-2"
            >
              Thanh Toán
            </button>
          </div>

          {submitted && (
              <div className="mt-4 text-green-500">Yêu cầu của bạn đã được gửi đi!</div>
          )}
        </form>
      </div>
  );
};

export default Step3;
