import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/home/Services';
import Brands from '../../components/home/Brands';
import TopFeatured from '../../components/home/TopFeatured';
import HeroImage from '../../components/home/HeroImage';
import Choose from '../../components/home/Choose';
import Blog from '../../components/home/Blog';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Brands />
            <Choose/>
            <TopFeatured />
            <HeroImage/>
            <Blog/>
        </>
    );
}

export default Home;
