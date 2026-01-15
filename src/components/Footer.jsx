import React from 'react';
import logo from '../assets/logo tech roof.png';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#213155] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div className="mb-6 bg-white p-2 w-fit rounded-lg">
                            <img src={logo} alt="Tech Roof Logo" className="h-12 w-auto" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Your trusted partner for premium building materials in the UAE. Quality products, reliable service, and competitive prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg  mb-6 border-b border-[#0077C8] pb-2 w-fit">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><a href="#" className="hover:text-[#0077C8] transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-[#0077C8] transition-colors">About</a></li>
                            <li><a href="#categories" className="hover:text-[#0077C8] transition-colors">Categories</a></li>
                            <li><a href="#contact" className="hover:text-[#0077C8] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg  mb-6 border-b border-[#0077C8] pb-2 w-fit">Our Products</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><a href="#features" className="hover:text-[#0077C8] transition-colors">Roof Tiles</a></li>
                            <li><a href="#features" className="hover:text-[#0077C8] transition-colors">Gypsum Boards</a></li>
                            <li><a href="#features" className="hover:text-[#0077C8] transition-colors">Manhole Covers</a></li>
                            <li><a href="#features" className="hover:text-[#0077C8] transition-colors">Waterproofing</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg  mb-6 border-b border-[#0077C8] pb-2 w-fit">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#0077C8] flex-shrink-0" />
                                <span>107, Amman Street, Ajman Industrial 1, Ajman, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#0077C8] flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span>+971 55 181 5002</span>
                                    <span>+971 55 120 5295</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#0077C8] flex-shrink-0" />
                                <span>techroofajman@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {currentYear} Tech Roof Building Materials Trdg. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
