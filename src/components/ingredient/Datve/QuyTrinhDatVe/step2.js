import React from 'react';

const Step2 = ({ nextStep, prevStep,chuyenTau,clickedSeats }) => {
    localStorage.setItem('total', (clickedSeats.length * 15000).toString());
  return (
    <div className='container mx-auto '>
        <div className='mx-auto container flex justify-center w-1/2  h-96'>
{/* Tổng tiền làaaa: {total} */}
      <div className=' h-64  w-1/2'>
       <h1 className='font-bold '>Điểm đi</h1>
                      <ul className="ml-8">
                        <li className="item-info">
                          <label>
                         
                            <input type="radio" id="08:30 • Bến tàu Bạch Đằng" value="0" />
                            <span className=" blue-text font-bold">08:30 • Bến tàu {chuyenTau.startTerminal}</span>
                          </label>
                          <div className="full-address-row flex items-center">
                            <img alt="" src="https://static.vexere.com/webnx/prod/widget/images/location-icon.svg" className="mr-2" />
                            <span className="pickup-address">{chuyenTau.addressStart}</span>
                          </div>
                        </li>
                      </ul>
       </div>
<div class="line-column border-l-2 border-gray-400 "></div>
      <div className='h-full ml-4  w-1/2'>
              <h1 className='font-bold my-2'>Điểm đến</h1>

                      <ul className="pickup-transfer-list pickup-list ml-8">
                        <li className="item-info">
                          <label>
                            <input type="radio" id="08:45 • Bến tàu Bình An" value="0"  />
                            <span className="point-title blue-text font-bold">08:45 • Bến tàu {chuyenTau.endTerminal}</span>
                          </label>
                          <div className="full-address-row flex items-center">
                            <img alt="" src="https://static.vexere.com/webnx/prod/widget/images/location-icon.svg" className="mr-2" />
                            <span className="pickup-address">{chuyenTau.addressEnd}</span>
                          </div>
                        </li>
                      </ul>
              </div>
              
          </div>
<div className='flex  w-1/2 justify-between container mx-auto'>
  <button className="button  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center" onClick={prevStep}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
    Quay lại
  </button>
    <span>    Tổng tiền: {clickedSeats.length * 15000}đ
</span>
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

export default Step2;
