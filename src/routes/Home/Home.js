import React from 'react';
import { Link } from 'react-router-dom';
import clockIcon from '../../assets/icons/clock.svg'
import markerIcon from '../../assets/icons/marker.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import chairImg from '../../assets/images/chair.png'
import cavityImg from '../../assets/images/cavity.png'
import fluorideImg from '../../assets/images/fluoride.png'
import teethImg from '../../assets/images/whitening.png'
import treatmentImg from '../../assets/images/treatment.png'
import doctorImg from '../../assets/images/doctor-small.png'
import appointmentBG from '../../assets/images/appointment.png'

const Home = () => {

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
    const serviceInformation = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluorideImg,
        },
        {
            id: 2,
            title: 'Cavity Filling',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavityImg,
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: teethImg,
        }
    ]

    return (
        <div className=''>
            {/* hero section start  */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                    <img src={chairImg} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" alt='chairImg' />
                    <div className='lg:pr-16 md:pr-8 pr-0'>
                        <h1 className="lg:text-6xl text-3xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg">Get Started</button>
                    </div>
                </div>
            </div>
            {/* hero section end */}


            {/* Appointment information section  start  */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 bg-white'>
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
            {/* Appointment information section  end  */}

            {/* service section start */}
            <div className='mt-5 lg:mt-16'>
                <p className='text-[#19D3AE] text-xl font-bold text-center'>OUR SERVICES</p>
                <h2 className='text-[#3A4256] text-4xl font-bold text-center'>Services We Provide</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 bg-white'>
                    {
                        serviceInformation.map(cart => <div key={cart.id} className='lg:px-4 py-4'>
                            <div className={` flex-col card shadow-xl p-4`}>
                                <figure><img className='w-1/4' src={cart.img} alt="cart" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black justify-center">{cart.title}</h2>
                                    <p className='text-black'>{cart.desc}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='container mx-auto'>
                    <div className="hero min-h-screen lg:px-10 px-5">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={treatmentImg} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" alt='treatmentImg' />
                            <div className='lg:px-14 sm:px-2'>
                                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service section end  */}


            {/* Appointment section start  */}

            <div className='relative'>
                <div className='absolute h-1/2'>
                    <img src={appointmentBG} className="" alt="background img" />
                    </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row p-0 h-1/2">
                        <img src={doctorImg} className="shadow-2xl" alt='doctor Img' />
                        <div>
                            <p className='text-[#19D3AE] text-xl font-bold'>Appointment</p>
                            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
               
            </div>

            {/* appointment section end  */}

        </div>
    );
};

export default Home;