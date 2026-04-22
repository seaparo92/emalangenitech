import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Cpu,
    Wifi,
    Zap,
    Shield,
    Settings,
    Headphones,
    Users,
    School,
    Globe,
    BarChart3,
    Phone,
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { ContactFormModal } from '../components/ContactFormModal';

const SOLUTIONS = [
    {
        id: 'businesses',
        icon: Cpu,
        label: 'For Businesses',
        tagline: 'Enterprise IT solutions',
        color: '#81d742',
        features: [
            'Managed IT services with 24/7 monitoring',
            'Technical support and helpdesk',
            'Network infrastructure design and implementation',
            'IT consulting and strategic planning',
            'Cloud solutions and data migration',
            'Cybersecurity and compliance',
        ],
        cta: 'Learn More',
        ctaLink: '/contact-us',
    },
    {
        id: 'schools',
        icon: School,
        label: 'For Schools',
        tagline: 'Educational connectivity',
        color: '#5cad2a',
        features: [
            'Campus-wide WiFi installation and support',
            'Fibre connectivity for high-speed internet',
            'Network security and content filtering',
            'Classroom technology integration',
            'Device management and support',
            'IT infrastructure for e-learning',
        ],
        cta: 'School Solutions',
        ctaLink: '/contact-us',
    },
    {
        id: 'communities',
        icon: Users,
        label: 'For Communities',
        tagline: 'Connectivity for all',
        color: '#00343C',
        features: [
            'Community WiFi hotspot deployment',
            'Public access network solutions',
            'Wireless infrastructure for rural areas',
            'Affordable connectivity packages',
            'Network maintenance and support',
            'Digital inclusion initiatives',
        ],
        cta: 'Community Solutions',
        ctaLink: '/contact-us',
    },
];

const TECH_FEATURES = [
    {
        icon: Cpu,
        title: 'Managed IT Services',
        description: 'Comprehensive IT management with proactive monitoring, maintenance, and support to keep your systems running smoothly.',
    },
    {
        icon: Wifi,
        title: 'Wireless Solutions',
        description: 'Design and deployment of reliable, high-performance wireless networks for businesses, schools, and communities.',
    },
    {
        icon: Zap,
        title: 'Fibre Connectivity',
        description: 'High-speed fibre internet installation and management ensuring stable, scalable broadband connectivity.',
    },
    {
        icon: Shield,
        title: 'Cyber Security',
        description: 'Protect your digital assets with our security solutions including firewalls, endpoint protection, and compliance.',
    },
    {
        icon: Headphones,
        title: '24/7 Technical Support',
        description: 'Round-the-clock helpdesk and technical support to resolve issues quickly and minimize downtime.',
    },
    {
        icon: Settings,
        title: 'IT Consulting',
        description: 'Strategic technology guidance to align your IT infrastructure with business goals and industry best practices.',
    },
];

const PROCESS_STEPS = [
    {
        step: '01',
        icon: Cpu,
        title: 'Assessment & Planning',
        description: 'We evaluate your current infrastructure and needs to create a tailored technology roadmap.',
    },
    {
        step: '02',
        icon: Settings,
        title: 'Implementation',
        description: 'Our experts deploy and configure solutions with minimal disruption to your operations.',
    },
    {
        step: '03',
        icon: Headphones,
        title: 'Ongoing Support',
        description: '24/7 monitoring and support ensure your systems remain secure, stable, and efficient.',
    },
];

export const ServicesSolutions: React.FC = () => {
    const navigate = useNavigate();
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('businesses');

    const activeSolution = SOLUTIONS.find((s) => s.id === activeTab)!;

    return (
        <>
            <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

            <div className="min-h-screen bg-white">
                <LandingNavbar showSocialStrip={true} />

                {/* ── Hero ─────────────────────────────────────── */}
                <section className="relative bg-[#00343C] overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#81d742]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#81d742]/5 rounded-full blur-3xl" />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
                        <div className="max-w-3xl">
                            <span className="inline-block text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                                Services &amp; Solutions
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Powerful Solutions for<br />
                                <span className="text-[#81d742]">Every Stakeholder</span>
                            </h1>
                                <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                                    From managed IT services to high-speed connectivity — Emalangeni Tech delivers intelligent technology solutions tailored to your needs.
                                </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setContactModalOpen(true)}
                                    className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setContactModalOpen(true)}
                                    className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-[#81d742] hover:bg-[#81d742]/10 transition-all flex items-center justify-center"
                                >
                                    Request a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── How It Works ─────────────────────────────── */}
                <section className="py-24 bg-[#f4f7f8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">The Process</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">How It Works</h2>
                            <p className="mt-4 text-lg text-[#304040] max-w-xl mx-auto">Three steps to reliable technology infrastructure</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {PROCESS_STEPS.map((step, i) => (
                                <div key={step.step} className="relative">
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[rgba(129,215,66,0.2)] z-0 -translate-x-1/2" />
                                    )}
                                    <div className="relative bg-white rounded-2xl p-8 border border-[rgba(129,215,66,0.15)] shadow-sm text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#81d742] to-[#5cad2a] mb-6 shadow-lg shadow-[#81d742]/20">
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-xs font-bold text-[#81d742] uppercase tracking-widest mb-2">Step {step.step}</div>
                                        <h3 className="text-xl font-bold text-[#00343C] mb-3">{step.title}</h3>
                                        <p className="text-[#304040] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Tabbed Solutions ──────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Tailored for You</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Solutions by Role</h2>
                        </div>

                        {/* Tab Switcher */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {SOLUTIONS.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setActiveTab(s.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                                        activeTab === s.id
                                            ? 'bg-[#81d742] text-[#00343C] shadow-lg shadow-[#81d742]/20'
                                            : 'bg-[#f4f7f8] text-[#304040] hover:bg-[rgba(129,215,66,0.1)]'
                                    }`}
                                >
                                    <s.icon className="w-4 h-4" />
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Active Solution Panel */}
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="text-[#81d742] text-sm font-semibold mb-2 block">{activeSolution.tagline}</span>
                                <h3 className="text-3xl font-bold text-[#00343C] mb-6">{activeSolution.label}</h3>
                                <ul className="space-y-4">
                                    {activeSolution.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#81d742] flex-shrink-0 mt-0.5" />
                                            <span className="text-[#304040] text-lg">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate(activeSolution.ctaLink)}
                                    className="mt-8 px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg flex items-center gap-2"
                                >
                                    {activeSolution.cta} <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div
                                className="rounded-3xl p-10 text-white"
                                style={{ backgroundColor: activeSolution.color }}
                            >
                                <activeSolution.icon className="w-16 h-16 text-white/30 mb-6" />
                                <h4 className="text-2xl font-bold mb-4">{activeSolution.label}</h4>
                                 <p className="text-white/80 text-lg leading-relaxed mb-6">
                                     {activeSolution.id === 'businesses' && 'Comprehensive IT management and support tailored to your business needs, ensuring optimal performance and minimal downtime.'}
                                     {activeSolution.id === 'schools' && 'Complete connectivity and IT infrastructure solutions designed for schools and institutions.'}
                                     {activeSolution.id === 'communities' && 'Bridging the digital divide with affordable, reliable connectivity solutions for community access.'}
                                 </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {activeSolution.id === 'businesses' && (
                                        <>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">99%</div>
                                                <div className="text-white/60 text-sm mt-1">Uptime</div>
                                            </div>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">&lt;1hr</div>
                                                <div className="text-white/60 text-sm mt-1">Response</div>
                                            </div>
                                        </>
                                    )}
                                    {activeSolution.id === 'schools' && (
                                        <>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">100%</div>
                                                <div className="text-white/60 text-sm mt-1">Campus Coverage</div>
                                            </div>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">Gbit</div>
                                                <div className="text-white/60 text-sm mt-1">Speed</div>
                                            </div>
                                        </>
                                    )}
                                    {activeSolution.id === 'communities' && (
                                        <>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">1000+</div>
                                                <div className="text-white/60 text-sm mt-1">Hotspots</div>
                                            </div>
                                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                                <div className="text-3xl font-bold">Free</div>
                                                <div className="text-white/60 text-sm mt-1">Access</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Technology Features ───────────────────────── */}
                <section className="py-24 bg-[#f4f7f8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Platform Capabilities</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Built on World-Class Technology</h2>
                            <p className="mt-4 text-lg text-[#304040] max-w-2xl mx-auto">
                                Every feature is engineered to deliver measurable academic outcomes.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {TECH_FEATURES.map((f) => (
                                <div
                                    key={f.title}
                                    className="group bg-white rounded-2xl p-8 border border-[rgba(129,215,66,0.15)] shadow-sm hover:shadow-lg hover:border-[#81d742] transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-[rgba(129,215,66,0.12)] flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                        <f.icon className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#00343C] mb-3">{f.title}</h3>
                                    <p className="text-[#304040] leading-relaxed">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Pricing Teaser ────────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Get Started</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Contact Us for a Quote</h2>
                            <p className="mt-4 text-lg text-[#304040] max-w-2xl mx-auto">
                                Custom solutions tailored to your specific requirements. Get in touch for a personalized quote.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#f4f7f8] rounded-3xl p-10 border border-[rgba(129,215,66,0.2)]">
                                <div className="w-12 h-12 rounded-xl bg-[rgba(129,215,66,0.12)] flex items-center justify-center mb-6">
                                    <Phone className="w-6 h-6 text-[#81d742]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#00343C] mb-2">Initial Consultation</h3>
                                <p className="text-[#304040] mb-6">Discuss your needs with our experts and receive a tailored solution proposal.</p>
                                <ul className="space-y-3 mb-8">
                                    {['Free assessment', 'Custom recommendations', 'Transparent pricing', 'No obligation'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-[#304040]">
                                            <CheckCircle2 className="w-4 h-4 text-[#81d742] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => navigate('/contact-us')} className="w-full py-3 bg-[#00343C] text-white rounded-xl font-bold hover:bg-[#81d742] transition-colors">
                                    Request Consultation
                                </button>
                            </div>
                            <div className="bg-[#81d742] rounded-3xl p-10 text-white relative overflow-hidden">
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                                        <Cpu className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold">Custom</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">IT Solutions</h3>
                                    <p className="text-white/80 mb-6">Scalable technology infrastructure that grows with your business.</p>
                                    <ul className="space-y-3 mb-8">
                                        {['Managed IT services', 'Network infrastructure', 'Cloud solutions', 'Security & compliance'].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-white/90">
                                                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => navigate('/contact-us')} className="w-full py-3 bg-white text-[#00343C] rounded-xl font-bold hover:bg-[#f4f7f8] transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────── */}
                <section className="bg-[#00343C] py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Start Your Journey Today
                        </h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                            Contact us today to learn how our IT solutions can support your business or organization.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <button onClick={() => navigate('/contact-us')} className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg flex items-center justify-center gap-2">
                                            Get Started <ArrowRight className="w-5 h-5" />
                                        </button>
                            <button onClick={() => setContactModalOpen(true)} className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-[#81d742] hover:bg-[#81d742]/10 transition-all flex items-center justify-center">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── Footer ───────────────────────────────────── */}
                <footer className="bg-[#00343C] border-t border-white/10 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                             <img src="/images/emalangeni_tech_logo_white.png" alt="Emalangeni Tech" className="h-10 w-auto object-contain" />
                            <span className="text-white font-semibold">Emalangeni Tech</span>
                        </div>
                        <div className="flex gap-6 text-white/60 text-sm">
                            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
                            <button onClick={() => navigate('/about-us')} className="hover:text-white transition-colors">About</button>
                            <button onClick={() => navigate('/register')} className="hover:text-white transition-colors">Register</button>
                        </div>
                        <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Emalangeni Tech. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};
