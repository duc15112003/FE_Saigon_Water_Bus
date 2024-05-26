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
  { id: 38, seat_name: "5B", status: true }


];

const SeatingChart = () => {
  const [clickedSeats, setClickedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    setClickedSeats((prevClickedSeats) => {
      if (prevClickedSeats.includes(seat)) {
        return prevClickedSeats.filter(clickedSeat => clickedSeat !== seat);
      } else {
        return [...prevClickedSeats, seat];
      }
    });
  };
  useEffect(() => {
    console.log(clickedSeats);
  }, [clickedSeats]);
  
  
 const renderSeat = (seat) => {
  const isSelected = clickedSeats.includes(seat);
  return (
    <div className=''>
      <div className={`seat-item available z-max text-sm ${isSelected ? 'selected-seat' : ''} ${seat.status ? '' : 'seat-type-info disabled unavailable'}`} key={seat}>
        <div className={`relative `}>
          <div
            className="flex items-center justify-center h-12 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => seat.status && handleSeatClick(seat)}
          >
<span className={`relative cursor-pointer text-sm font-semibold ${!seat.status ? 'text-transparent' : ''} ${isSelected ? 'text-transparent' : ''}`}>{seat.seat_name}</span>

          </div>
<div className={`${isSelected ? 'seat-type-info selected ' : ''}`} color="#B8B8B8">
  <svg
    width={48}
    height={40}
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
<div className='container max-w-xl mx-auto'>
  <div className="flex flex-col items-center mt-10">
<div className='flex gap-32 py-4'>
        <div className="seat-type-info available">
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
          <div className="seat-type-info-value">Còn trống</div>
        </div>
        <div className="seat-type-info unavailable">

  <svg
    width={48}
    height={40}
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
  <div className="seat-type-info-value">Ghế không bán</div>
</div>

<div class="seat-type-info selected"><svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.75" y="2.75" width="22.5" height="26.5" rx="2.25" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="10.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 10.25 11.75)" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="35.25" y="11.75" width="14.5" height="5.5" rx="2.25" transform="rotate(90 35.25 11.75)" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><rect x="8.75" y="22.75" width="22.5" height="6.5" rx="2.25" fill="#FFFFFF" stroke="#B8B8B8" stroke-width="1.5" stroke-linejoin="round"></rect><path class="icon-selected" d="M20.0002 6.33337C16.3202 6.33337 13.3335 9.32004 13.3335 13C13.3335 16.68 16.3202 19.6667 20.0002 19.6667C23.6802 19.6667 26.6668 16.68 26.6668 13C26.6668 9.32004 23.6802 6.33337 20.0002 6.33337ZM18.6668 16.3334L15.3335 13L16.2735 12.06L18.6668 14.4467L23.7268 9.38671L24.6668 10.3334L18.6668 16.3334Z" fill="transparent"></path><path class="icon-disabled" d="M24.96 9.45992L23.54 8.03992L20 11.5899L16.46 8.03992L15.04 9.45992L18.59 12.9999L15.04 16.5399L16.46 17.9599L20 14.4099L23.54 17.9599L24.96 16.5399L21.41 12.9999L24.96 9.45992Z" fill="transparent"></path></svg><div class="seat-type-info-value">Đang chọn</div></div>
</div>
<div className="flex flex-wrap justify-center mb-2 bg-white">
<div className="grid grid-cols-7 gap-2 justify-center py-6">
  {seatLabels.map((seat, index) => (
    <React.Fragment key={seat.id}>
      {renderSeat(seat)}
      {(seat.id ) === 3 + 6 * Math.floor(index / 6) && <div className="col-span-1"></div>}
    </React.Fragment>
  ))}
</div>





</div>
<div>
{clickedSeats === 0 && (
  <div>
    <h1>Vui lòng chọn ít nhất 1 chỗ ngồi</h1>
  </div>
)}


</div>



    </div>
<div className='container mx-auto flex'>
  <div className="flex-grow">
 
      <span className='font-bold'>Số ghế:</span>
  
    {clickedSeats.map((seat, index) => (
      <span key={seat.id}>{seat.seat_name}{index !== clickedSeats.length - 1 && ', '}</span>
    ))}
  </div>
  <div>
    Tổng tiền: {clickedSeats.length * 15000}
  </div>
</div>



</div>
  );
};

export default SeatingChart;
