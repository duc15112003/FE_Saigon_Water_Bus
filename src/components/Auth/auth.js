import React from 'react';


const AuthLayout = ({ children }) => {
    return (
      <div 
            style={{
                backgroundImage: `url('https://staging.saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-2-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
}
export  {AuthLayout};
