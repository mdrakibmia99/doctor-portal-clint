import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null);
    useEffect(()=>{
        fetch('https://desolate-spire-14959.herokuapp.com/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    return (
        <div>
            <p className='text-secondary text-xl text-center'>Available Appointments on {format(date,'PP')}</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
               {
                   services?.map(service =><Service
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   ></Service>)
               }
           </div>
           {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;