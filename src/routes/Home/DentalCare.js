import React from 'react';
import treatmentImg from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className='container mx-auto'>
                    <div className="hero min-h-screen lg:px-10 px-5">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={treatmentImg} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" alt='treatmentImg' />
                            <div className='lg:px-14 sm:px-2'>
                                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                <button className="bg-gradient-to-r from-secondary to-primary p-3 rounded-lg uppercase text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default DentalCare;