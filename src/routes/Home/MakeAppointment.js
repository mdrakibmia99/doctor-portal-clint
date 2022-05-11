import React from 'react';
import doctorImg from '../../assets/images/doctor-small.png'
import appointmentBG from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <div className='mt-36'>
        <div style={{ backgroundImage: `url(${appointmentBG})`}}>
            <div className="hero-content flex-col lg:flex-row  lg:p-0  sm:p-5 lg:text-left md:text-left text-center">
                <img src={doctorImg} className=" mt-[-90px] hidden lg:block md:block" alt='doctor Img' />
                <div className=''>
                    <p className='text-[#19D3AE] text-xl font-bold'>Appointment</p>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-blue-50">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg uppercase text-white">Get Started</button>
                </div>
            </div>
        </div>

    </div>
    );
};

export default MakeAppointment;