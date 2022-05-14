import React from 'react';
import cavityImg from '../../assets/images/cavity.png'
import fluorideImg from '../../assets/images/fluoride.png'
import teethImg from '../../assets/images/whitening.png'


const Services = () => {
    const serviceInformation = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluorideImg,
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavityImg,
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: teethImg,
        }
    ]
    return (
        <div className='mt-5 lg:mt-16'>
                <p className='text-[#19D3AE] text-xl font-bold text-center'>OUR SERVICES</p>
                <h2 className='text-[#3A4256] text-4xl font-bold text-center'>Services We Provide</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-4 bg-white'>
                    {
                        serviceInformation.map(cart => <div key={cart._id}>
                            <div  className='lg:px-4 py-4'>
                            <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={cart.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{cart.title}</h2>
                                    <p>{cart.desc}</p>
                                </div>
                            </div>
                        </div>
                        </div>)
                    }
                </div>
            </div>
    );
};

export default Services;