import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p>
          {
            slots.length > 0 ?
              <span>{slots[0]}</span>
              :
              <span className='text-red-500'>Try another day!!</span>
          }
        </p>
        <p >
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length===0}
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            className="btn modal-button bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-3 rounded-lg uppercase text-white"
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;