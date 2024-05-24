import React, { useState,useEffect } from 'react';

const seatLabels = [
  ["1A", "1B", "1C", "", "1D", "1E", "1F"],
  ["2A", "2B", "2C", "", "2D", "2E", "2F"],
  ["3A", "3B", "3C", "", "3D", "3E", "3F"],
  ["4A", "4B", "4C", "", "4D", "4E", "4F"],
  ["5A", "5B", "5C", "", "5D", "5E", "5F"],
  ["6A", "6B", "6C", "", "6D", "6E", "6F"],
  ["7A", "7B", "7C", "", "7D", "7E", "7F"],
  ["8A", "8B", "8C", "", "8D", "8E", "8F"],
  ["9A", "9B", "9C", "", "9D", "9E", "9F"],
  ["10A", "10B", "10C", "", "10D", "10E", "10F"],
  ["11A", "11B", "11C", "", "11D", "11E", "11F"],
  ["12A", "12B", "12C", "", "12D", "12E", "12F"]
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
    const seatColor = isSelected ? "#B8B8B8" : "#B8B8B8"; // Cha
    return (
      <div className="seat-item available z-max text-sm" key={seat}>
        <div className="Seat__SeatContainer-cRMPdR eXOSRu" style={{ color: seatColor, position: 'relative' }}>
          <div className="Seat__SeatCode-jeBMar bTYNom" style={{ color: seatColor, height: 32, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} onClick={() => handleSeatClick(seat)}>
            
            <div>{seat}</div>
          </div>
          <svg
            width={40}
            height={32}
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <rect
              x="8.75"
              y="2.75"
              width="22.5"
              height="26.5"
              rx="2.25"
              fill="#FFFFFF"
              stroke={seatColor}
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
              stroke={seatColor}
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
              stroke={seatColor}
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
              stroke={seatColor}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {isSelected ? (
<svg
  viewBox="0 0 512 512"
  fill="#00FF00"
  height="1.5em"
  width="1.5em"
>

      <path d="M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>

            ) :''}
          </svg>
        </div>
      </div>
    );
  };


  return (
<div className="flex flex-col items-center mt-10">

      {seatLabels.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2">
          {row.map((seat, seatIndex) =>
            seat ? renderSeat(seat) : <div key={seatIndex} className="w-10 h-10 m-1 text-sm"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeatingChart;
