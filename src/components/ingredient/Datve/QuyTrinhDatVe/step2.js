import React from 'react';

const Step2 = ({ nextStep, prevStep, chuyenTau, clickedSeats }) => {
  localStorage.setItem('total', (clickedSeats.length * 15000).toString());
  
  return (
    <div className='container mx-auto px-6'>
      <div className='flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4'>
        <div className='w-full md:w-1/2 h-auto'>
          <h1 className='font-bold text-center md:text-left'>Điểm đi</h1>
          <ul className="ml-4 md:ml-8">
            <li className="item-info">
              <label>
                <input type="radio" id="08:30 • Bến tàu Bạch Đằng" value="0" />
                <span className="blue-text font-bold">08:30 • Bến tàu {chuyenTau.startTerminal}</span>
              </label>
              <div className="full-address-row flex items-center">
                <img alt="" src="https://static.vexere.com/webnx/prod/widget/images/location-icon.svg" className="mr-2" />
                <span className="pickup-address">{chuyenTau.addressStart}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden md:block border-l-2 border-gray-400"></div>
        <div className='w-full md:w-1/2 h-auto'>
          <h1 className='font-bold text-center md:text-left my-2'>Điểm đến</h1>
          <ul className="ml-4 md:ml-8">
            <li className="item-info">
              <label>
                <input type="radio" id="08:45 • Bến tàu Bình An" value="0" />
                <span className="blue-text font-bold">08:45 • Bến tàu {chuyenTau.endTerminal}</span>
              </label>
              <div className="full-address-row flex items-center">
                <img alt="" src="https://static.vexere.com/webnx/prod/widget/images/location-icon.svg" className="mr-2" />
                <span className="pickup-address">{chuyenTau.addressEnd}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0 md:space-x-4'>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center" 
          onClick={prevStep}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Quay lại
        </button>
        <span className="text-center">Tổng tiền: {clickedSeats.length * 15000}đ</span>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={nextStep}
        >
          Tiếp tục
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step2;
