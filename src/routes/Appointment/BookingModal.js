import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const BookingModal = ({ treatment,date ,setTreatment}) => {
    const [user,loading]=useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    const { _id,name, slots } = treatment;
    const handleBookingModal=(event)=>{
        event.preventDefault();
        const slot=event.target.slot.value;
        console.log(slot,_id)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for:{name} </h3>
                    <form onSubmit={handleBookingModal} className='grid grid-cols-1 gap-3 justify-items-center mt-3 mx-auto'>
                        <input type="text" value={format(date,"PP")} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index) => <option key={index} >{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} disabled name='name' className="input input-bordered w-full max-w-xs" />
                        <input type="text" value={user?.email} disabled name='email' className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" className="input input-bordered w-full max-w-xs bg-secondary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;