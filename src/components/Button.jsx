import React from 'react';

const Button = ({title}) => {
    return (
        <>
            <a href='' className='bg-Myprimary inline-block text-black py-3 px-6 font-semibold rounded-full hover:bg-primaryHover transition'>{title}</a>
        </>
    );
}

export default Button;
