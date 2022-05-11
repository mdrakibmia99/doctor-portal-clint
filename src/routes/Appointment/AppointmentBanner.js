import React from 'react';
import { DayPicker } from 'react-day-picker';
import chairBg from '../../assets/images/bg.png'
import chairImg from '../../assets/images/chair.png'

const AppointmentBanner = ({date,setDate}) => {
    return (
        <div style={{backgroundImage:`url(${chairBg})`}} className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chairImg} className="max-w-lg rounded-lg shadow-2xl" alt='chair_image' />
          <div>
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;