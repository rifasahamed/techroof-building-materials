import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

// Generated Assets
import imgAluminium from '../assets/cat_aluminium_tiles_1768454501653.png';
import imgBoards from '../assets/cat_boards_plywood_1768454517834.png';
import imgSuspension from '../assets/cat_ceiling_suspension_1768454537242.png';
import imgChemicals from '../assets/cat_chemicals_glue_1768454609576.png';
import imgMetals from '../assets/cat_metals_lintels_1768454570811.png';
import imgRollers from '../assets/cat_rollers_abrasives_1768454625822.png';
import imgRoofTiles from '../assets/cat_roof_tiles.png';
import imgScrews from '../assets/cat_screws_bricks_1768454553642.png';
import imgTools from '../assets/cat_tools_safety_1768454593720.png';

const categories = [
    { title: "Roof Tiles", image: imgRoofTiles },
    { title: "Aluminium & Metal Info Ceiling Tiles", image: imgAluminium },
    { title: "Boards & Plywood", image: imgBoards },
    { title: "Ceiling & Suspension System", image: imgSuspension },
    { title: "Screws, Fasteners & Bricks", image: imgScrews },
    { title: "Metals & Lintels", image: imgMetals },
    { title: "Tools & Safety Items", image: imgTools },
    { title: "Construct. Chemicals & Glue", image: imgChemicals },
    { title: "Rollers, Brush & Abrasives", image: imgRollers },
];

const CategoryCard = ({ title, image, index, onOpenWhatsApp }) => (
    <FadeIn delay={index * 0.1} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
        <div className="h-48 overflow-hidden bg-gray-100">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>

        <div className="p-6">
            <h3 className="font-semibold text-lg text-[#213155] mb-2 group-hover:text-[#0077C8] transition-colors line-clamp-2 min-h-[3.5rem] flex items-center">
                {title}
            </h3>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    onOpenWhatsApp(`Hi, I am interested in your ${title} category. Could you please send me product details and images?`);
                }}
                className="inline-flex items-center text-[#0077C8] font-medium text-sm mt-2 hover:underline cursor-pointer"
            >
                View Products
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
    </FadeIn>
);


const CategoryGrid = ({ onOpenWhatsApp }) => {
    return (
        <section id="categories" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-[#213155] mb-4">Our Product Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse our extensive range of high-quality building materials suited for every construction need.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} index={index} onOpenWhatsApp={onOpenWhatsApp} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CategoryGrid;
