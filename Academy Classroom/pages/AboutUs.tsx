
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Users,
    Globe,
    Award,
    Heart,
    Target,
    Zap,
    Building2,
    Shield,
    Eye,
    Star,
    Handshake,
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { ContactFormModal } from '../components/ContactFormModal';
import { Footer } from '../components/Footer';

const STATS = [
    { value: '66+', label: 'Clients Countrywide' },
    { value: '10+', label: 'Years of Experience' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
];

const CORE_VALUES = [
    { icon: Star, title: 'Customer-Centric Approach', description: 'Everything we do is centred around our customers — understanding their needs and delivering solutions that truly serve them.' },
    { icon: Handshake, title: 'Maintaining Excellent Partnerships', description: 'We maintain excellent, long-term partnerships with our customers and stakeholders built on trust and mutual growth.' },
    { icon: Award, title: 'Delivering High Quality Services', description: 'Always delivering high quality services that meet and exceed industry standards and client expectations.' },
    { icon: Heart, title: 'Building Strong Community Ties', description: 'Building strong ties with the communities we serve across South Africa through meaningful engagement and contribution.' },
    { icon: Target, title: 'Exceeding Client Expectations', description: "Always going beyond our clients' expectations in order to deliver the best business results and outcomes." },
    { icon: Users, title: 'Teamwork', description: 'Driven by a group of passionate IT specialists who design, build, and implement advanced technology solutions together.' },
];

export const AboutUs: React.FC = () => {
    const navigate = useNavigate();
    const [contactModalOpen, setContactModalOpen] = React.useState(false);

    return (
        <>
            <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

            <div className="min-h-screen bg-white">
                <LandingNavbar showSocialStrip={true} />

                {/* Hero */}
                <section className="relative bg-[#00343C] overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#81d742]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#81d742]/5 rounded-full blur-3xl" />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
                        <div className="max-w-3xl">
                            <span className="inline-block text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4">About Us</span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Pioneering Change<br />
                                <span className="text-[#81d742]">Through Technology</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                                As one of South Africa's leading black-owned technology companies, Emalangeni Technologies is at the forefront of digital transformation — bringing innovative solutions that improve people's lives and transform businesses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate('/services-solutions')}
                                    className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    Our Services <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setContactModalOpen(true)}
                                    className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold hover:border-[#81d742] hover:bg-[#81d742]/10 transition-all flex items-center justify-center gap-2"
                                >
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="bg-[#81d742] py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {STATS.map((s) => (
                                <div key={s.label} className="p-4">
                                    <div className="text-4xl lg:text-5xl font-bold text-[#00343C] mb-2">{s.value}</div>
                                    <div className="text-[#00343C]/70 font-semibold text-sm uppercase tracking-wide">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Background */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Our Story</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C] mb-6 leading-tight">Our Background</h2>
                                <p className="text-[#304040] text-lg leading-relaxed mb-6">
                                    As one of South Africa's leading black owned, technology company, Emalangeni Technologies Pty (Ltd) is at the forefront of digital transformations bringing awe inspiring technology services to the mainstream IT in order to produce better business outcomes.
                                </p>
                                <p className="text-[#304040] text-lg leading-relaxed mb-6">
                                    Our aim is focused on improving people's daily experiences and interactions through the application of new and pulsating technology services and solutions. We help provide clients with access to certified and unparalleled technical expertise, logistical support and managed IT services.
                                </p>
                                <p className="text-[#304040] text-lg leading-relaxed">
                                    Our company strives to deliver consistence and quality in client services. We can achieve this by thoroughly understanding our customers' needs and providing custom solutions designed to meet their individual requirements.
                                </p>
                            </div>
                            <div className="bg-[#f4f7f8] rounded-3xl p-10">
                                <h3 className="text-xl font-bold text-[#00343C] mb-6">Telephony &amp; Connectivity</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[rgba(129,215,66,0.12)] flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#00343C] mb-1">Telephony Solutions</h4>
                                            <p className="text-[#304040]">We provide comprehensive telephony services to facilitate seamless communication.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[rgba(129,215,66,0.12)] flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#00343C] mb-1">Connectivity Solutions</h4>
                                            <p className="text-[#304040]">Emalangeni Technologies offers robust and reliable connectivity solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[rgba(129,215,66,0.12)] flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#00343C] mb-1">Trusted by 66+ Clients Countrywide</h4>
                                            <p className="text-[#304040]">Serving businesses and communities across South Africa with tailored technology solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision & Pioneering Change */}
                <section className="py-24 bg-[#00343C]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">What Drives Us</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">Mission, Vision &amp; Purpose</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 rounded-2xl p-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Emalangeni Technologies' mission is fuelled by a deep passion for technology and a strong commitment to improving people's lives. We are driven by an unwavering desire to identify and explore new markets, opportunities, and innovative ways to implement our cutting-edge solutions. Emalangeni Technologies aims to be a leader in the connectivity and telephony space.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Eye className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Emalangeni Technologies envisions becoming the leading and most innovative company in the connectivity and telephony space, setting new standards for excellence, and transforming the way people and businesses communicate and interact.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Pioneering Change</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Emalangeni Technologies is at the forefront of pioneering change in the connectivity, telephony, and IT managed service space. Our commitment to innovation, customer-centricity, and excellence sets us apart as a trailblazer in the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">What We Stand For</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Our Values</h2>
                            <p className="mt-4 text-lg text-[#304040] max-w-2xl mx-auto">
                                Regardless of market or industry, these principles guide every decision we make.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CORE_VALUES.map((v) => (
                                <div key={v.title} className="group bg-[#f4f7f8] rounded-2xl p-8 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                        <v.icon className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#00343C] mb-3">{v.title}</h3>
                                    <p className="text-[#304040] leading-relaxed">{v.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-[#f4f7f8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Why Emalangeni Technologies</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C] mb-8 leading-tight">
                                    Business Leadership.<br />Unparalleled Support.
                                </h2>
                                <div className="space-y-5">
                                    {[
                                        { icon: Award, text: 'Business Leadership — a leader in providing valuable and cost-effective IT solutions' },
                                        { icon: Zap, text: 'Great Customer Support — driven by a passion for exceptional IT services' },
                                        { icon: Shield, text: 'Technology & Product Innovation — delivering cutting-edge solutions to clients' },
                                        { icon: Heart, text: 'Community Empowerment — giving back and making a positive impact' },
                                        { icon: CheckCircle2, text: 'Black-owned, proudly South African technology company' },
                                    ].map((item) => (
                                        <div key={item.text} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[rgba(129,215,66,0.12)] flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-[#81d742]" />
                                            </div>
                                            <p className="text-[#304040] text-lg pt-1">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#00343C] rounded-3xl p-10 text-white">
                                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                                <p className="text-white/80 text-lg leading-relaxed mb-6">
                                    While we understand that each market is a little different from the other, there are some core values and principles that our company aligns itself to in every engagement:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Always delivering high quality services',
                                        'Maintaining excellent partnerships with our customers',
                                        'Building strong ties with the communities that we serve',
                                        "Always going beyond our client's expectations to deliver the best business results",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#81d742] flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate('/contact-us')}
                                    className="mt-8 px-6 py-3 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all flex items-center gap-2"
                                >
                                    Schedule A Consultation <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#81d742] py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C] mb-4">Are You Ready to Transform Your Business?</h2>
                        <p className="text-[#00343C]/70 text-lg mb-10 max-w-2xl mx-auto">
                            Stay up to date and never miss out. Schedule a consultation with our experts today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => navigate('/services-solutions')}
                                className="px-8 py-4 bg-[#00343C] text-white rounded-full font-bold hover:bg-[#002028] transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore Services <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => navigate('/contact-us')}
                                className="px-8 py-4 border-2 border-[#00343C]/40 text-[#00343C] rounded-full font-bold hover:border-[#00343C] hover:bg-[#00343C]/10 transition-all flex items-center justify-center gap-2"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};
