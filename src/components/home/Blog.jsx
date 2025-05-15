import React from 'react';
import car7 from '../../assets/home/car7.webp'
import car8 from '../../assets/home/car8.webp'
import Button from '../Button';

const Blog = () => {
    return (
        <section className=" text-white py-20 flex flex-col gap-20 ">
            <h2 className="text-5xl font-bold text-center mb-32 text-Myprimary">Read Our Blog Post</h2>
            <div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                    <div>
                        <p className="text-Myprimary text-1xl md:text-3xl mb-8">The Ultimate Guide to Choosing the Perfect Family Car: Factors to Consider for Safety,Comfort, and Versatility</p>

                        <p className="text-gray mb-8 leading-relaxed text-[1.3rem]">Fusce ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vitae ornare dolor. Morbi fermentum.
                        </p>
                        <Button title="Read More" />
                    </div>

                    <div className="w-full h-full border-[1px] border-Myprimary rounded-[3rem] p-4">
                        <img src={car7} alt="Car" className="w-full object-cover -scale-x-100 rounded-[3rem]" />
                    </div>

                </div>
            </div>

            <div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center">


                    <div className="w-full h-full border-[1px] border-Myprimary rounded-[3rem] p-4">
                        <img src={car8} alt="Car" className="w-full object-cover -scale-x-100 rounded-[3rem]" />
                    </div>

                    <div>
                        <p className="text-Myprimary text-1xl md:text-3xl mb-8">
                            The Ultimate Guide to Choosing the Perfect Family Car: Factors to Consider for Safety, Comfort, and Versatility
                        </p>
                        <p className="text-gray mb-8 leading-relaxed text-[1.3rem]">
                            Fusce ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ornare dolor. Morbi fermentum.
                        </p>
                        <Button title="Read More" />
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Blog;
