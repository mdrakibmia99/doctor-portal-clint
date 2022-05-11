import React from 'react';
import Banner from './Banner';
import AppointmentInfo from './AppointmentInfo';
import Services from './Services';
import DentalCare from './DentalCare';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../../shared/Footer/Footer';
import MakeAppointment from './MakeAppointment';


const Home = () => {





    return (
        <div className='max-w-7xl mx-auto'>
            {/* hero section start  */}
            <Banner></Banner>

            {/* Appointment information section  start  */}
            <AppointmentInfo></AppointmentInfo>

            {/* service section start */}
            <Services></Services>

            {/* dental care section  */}
            <DentalCare></DentalCare>

            {/* Appointment section start  */}
            <MakeAppointment></MakeAppointment>

            {/* testimonial section  */}
            <Testimonial></Testimonial>

            {/* contact us section start  */}
            <ContactUs></ContactUs>

            {/* footer section  */}
            <Footer></Footer>

        </div>
    );
};

export default Home;