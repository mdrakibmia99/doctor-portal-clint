import React from 'react';
import chairImg from '../../assets/images/chair.png'
import chairBg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage:`url(${chairBg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chairImg} className="lg:max-w-lg max-w-full rounded-lg shadow-2xl" alt='chairImg' />
            <div className='lg:pr-16 md:pr-8 pr-0'>
                <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="bg-gradient-to-r from-secondary to-primary p-3 rounded-lg uppercase text-white">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;