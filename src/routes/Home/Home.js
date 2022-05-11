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
import quoteBg from '../../assets/icons/quote.svg'

import people1Img from '../../assets/images/people1.png'
import chairBg from '../../assets/images/bg.png'

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
    const testimonialInformation = [
        {
            id: 1,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Fluoride Treatment',
            location: "California",
            img: people1Img,
        },
        {
            id: 2,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Cavity Filling',
            location: "California",
            img: people1Img,
        },
        {
            id: 3,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Teeth Whitening',
            location: "California",
            img: people1Img,
        }
    ]

    return (
        <div className=''>
            {/* hero section start  */}
            <div className="hero min-h-screen" style={{backgroundImage:`url(${chairBg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                    <img src={chairImg} className="lg:max-w-lg md:max-w-sm rounded-lg shadow-2xl" alt='chairImg' />
                    <div className='lg:pr-16 md:pr-8 pr-0'>
                        <h1 className="lg:text-5xl text-3xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg uppercase text-white">Get Started</button>
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
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={cart.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{cart.title}</h2>
                                    <p>{cart.desc}</p>
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
                                <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg uppercase text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service section end  */}


            {/* Appointment section start  */}

            <div className='mt-36'>
                <div style={{ backgroundImage: `url(${appointmentBG})` }}>
                    <div className="hero-content flex-col lg:flex-row md:flex-row lg:p-0 md:p-0 sm:p-5 lg:text-left md:text-left text-center">
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

            {/* appointment section end  */}
            <section className='my-10'>
                <div className="flex justify-between items-center px-7 mb-5">
                    <div>
                        <p className='text-sm text-[#19D3AE]' >Testimonial</p>
                        <h2 className='text-3xl'>What Our Patients Says</h2>
                    </div>
                    <div>
                        <img src={quoteBg} alt="" className="lg:w-48 w-24" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                    {
                        testimonialInformation.map(testimonialInfo => <div key={testimonialInfo.id} className="card mx-w-sm shadow-2xl">
                            <div className="card-body items-center ">
                                <p>{testimonialInfo.desc}</p>
                            </div>
                            <div className='flex px-10 py-4'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-[#19D3AE] ring-offset-base-100 ring-offset-2">
                                        <img src={people1Img} alt="people" />
                                    </div>
                                </div>
                                <div className='pl-5'>
                                    <h2 className='text-lg font-bold'>{testimonialInfo.name}</h2>
                                    <p className='text-sm text-[#19D3AE]' >{testimonialInfo.location}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </section>

            {/* testimonial section end  */}


            {/* contact us section start  */}
            <section style={{backgroundImage:`url(${appointmentBG})`}} className='min-h-screen flex justify-center items-center'>
                <div className='lg:w-1/3 w-full px-5 mx-auto '>
                    <div className='text-center mb-10'>
                        <p className='text-sm text-[#19D3AE] font-bold' >contact Us</p>
                        <h2 className='text-3xl text-white font-bold'>Stay connected with ous</h2>
                    </div>
                    <div className='text-center'>
                        <input type="text" placeholder="Email Address" className="input w-full mb-3 " />
                        <input type="text" placeholder="Subject" className="input w-full mb-3" />
                        <textarea className="textarea w-full mb-3 h-40" placeholder="Your message"></textarea>
                        <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-5 py-2 rounded-lg uppercase text-white">Submit</button>
                    </div>
                </div>
            </section>
            {/* contact us section end  */}

        </div>
    );
};

export default Home;