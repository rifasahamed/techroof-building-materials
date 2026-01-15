import React from 'react';
import aboutImage from '../assets/about-us.png';
import { Building2 } from 'lucide-react'; // Changed icon to be more relevant
import FadeIn from './FadeIn';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image Column */}
                    <FadeIn className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={aboutImage}
                                alt="Warehouse"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#213155]/10"></div>
                        </div>
                    </FadeIn>

                    {/* Text Column */}
                    <FadeIn delay={0.2} className="w-full md:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 className="w-6 h-6 text-[#0077C8]" />
                            <h4 className="text-[#0077C8] uppercase tracking-wider font-semibold">About Us</h4>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold text-[#213155] mb-6 leading-snug">
                            Leading Supplier of <br />
                            Construction Materials
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Tech Roof Building Materials Trading L.L.C is a premier supplier of high-quality construction materials in the UAE. We specialize in providing a wide range of products including gypsum boards, cement boards, ceiling tiles, and acoustic solutions.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our commitment to quality and customer satisfaction has made us a trusted partner for contractors, architects, and developers across the region. We ensure timely delivery and competitive pricing for all your building needs.
                        </p>

                        <button className="bg-[#213155] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2c4270] transition-colors">
                            Read More
                        </button>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default About;
