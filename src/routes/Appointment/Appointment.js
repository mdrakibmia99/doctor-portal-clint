import React, { useState } from 'react';
import Footer from '../../shared/Footer/Footer';

import 'react-day-picker/dist/style.css';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
const Appointment = () => {
    const [date,setDate]=useState(new Date());
    return (
        <div className='max-w-7xl mx-auto'>
          <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
          <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;