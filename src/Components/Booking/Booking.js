import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams()
    return (
        <div className='m-6'>
            <h1>Booking Item: {bookingId}</h1>
        </div>
    );
};

export default Booking;