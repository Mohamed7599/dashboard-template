import React from 'react';

const Card = ({ title, date, children, isDefaultColor, titleSize, bgColor }) => {
    return (
        <div className={`bg-white rounded-2xl px-4 py-5 shadow-md h-full ${bgColor && bgColor}`}>
            <div className='flex justify-between'>
                <h3 className={`font-semibold ${isDefaultColor ? '' : 'text-gray-500'} ${titleSize && titleSize}`}>{title}</h3>
                <span className='text-sm text-gray-400'>{date}</span>
            </div>
            {children}
        </div>
    );
}

export default Card;
