import React from 'react';
import appointmentBG from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section style={{backgroundImage:`url(${appointmentBG})`}} className='min-h-screen flex justify-center items-center '>
        <div className='lg:w-1/3 w-full px-5 mx-auto '>
            <div className='text-center mb-10'>
                <p className='text-sm text-[#19D3AE] font-bold' >contact Us</p>
                <h2 className='text-3xl text-white font-bold'>Stay connected with ous</h2>
            </div>
            <div className='text-center'>
                <input type="text" placeholder="Email Address" className="input w-full mb-3 " />
                <input type="text" placeholder="Subject" className="input w-full mb-3" />
                <textarea className="textarea w-full mb-3 h-40" placeholder="Your message"></textarea>
                <button className="bg-gradient-to-r from-secondary to-primary px-5 py-2 rounded-lg uppercase text-white">Submit</button>
            </div>
        </div>
    </section>
    );
};

export default ContactUs; 