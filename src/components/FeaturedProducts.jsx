import React from 'react';
import imgManhole from '../assets/prod_manhole_cover_1768459380559.png';
import imgGypsum from '../assets/prod_gypsum_board_1768459398076.png';
import imgAdhesive from '../assets/prod_tile_adhesive_1768459415152.png';
import imgStuds from '../assets/prod_metal_studs_1768459442735.png';
import { ArrowRight, Eye } from 'lucide-react';
import FadeIn from './FadeIn';

const products = [
    {
        name: "Ductile Iron Manhole Cover",
        specs: "Grade D400 • Heavy Duty • 600mm",
        image: imgManhole
    },
    {
        name: "Fire Resistant Gypsum Board",
        specs: "12.5mm / 15mm • Type X • Pink Core",
        image: imgGypsum
    },
    {
        name: "High Strength Tile Adhesive",
        specs: "C2TE S1 • 20kg Bag • Polymer Modified",
        image: imgAdhesive
    },
    {
        name: "Galvanized Metal Stud System",
        specs: "G90 Coating • Various Gauges • Structural",
        image: imgStuds
    }
];

const ProductCard = ({ name, specs, image, index, onOpenWhatsApp }) => {
    return (
        <FadeIn delay={index * 0.1} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center gap-6 group">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="font-semibold text-[#213155] text-lg mb-1 group-hover:text-[#0077C8] transition-colors">{name}</h3>
                <p className="text-gray-500 text-sm mb-3">{specs}</p>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onOpenWhatsApp(`Hi, I am interested in the ${name} (${specs}). Could you please share more details and images?`);
                    }}
                    className="inline-flex items-center text-[#0077C8] text-sm font-medium hover:underline cursor-pointer"
                >
                    View details
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </FadeIn>
    );
};

const FeaturedProducts = ({ onOpenWhatsApp }) => {
    return (
        <section id='features' className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <FadeIn className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-[#213155]">Featured Products</h2>
                    <a href="#categories" className="hidden md:flex items-center text-gray-500 hover:text-[#0077C8] text-sm font-medium transition-colors">
                        View All Products <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} index={index} onOpenWhatsApp={onOpenWhatsApp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
