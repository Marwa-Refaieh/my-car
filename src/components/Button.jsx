import React from 'react';

const Button = ({title}) => {
    return (
        <>
            <a href='' className='bg-Myprimary inline-block text-black py-3 px-10 font-bold rounded-full hover:bg-primaryHover transition uppercase '>{title}</a>
        </>
    );
}

export default Button;
