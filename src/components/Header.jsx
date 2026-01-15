import React, { useState, useEffect } from 'react';
import logo from '../assets/logo tech roof.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center gap-2 group">
                        <img src={logo} alt="Tech Roof" className="h-12 w-auto" />
                    </a>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'About', 'Categories', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors hover:text-[#0077C8] ${isScrolled ? 'text-gray-600' : 'text-[#0077C8]'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="tel:+1234567890"
                    className={` px-6 py-2 rounded-full font-semibold shadow-sm  hover:bg-[#0077C8]/80 transition-colors ${isScrolled ? 'bg-[#0077C8] text-white' : 'bg-white text-[#0077C8] hover:bg-[#0077C8] hover:text-white'
                        }`}
                >
                    Call Now
                </a>
            </div>
        </header>
    );
};

export default Header;
