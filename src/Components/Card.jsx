import React from 'react';

const Card = ({ title, date, children, isTitleDefaultColor, titleSize, className, bgColor }) => {
    return (
        <div className={`${bgColor ? bgColor : 'bg-white'} rounded-2xl px-4 py-5 shadow-md  ${className && className}`}>
            {/* <div className='flex justify-between'>
                <h3 className={`font-semibold ${isTitleDefaultColor ? '' : 'text-gray-500'} ${titleSize && titleSize}`}>{title}</h3>
                <span className='text-sm text-gray-400'>{date}</span>
            </div> */}
            {children}
        </div>
    );
}

export default Card;
