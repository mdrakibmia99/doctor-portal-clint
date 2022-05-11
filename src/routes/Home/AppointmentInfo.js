import React from 'react';
import clockIcon from '../../assets/icons/clock.svg'
import markerIcon from '../../assets/icons/marker.svg'
import phoneIcon from '../../assets/icons/phone.svg'

const AppointmentInfo = () => {
    const appointmentInformation = [
        {
            id: 1,
            title: 'Opening Our',
            desc: "Lorem ipsum dolor sit amet.",
            img: clockIcon,
            colorFrom: '19D3AE',
            colorTo: '0FCFEC'
        },
        {
            id: 2,
            title: 'Visit our location',
            desc: "Lorem ipsum dolor sit amet.",
            img: markerIcon,
            colorFrom: '',
            colorTo: '3A4256'
        },
        {
            id: 3,
            title: 'Contact us now',
            desc: "Lorem ipsum dolor sit amet.",
            img: phoneIcon,
            colorFrom: '19D3AE',
            colorTo: '0FCFEC'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 px-4 bg-white'>
                {
                    appointmentInformation.map(cart => <div key={cart.id} className='lg:px-4 py-4'>
                        <div className={`lg:flex-row md:flex-row flex-col card card-side shadow-xl bg-gradient-to-r from-[#${cart?.colorFrom}] to-[#${cart?.colorTo}] ${cart.id === 2 ? "bg-[#3A4256]" : ""} p-4`}>
                            <figure><img className='lg:w-full md:w-full w-1/4' src={cart.img} alt="cart" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white ">{cart.title}</h2>
                                <p className='text-white'>{cart.desc}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
    );
};

export default AppointmentInfo;