import React from 'react';
import SeatingChart from '../ghetau';

const Step1 = ({ nextStep, clickedSeats,setClickedSeats}) => {
  // Trong Step1, bạn có thể sử dụng clickedSeats để hiển thị các ghế đã được chọn.
  return (
    <div className='container mx-auto '>
      <SeatingChart clickedSeats={clickedSeats} setClickedSeats={setClickedSeats}/>
      <div className='flex justify-end'>
      
<button
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
  onClick={nextStep}  
>
  Tiếp tục
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
</button>

      </div>
    </div>
  );
};

export default Step1;
