import React from 'react';
import brand1 from '../../assets/home/brand1.webp'
import brand2 from '../../assets/home/brand2.webp'
import brand3 from '../../assets/home/brand3.webp'
import brand4 from '../../assets/home/brand4.webp'
import brand5 from '../../assets/home/brand5.webp'
import brand6 from '../../assets/home/brand6.webp'
import brand7 from '../../assets/home/brand7.webp'
import brand8 from '../../assets/home/brand8.webp'
import brand9 from '../../assets/home/brand9.webp'
import brand10 from '../../assets/home/brand10.webp'

const Brands = () => {
    const brands = [
        { src: brand1, alt: 'Brand' },
        { src: brand2, alt: 'Brand' },
        { src: brand3, alt: 'Brand' },
        { src: brand4, alt: 'Brand' },
        { src: brand5, alt: 'Brand' },
        { src: brand6, alt: 'Brand' },
        { src: brand7, alt: 'Brand' },
        { src: brand8, alt: 'Brand' },
        { src: brand9, alt: 'Brand' },
        { src: brand10, alt: 'Brand' },
    ];
    return (
        <section className="pt-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-10 text-Myprimary">Brands</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center justify-center p-4">
                            <img
                                src={brand.src}
                                alt={brand.alt}
                                className="w-[75%] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;
