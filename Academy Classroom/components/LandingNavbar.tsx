import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

interface LandingNavbarProps {
    showSocialStrip?: boolean;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ showSocialStrip = true }) => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {showSocialStrip && (
                <div className="bg-[#81d742] py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <span className="text-white text-sm">Follow us:</span>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00343C] transition-colors">
                                <LinkedInIcon className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00343C] transition-colors">
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-white/80 text-sm hidden sm:block">info@emalangenitech.co.za</span>
                            <button onClick={() => navigate('/contact-us')} className="text-white text-sm font-semibold hover:text-[#00343C] transition-colors">Schedule A Consultation</button>
                        </div>
                    </div>
                </div>
            )}

            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                            <img src="/images/EMALANGENI TECHNOLOGIES_ORIGINAL VERSION.png" alt="Emalangeni Tech" className="h-16 w-auto object-contain" />
                        </div>

                        {/* Desktop nav links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => navigate('/home')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Home</button>
                            <button onClick={() => navigate('/about-us')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">About Us</button>
                            <button onClick={() => navigate('/solutions')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Solutions</button>
                            <button onClick={() => navigate('/services-solutions')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Services</button>
                            <button onClick={() => navigate('/insights')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Insights</button>
                            <button onClick={() => navigate('/register')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Register</button>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={() => navigate('/contact-us')}
                                className="bg-[#81d742] text-[#00343C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#5cad2a] transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            className="md:hidden p-2 rounded-lg text-[#00343C] hover:bg-gray-100 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
                        <button onClick={() => { navigate('/home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">Home</button>
                        <button onClick={() => { navigate('/about-us'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">About Us</button>
                        <button onClick={() => { navigate('/solutions'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">Solutions</button>
                        <button onClick={() => { navigate('/services-solutions'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">Services</button>
                        <button onClick={() => { navigate('/insights'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">Insights</button>
                        <button onClick={() => { navigate('/register'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-[#00343C] font-medium hover:bg-[#f4f7f8] transition-colors">Register</button>
                        <div className="pt-2 border-t border-gray-100">
                            <button
                                onClick={() => { navigate('/contact-us'); setMobileMenuOpen(false); }}
                                className="w-full bg-[#81d742] text-[#00343C] py-3 rounded-xl font-semibold hover:bg-[#5cad2a] transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};
