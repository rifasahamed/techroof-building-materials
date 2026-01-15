import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import FadeIn from './FadeIn';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <FadeIn className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
                    Building the Future with <br />
                    <span className="text-[#0077C8]">Quality Materials</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Tech Roof provides premium construction solutions for residential and commercial projects across the UAE.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#categories"
                        className="bg-[#0077C8] hover:bg-[#0060a0] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        Browse Products
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};

export default Hero;
