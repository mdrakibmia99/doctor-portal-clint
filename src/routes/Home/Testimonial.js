import React from 'react';
import quoteBg from '../../assets/icons/quote.svg'
import people1Img from '../../assets/images/people1.png'
const Testimonial = () => {
    const testimonialInformation = [
        {
            _id: 1,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Fluoride Treatment',
            location: "California",
            img: people1Img,
        },
        {
            _id: 2,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Cavity Filling',
            location: "California",
            img: people1Img,
        },
        {
            _id: 3,
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Teeth Whitening',
            location: "California",
            img: people1Img,
        }
    ]
    return (
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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-4'>
            {
                testimonialInformation.map(testimonialInfo => <div key={testimonialInfo._id} className="card mx-w-sm shadow-2xl">
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
    );
};

export default Testimonial;