import React, { useState } from 'react';

const Step3 = ({ prevStep, clickedSeats, userInfor, setUserInfor }) => {
  const [submitted, setSubmitted] = useState(false);

const handleInputChange = (event) => {
  console.log('handleInputChange called');
  const { name, value } = event.target;
  setUserInfor((prevUserInfor) => ({
    ...prevUserInfor,
    [name]: value
  }));
};



  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý submit
    setSubmitted(true);
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
            value={userInfor?.name || ''}
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
            value={userInfor?.phone || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={userInfor?.email || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ghi chú</label>
          <textarea
            name="message"
            value={userInfor?.message || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
          />
        </div>

        <div className="mt-4 flex justify-between">
                    <button className="button  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center" onClick={prevStep}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
    Quay lại
  </button>
      Tổng tiền: {clickedSeats.length * 15000}đ

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
