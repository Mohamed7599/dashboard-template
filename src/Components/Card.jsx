import React from 'react';

const Card = ({ title, date, children, isDefaultColor }) => {
    return (
        <div className='bg-white rounded-2xl px-4 py-5 shadow-lg h-full'>
            <div className='flex justify-between'>
                <h3 className={`font-semibold ${isDefaultColor ? '' : 'text-gray-500'}`}>{title}</h3>
                <span className='text-sm text-gray-400'>{date}</span>
            </div>
            {children}
        </div>
    );
}

export default Card;
