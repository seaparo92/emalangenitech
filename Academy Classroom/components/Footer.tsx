import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#00343C] border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/images/emalangeni_tech_logo_white.png" alt="Emalangeni Tech" className="h-10 w-auto object-contain" />
                        <div>
                            <span className="text-white font-semibold block">Emalangeni Tech</span>
                            <span className="text-white/50 text-xs">IT Solutions · WiFi · Fibre</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
                        <button onClick={() => navigate('/about-us')} className="hover:text-white transition-colors">About</button>
                        <button onClick={() => navigate('/services-solutions')} className="hover:text-white transition-colors">Services</button>
                        <button onClick={() => navigate('/insights')} className="hover:text-white transition-colors">Insights</button>
                        <button onClick={() => navigate('/contact-us')} className="hover:text-white transition-colors">Contact</button>
                    </div>
                    <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Emalangeni Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
