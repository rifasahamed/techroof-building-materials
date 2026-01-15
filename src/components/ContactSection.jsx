import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Left Column: Contact Info */}
                    <FadeIn className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl text-[#213155] mb-8">Contact Us</h2>

                        <div className="space-y-8">
                            {/* Address */}
                            <div>
                                <h4 className="text-sm text-[#0077C8] uppercase tracking-wider mb-2">Address</h4>
                                <p className="text-xl text-[#213155] leading-relaxed">
                                    Tech Roof Building Materials Trdg.<br />
                                    107, Amman Street,<br />
                                    Ajman Industrial 1, Ajman, UAE
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <h4 className="text-sm text-[#0077C8] uppercase tracking-wider mb-4">Get in Touch</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#0077C8] transition-colors">
                                        <Phone className="w-5 h-5 flex-shrink-0 text-[#0077C8]" />
                                        <div className="flex flex-col">
                                            <span>+971 55 181 5002</span>
                                            <span>+971 55 120 5295</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#0077C8] transition-colors">
                                        <Mail className="w-5 h-5 flex-shrink-0 text-[#0077C8]" />
                                        <div className="flex flex-col">
                                            <span>techroofajman@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Branch Button */}
                            <div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Column: Real Map (Iframe) */}
                    <FadeIn delay={0.2} className="w-full md:w-1/2 min-h-[400px] bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8578776814934!2d55.482153!3d25.3895423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59d3829b1fa5%3A0x8867df8da5087601!2sTechroof%20Bulding%20material%20trading%20L.%20L.%20C!5e0!3m2!1sen!2sin!4v1768463857112!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tech Roof Ajman Location"
                        ></iframe>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
