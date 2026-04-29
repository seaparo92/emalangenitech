import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { 
    Cloud, 
    Wifi, 
    Shield, 
    Code, 
    ArrowRight, 
    CheckCircle2,
    Server,
    Cpu,
    PenTool,
    Users,
    Database,
    Globe
} from 'lucide-react';

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

const services = [
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'We facilitate seamless migration to cloud environments and provide cloud-based solutions to optimise scalability, storage, and accessibility of data and applications.',
        features: ['Cloud Migration', 'Cloud Infrastructure', 'Cloud Storage Solutions', 'SaaS Implementation'],
    },
    {
        id: 'connectivity',
        icon: Wifi,
        title: 'Connectivity Solutions',
        description: 'Emalangeni Technologies offers robust and reliable connectivity solutions to keep businesses connected and running smoothly. Our services include high-speed internet connectivity, fibre-optic solutions, wireless connectivity, and network infrastructure setup and management.',
        features: ['High-Speed Internet', 'Fibre-Optic Solutions', 'Wireless Connectivity', 'Network Infrastructure'],
    },
    {
        id: 'cybersecurity',
        icon: Shield,
        title: 'Cybersecurity Solutions',
        description: 'Security is a top priority at Emalangeni Technologies. We provide comprehensive cybersecurity solutions, including network security, data protection, threat detection, and security audits to safeguard businesses against cyber threats.',
        features: ['Network Security', 'Data Protection', 'Threat Detection', 'Security Audits'],
    },
    {
        id: 'consulting',
        icon: Code,
        title: 'IT Consulting and Solutions',
        description: 'Our team of expert IT consultants collaborate closely with clients to understand their unique business requirements. We then design and implement custom IT solutions to address specific challenges and optimise operational efficiency.',
        features: ['Business Analysis', 'Custom IT Solutions', 'Process Optimization', 'Technology Strategy'],
    },
];

const additionalServices = [
    { icon: Server, title: 'Managed IT Services', description: 'Emalangeni Technologies takes care of all your IT needs through our managed IT services.' },
    { icon: Cpu, title: 'Digital Transformation Services', description: 'Emalangeni Technologies empowers businesses to embark on successful digital transformation journeys.' },
    { icon: Database, title: 'Software Development', description: 'Our skilled software development team creates tailor-made applications and software solutions.' },
    { icon: PenTool, title: 'Design and UX Services', description: 'Emalangeni Technologies offers creative design and user experience (UX) services.' },
];

export const Solutions: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            {/* Social Strip */}
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

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                            <img src="/images/EMALANGENI TECHNOLOGIES_ORIGINAL VERSION.png" alt="Emalangeni Tech" className="h-16 w-auto object-contain" />
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => navigate('/')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Home</button>
                            <button onClick={() => navigate('/solutions')} className="text-[#81d742] font-medium transition-colors">Solutions</button>
                            <button onClick={() => navigate('/about-us')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">About Us</button>
                            <button onClick={() => navigate('/services-solutions')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Services</button>
                            <button onClick={() => navigate('/insights')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Insights</button>
                            <button onClick={() => navigate('/register')} className="text-[#00343C] hover:text-[#81d742] font-medium transition-colors">Register</button>
                        </div>
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={() => navigate('/contact-us')}
                                className="bg-[#81d742] text-[#00343C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#5cad2a] transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-[#00343C] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <img src="/images/services emalangeni.png" alt="" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00343C]/95 via-[#00343C]/70 to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Solutions</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Technology Solutions<br />
                            <span className="text-[#81d742]">For Your Business</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
                            Emalangeni Technologies is dedicated to delivering exceptional services to our clients, helping them leverage technology to achieve their business goals.
                        </p>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg"
                        >
                            Schedule a Consultation <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-24 bg-[#f4f7f8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">What We Offer</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Comprehensive IT Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={service.id} className="bg-white rounded-3xl p-8 border border-[rgba(129,215,66,0.15)] shadow-sm hover:shadow-lg hover:border-[#81d742]/30 transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-[#81d742]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-8 h-8 text-[#81d742]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#00343C] mb-3">{service.title}</h3>
                                        <p className="text-[#304040]/70 mb-5 leading-relaxed">{service.description}</p>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-[#00343C]">
                                                    <CheckCircle2 className="w-4 h-4 text-[#81d742] flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">More Services</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Complete Technology Suite</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service) => (
                            <div key={service.title} className="bg-[#f4f7f8] rounded-2xl p-6 border border-[rgba(129,215,66,0.1)] hover:border-[#81d742]/30 hover:bg-[#81d742]/5 transition-all">
                                <div className="w-12 h-12 bg-[#81d742]/10 rounded-xl flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-[#81d742]" />
                                </div>
                                <h3 className="font-bold text-[#00343C] mb-2">{service.title}</h3>
                                <p className="text-sm text-[#304040]/70">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#81d742] py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#00343C] mb-3">Are You Ready to Transform Your Business?</h2>
                    <p className="text-[#00343C]/70 mb-8 max-w-xl mx-auto">
                        From connectivity and telephony to managed IT services and digital transformation, we offer a comprehensive suite of solutions to cater to diverse industry sectors.
                    </p>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00343C] rounded-full font-bold hover:bg-[#f4f7f8] transition-all shadow-lg"
                    >
                        Schedule a Consultation <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#00343C] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <img src="/images/EMALANGENI TECHNOLOGIES_WHITE VERSION.png" alt="Emalangeni Tech" className="h-12 w-auto object-contain mb-4" />
                            <p className="text-white/60 text-sm">Emalangeni Technologies is dedicated to delivering exceptional services to our clients, helping them leverage technology to achieve their business goals.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => navigate('/')} className="text-white/60 hover:text-[#81d742] text-sm">Home</button></li>
                                <li><button onClick={() => navigate('/solutions')} className="text-white/60 hover:text-[#81d742] text-sm">Solutions</button></li>
                                <li><button onClick={() => navigate('/about-us')} className="text-white/60 hover:text-[#81d742] text-sm">About Us</button></li>
                                <li><button onClick={() => navigate('/services-solutions')} className="text-white/60 hover:text-[#81d742] text-sm">Services</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Contact</h4>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li>info@emalangenitech.co.za</li>
                                <li>013 004 0627</li>
                                <li>3 Villa Place, Berkeley Avenue</li>
                                <li>Bryanston, 2191</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Follow Us</h4>
                            <div className="flex gap-3">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#81d742] transition-colors">
                                    <LinkedInIcon className="w-5 h-5 text-white" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#81d742] transition-colors">
                                    <FacebookIcon className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <p className="text-white/40 text-sm">&copy; 2024 Emalangeni Technologies. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <WhatsAppFloat />
        </div>
    );
};