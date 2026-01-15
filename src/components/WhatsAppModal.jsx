import React from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const WhatsAppModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    const contacts = [
        { name: "Sales Support 1", number: "971551815002" },
        { name: "Sales Support 2", number: "971551205295" }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <FadeIn className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-[#0077C8] rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#213155]">Contact Us on WhatsApp</h3>
                    <p className="text-gray-500 mt-2">Choose a sales representative to chat with:</p>
                </div>

                <div className="space-y-3">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#0077C8] hover:bg-[#0077C8] transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-gray-500 group-hover:text-[#0077C8] transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-[#213155] group-hover:text-white transition-colors">{contact.name}</p>
                                    <p className="text-sm text-gray-500 group-hover:text-white transition-colors">{contact.number}</p>
                                </div>
                            </div>
                            <MessageCircle className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
};

export default WhatsAppModal;
