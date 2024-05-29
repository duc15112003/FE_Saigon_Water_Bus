import React, { useState,useEffect } from 'react';


const seatLabels = [
  
    { id: 1, seat_name: "1A", status: true },
    { id: 2, seat_name: "1B", status: true },
    { id: 3, seat_name: "1C", status: true },
    { id: 4, seat_name: "1D", status: false },
    { id: 5, seat_name: "1E", status: true },
    { id: 6, seat_name: "1F", status: false },
    { id: 7, seat_name: "2A", status: true  },
    { id: 8, seat_name: "2B", status: true },
    { id: 9, seat_name: "2C", status: true },
    { id: 10, seat_name: "2D", status: true },
    { id: 11, seat_name: "2E", status: false },
    { id: 12, seat_name: "2F", status: false }
,
  { id: 13, seat_name: "3A", status: true },
  { id: 14, seat_name: "3B", status: true  },
  { id: 15, seat_name: "3C", status: true },
  { id: 16, seat_name: "3D", status: false },
  { id: 17, seat_name: "3E", status: true },
{ id: 18, seat_name: "3F", status: true },
 { id: 19, seat_name: "3G", status: false },
  { id: 20, seat_name: "3H", status: true },
  { id: 21, seat_name: "3I", status: false },
  { id: 22, seat_name: "3J", status: true },
  { id: 23, seat_name: "3K", status: false },
  { id: 24, seat_name: "3L", status: true },
  { id: 25, seat_name: "4A", status: false },
  { id: 26, seat_name: "4B", status: true },
  { id: 27, seat_name: "4C", status: false },
  { id: 28, seat_name: "4D", status: true },
  { id: 29, seat_name: "4E", status: false },
  { id: 30, seat_name: "4F", status: true },
  { id: 31, seat_name: "4G", status: false },
  { id: 32, seat_name: "4H", status: true },
  { id: 33, seat_name: "4I", status: false },
  { id: 34, seat_name: "4J", status: true },
  { id: 35, seat_name: "4K", status: false },
  { id: 36, seat_name: "4L", status: true },
  { id: 37, seat_name: "5A", status: false },
  { id: 38, seat_name: "5B", status: true },
  { "id": 39, "seat_name": "5C", "status": false },
  { "id": 40, "seat_name": "5D", "status": true },
  { "id": 41, "seat_name": "5E", "status": false },
  { "id": 42, "seat_name": "5F", "status": true },
  { "id": 43, "seat_name": "5G", "status": false },
  { "id": 44, "seat_name": "5H", "status": true },
  { "id": 45, "seat_name": "5I", "status": false },
  { "id": 46, "seat_name": "5J", "status": true },
  { "id": 47, "seat_name": "5K", "status": false },
  { "id": 48, "seat_name": "5L", "status": true },
  { "id": 49, "seat_name": "6A", "status": false },
  { "id": 50, "seat_name": "6B", "status": true },
  { "id": 51, "seat_name": "6C", "status": false },
  { "id": 52, "seat_name": "6D", "status": true },
  { "id": 53, "seat_name": "6E", "status": false },
  { "id": 54, "seat_name": "6F", "status": true },
  { "id": 55, "seat_name": "6G", "status": false },
  { "id": 56, "seat_name": "6H", "status": true },
  { "id": 57, "seat_name": "6I", "status": false },
  { "id": 58, "seat_name": "6J", "status": true },
  { "id": 59, "seat_name": "6K", "status": false },
  { "id": 60, "seat_name": "6L", "status": true },
  { "id": 61, "seat_name": "7A", "status": false },
  { "id": 62, "seat_name": "7B", "status": true },
  { "id": 63, "seat_name": "7C", "status": false },
  { "id": 64, "seat_name": "7D", "status": true },
  { "id": 65, "seat_name": "7E", "status": false },
  { "id": 66, "seat_name": "7F", "status": true },
  { "id": 67, "seat_name": "7G", "status": false },
  { "id": 68, "seat_name": "7H", "status": true },
  { "id": 69, "seat_name": "7I", "status": false },
  { "id": 70, "seat_name": "7J", "status": true },
  { "id": 71, "seat_name": "7K", "status": false },
  { "id": 72, "seat_name": "7L", "status": true },
  { "id": 73, "seat_name": "8A", "status": false },
  { "id": 74, "seat_name": "8B", "status": true },
  { "id": 75, "seat_name": "8C", "status": false },
    { "id": 76, "seat_name": "8D", "status": false },
      { "id": 77, "seat_name": "8E", "status": false },
  { "id": 78, "seat_name": "8F", "status": false },
    { "id": 79, "seat_name": "8E", "status": false },
];

const SeatingChart = ({ clickedSeats,setClickedSeats }) => {

  //thong bao qua so luong ge
  const [notification, setNotification] = useState('');

 const handleSeatClick = (seat) => {
  setClickedSeats((prevClickedSeats) => {
    if (prevClickedSeats.length >= 6 && !prevClickedSeats.includes(seat)) {
      return prevClickedSeats;
    } else {
      if (prevClickedSeats.includes(seat)) {
        return prevClickedSeats.filter(clickedSeat => clickedSeat !== seat);
      } else {
        return [...prevClickedSeats, seat];
      }
    }
  });
};

useEffect(() => {
  if (clickedSeats.length >= 6) {
    setNotification('Bạn chỉ có thể chọn tối đa 6 ghế.');
  } else {
    setNotification('');
  }
}, [clickedSeats, setNotification]);

  // Phần JSX còn lại của component SeatingChart
  
  
 const renderSeat = (seat) => {
  const isSelected = clickedSeats.includes(seat);
  return (
    <div className=''>
<div className={`seat-item available z-max  ${isSelected ? 'selected-seat' : ''} ${seat.status ? '' : 'seat-type-info disabled unavailable'}`} key={seat} style={{ fontSize: '10px' }}>
        <div className={`relative `}>
          <div
            className="flex items-center justify-center h-12 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => seat.status && handleSeatClick(seat)}
          >
<span className={`relative cursor-pointer font-semibold   ${!seat.status ? 'text-transparent' : ''} ${isSelected ? 'text-transparent' : ''}`}>{seat.seat_name}</span>

          </div>
<div className={`${isSelected ? 'seat-type-info selected ' : ''}`} color="#B8B8B8">
  <svg
    width={40}
    height={32}
    viewBox="0 0 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8.75"
      y="2.75"
      width="22.5"
      height="26.5"
      rx="2.25"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="10.25"
      y="11.75"
      width="14.5"
      height="5.5"
      rx="2.25"
      transform="rotate(90 10.25 11.75)"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="35.25"
      y="11.75"
      width="14.5"
      height="5.5"
      rx="2.25"
      transform="rotate(90 35.25 11.75)"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="8.75"
      y="22.75"
      width="22.5"
      height="6.5"
      rx="2.25"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      className="icon-selected"
      d="M20.0002 6.33337C16.3202 6.33337 13.3335 9.32004 13.3335 13C13.3335 16.68 16.3202 19.6667 20.0002 19.6667C23.6802 19.6667 26.6668 16.68 26.6668 13C26.6668 9.32004 23.6802 6.33337 20.0002 6.33337ZM18.6668 16.3334L15.3335 13L16.2735 12.06L18.6668 14.4467L23.7268 9.38671L24.6668 10.3334L18.6668 16.3334Z"
      fill="transparent"
    />
    <path
      className="icon-disabled"
      d="M24.96 9.45992L23.54 8.03992L20 11.5899L16.46 8.03992L15.04 9.45992L18.59 12.9999L15.04 16.5399L16.46 17.9599L20 14.4099L23.54 17.9599L24.96 16.5399L21.41 12.9999L24.96 9.45992Z"
      fill="transparent"
    />
  </svg>
</div>


        </div>
      </div>
    </div>
  );
};
const chunkSize = 6;
const seatChunks = [];
for (let i = 0; i < seatLabels.length; i += chunkSize) {
  seatChunks.push(seatLabels.slice(i, i + chunkSize));
}


// render seet
  return (
<div className="container max-w-xl mx-auto border-t border-solid border-gray-300">
  <div className="flex flex-col items-center">
      <div className='flex gap-20 py-2'>
        <div className="seat-type-info available content-center justify-center">
      <div className='flex content-center justify-center'>
                  <svg
            width={40}
            height={32}
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8.75"
              y="2.75"
              width="22.5"
              height="26.5"
              rx="2.25"
              fill="#FFFFFF"
              stroke="#B8B8B8"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <rect
              x="10.25"
              y="11.75"
              width="14.5"
              height="5.5"
              rx="2.25"
              transform="rotate(90 10.25 11.75)"
              fill="#FFFFFF"
              stroke="#B8B8B8"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <rect
              x="35.25"
              y="11.75"
              width="14.5"
              height="5.5"
              rx="2.25"
              transform="rotate(90 35.25 11.75)"
              fill="#FFFFFF"
              stroke="#B8B8B8"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <rect
              x="8.75"
              y="22.75"
              width="22.5"
              height="6.5"
              rx="2.25"
              fill="#FFFFFF"
              stroke="#B8B8B8"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              className="icon-selected"
              d="M20.0002 6.33337C16.3202 6.33337 13.3335 9.32004 13.3335 13C13.3335 16.68 16.3202 19.6667 20.0002 19.6667C23.6802 19.6667 26.6668 16.68 26.6668 13C26.6668 9.32004 23.6802 6.33337 20.0002 6.33337ZM18.6668 16.3334L15.3335 13L16.2735 12.06L18.6668 14.4467L23.7268 9.38671L24.6668 10.3334L18.6668 16.3334Z"
              fill="transparent"
            />
            <path
              className="icon-disabled"
              d="M24.96 9.45992L23.54 8.03992L20 11.5899L16.46 8.03992L15.04 9.45992L18.59 12.9999L15.04 16.5399L16.46 17.9599L20 14.4099L23.54 17.9599L24.96 16.5399L21.41 12.9999L24.96 9.45992Z"
              fill="transparent"
            />
          </svg>
      </div>
          <div className="seat-type-info-value">Còn trống</div>
        </div>
  <div className="seat-type-info unavailable">
      <div className='flex content-center justify-center'>
        <svg
    width={40}
    height={32}
    viewBox="0 0 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8.75"
      y="2.75"
      width="22.5"
      height="26.5"
      rx="2.25"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="10.25"
      y="11.75"
      width="14.5"
      height="5.5"
      rx="2.25"
      transform="rotate(90 10.25 11.75)"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="35.25"
      y="11.75"
      width="14.5"
      height="5.5"
      rx="2.25"
      transform="rotate(90 35.25 11.75)"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect
      x="8.75"
      y="22.75"
      width="22.5"
      height="6.5"
      rx="2.25"
      fill="#FFFFFF"
      stroke="#B8B8B8"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      className="icon-selected"
      d="M20.0002 6.33337C16.3202 6.33337 13.3335 9.32004 13.3335 13C13.3335 16.68 16.3202 19.6667 20.0002 19.6667C23.6802 19.6667 26.6668 16.68 26.6668 13C26.6668 9.32004 23.6802 6.33337 20.0002 6.33337ZM18.6668 16.3334L15.3335 13L16.2735 12.06L18.6668 14.4467L23.7268 9.38671L24.6668 10.3334L18.6668 16.3334Z"
      fill="transparent"
    />
    <path
      className="icon-disabled"
      d="M24.96 9.45992L23.54 8.03992L20 11.5899L16.46 8.03992L15.04 9.45992L18.59 12.9999L15.04 16.5399L16.46 17.9599L20 14.4099L23.54 17.9599L24.96 16.5399L21.41 12.9999L24.96 9.45992Z"
      fill="transparent"
    />
  </svg>
      </div>

  <div className="seat-type-info-value">Ghế không bán</div>
</div>

<div class="seat-type-info selected">
    <div className='flex content-center justify-center'>
<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.75" y="2.75" width="22.5" height="26.5" rx="2.25" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="10.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 10.25 11.75)" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="35.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 35.25 11.75)" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="8.75" y="22.75" width="22.5" height="6.5" rx="2.25" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><path class="icon-selected" d="M20.0002 6.33337C16.3202 6.33337 13.3335 9.32004 13.3335 13C13.3335 16.68 16.3202 19.6667 20.0002 19.6667C23.6802 19.6667 26.6668 16.68 26.6668 13C26.6668 9.32004 23.6802 6.33337 20.0002 6.33337ZM18.6668 16.3334L15.3335 13L16.2735 12.06L18.6668 14.4467L23.7268 9.38671L24.6668 10.3334L18.6668 16.3334Z" fill="transparent"></path><path class="icon-disabled" d="M24.96 9.45992L23.54 8.03992L20 11.5899L16.46 8.03992L15.04 9.45992L18.59 12.9999L15.04 16.5399L16.46 17.9599L20 14.4099L23.54 17.9599L24.96 16.5399L21.41 12.9999L24.96 9.45992Z" fill="transparent"></path></svg>
    </div>

<div class="seat-type-info-value">Đang chọn</div></div>
</div>
<div className="flex flex-wrap justify-center  bg-gray-50 " style={{
  background: "#f2f2f2",
  borderTopLeftRadius: "50% 15px",
  borderTopRightRadius: "50% 15px",
  borderBottomRightRadius: "5px",
  borderBottomLeftRadius: "5px"
}}><div className="grid grid-cols-7 gap-2 justify-center py-6">
{seatLabels.map((seat, index) => (
  <React.Fragment key={seat.id}>
    {renderSeat(seat)}
    {/* Add space after every 3 seats, except for positions divisible by 3 or 6 and the last row */}
    {(index < seatLabels.length - 9 || index >= seatLabels.length - 3) && (index + 1) % 3 === 0 && (index + 1) % 6 !== 0 && (
 <>
       <div className="col-span-1">
      </div>
 </>
    )}

  </React.Fragment>
))}







</div>





</div>
<div>
</div>

   <div className='text-red-500 font-bold'>
    {notification}
   </div>

    </div>
<div className='container mx-auto flex'>


  <div className="flex-grow">

<span className='font-bold'>
  {clickedSeats.length === 0 ? 'Vui lòng chọn ít nhất 1 chỗ ngồi' : `Số ghế: `}
</span>

  
    {clickedSeats.map((seat, index) => (
      <span key={seat.id}>{seat.seat_name}{index !== clickedSeats.length - 1 && ', '}</span>
    ))}
  </div>
  <div>
    Tổng tiền: {clickedSeats.length * 15000}đ
    
  </div>
</div>



</div>
  );
};

export default SeatingChart;
