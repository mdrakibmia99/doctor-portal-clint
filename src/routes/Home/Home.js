import React from 'react';
import Banner from './Banner';
import AppointmentInfo from './AppointmentInfo';
import Services from './Services';
import DentalCare from './DentalCare';
import Appointment from './Appointment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';


const Home = () => {

 
   
    

    return (
        <div className=''>
            {/* hero section start  */}
            <Banner></Banner>

            {/* Appointment information section  start  */}
            <AppointmentInfo></AppointmentInfo>

            {/* service section start */}
           <Services></Services>

           {/* dental care section  */}
           <DentalCare></DentalCare>

            {/* Appointment section start  */}
            <Appointment></Appointment>
          
            {/* testimonial section  */}
            <Testimonial></Testimonial>


            {/* contact us section start  */}
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;