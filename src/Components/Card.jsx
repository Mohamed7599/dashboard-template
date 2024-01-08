import React from 'react';

const Card = ({ children, className, bgColor }) => {
    return (
        <div className={`${bgColor ? bgColor : 'bg-white'} rounded-2xl px-4 py-5 shadow-md  ${className && className}`}>
            {children}
        </div>
    );
}

export default Card;
