import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const socialLinks = [
    { Icon: FacebookIcon, href: 'https://facebook.com' },
    { Icon: XIcon, href: 'https://x.com' },
    { Icon: TikTokIcon, href: 'https://tiktok.com' },
    { Icon: LinkedInIcon, href: 'https://linkedin.com' },
    { Icon: InstagramIcon, href: 'https://instagram.com' },
];

interface LandingNavbarProps {
    showSocialStrip?: boolean;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ showSocialStrip = true }) => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {showSocialStrip && (
                <div className="bg-[#0d0d0d] border-b border-white/10 py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <span className="text-white/50 text-sm">Connecting the world through technology</span>
                        <div className="flex items-center space-x-2">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <nav className="sticky top-0 z-50 bg-[#0d0d0d] border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                            <img
                                src="/images/EMALANGENI TECHNOLOGIES_WHITE VERSION.png"
                                alt="Emalangeni Technologies"
                                className="h-14 w-auto object-contain"
                            />
                        </div>

                        {/* Desktop nav links */}
                        <div className="hidden md:flex items-center space-x-7">
                            <button onClick={() => navigate('/home')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm">Home</button>
                            <button onClick={() => navigate('/about-us')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm">About Us</button>
                            <button onClick={() => navigate('/solutions')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm flex items-center gap-1">
                                Solutions <ChevronDown className="w-3.5 h-3.5 text-[#81d742]" />
                            </button>
                            <button onClick={() => navigate('/services-solutions')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm flex items-center gap-1">
                                Services <ChevronDown className="w-3.5 h-3.5 text-[#81d742]" />
                            </button>
                            <button onClick={() => navigate('/insights')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm flex items-center gap-1">
                                Insights <ChevronDown className="w-3.5 h-3.5 text-[#81d742]" />
                            </button>
                            <button onClick={() => navigate('/register')} className="text-white hover:text-[#81d742] font-medium transition-colors text-sm">Register</button>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={() => navigate('/contact-us')}
                                className="border-2 border-[#81d742] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#81d742] hover:text-[#0d0d0d] transition-all text-sm"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#0d0d0d] border-t border-white/10 px-4 py-4 space-y-1">
                        <button onClick={() => { navigate('/home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">Home</button>
                        <button onClick={() => { navigate('/about-us'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">About Us</button>
                        <button onClick={() => { navigate('/solutions'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">Solutions</button>
                        <button onClick={() => { navigate('/services-solutions'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">Services</button>
                        <button onClick={() => { navigate('/insights'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">Insights</button>
                        <button onClick={() => { navigate('/register'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/10 transition-colors">Register</button>
                        <div className="pt-2 border-t border-white/10">
                            <button
                                onClick={() => { navigate('/contact-us'); setMobileMenuOpen(false); }}
                                className="w-full border-2 border-[#81d742] text-white py-3 rounded-full font-semibold hover:bg-[#81d742] hover:text-[#0d0d0d] transition-all"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
