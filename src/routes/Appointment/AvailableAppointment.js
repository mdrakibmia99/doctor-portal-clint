import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <p className='text-secondary text-xl text-center'>Available Appointments on {format(date,'PP')}</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
               {
                   services.map(service =><Service
                   key={service._id}
                   service={service}
                   ></Service>)
               }
           </div>
        </div>
    );
};

export default AvailableAppointment;