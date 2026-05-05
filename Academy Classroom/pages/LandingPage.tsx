
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle2,
    ArrowRight,
    Cpu,
    Headphones,
    Wifi,
    Zap,
    DollarSign,
    Code2,
    Palette,
    TrendingUp,
    Award,
    Users,
    Target,
    Eye,
    Shield,
    FileText,
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <LandingNavbar />

            {/* Hero Section - Video Background */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
                >
                    <source src="/video/OPTION_01.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Centered Logo */}
                <div className="relative z-20 flex items-center justify-center w-full h-full">
                    <img
                        src="/images/EMALANGENI TECH ICON.png"
                        alt="Emalangeni Technologies"
                        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Emalangeni Connect */}
                    <div className="rounded-2xl border-2 border-[#81d742] bg-[#0d0d0d] p-6 flex flex-col gap-4 hover:shadow-[0_0_24px_rgba(129,215,66,0.25)] transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <img src="/images/EMALANGENI TECH ICON.png" alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="text-white font-bold text-sm leading-none">EMALANGENI<sup className="text-[#81d742] text-[8px]">®</sup></p>
                                    <p className="text-[#81d742] text-xs font-semibold tracking-widest uppercase">Connect</p>
                                </div>
                            </div>
                            <Wifi className="w-10 h-10 text-white" />
                        </div>
                        <ul className="space-y-1 flex-grow">
                            {['Fibre & Wireless broadband.', 'Wi-fi hotspot solutions', 'Campus wide connectivity'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#81d742] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => navigate('/services-solutions')}
                            className="self-end mt-2 px-6 py-2 rounded-full border border-white/30 bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#81d742] hover:text-[#0d0d0d] hover:border-[#81d742] transition-all"
                        >
                            Connect
                        </button>
                    </div>

                    {/* Emalangeni Financial Services */}
                    <div className="rounded-2xl border-2 border-[#81d742] bg-[#0d0d0d] p-6 flex flex-col gap-4 hover:shadow-[0_0_24px_rgba(129,215,66,0.25)] transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <img src="/images/EMALANGENI TECH ICON.png" alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="text-white font-bold text-sm leading-none">EMALANGENI<sup className="text-[#81d742] text-[8px]">®</sup></p>
                                    <p className="text-[#81d742] text-xs font-semibold tracking-widest uppercase">Financial Services</p>
                                </div>
                            </div>
                            <DollarSign className="w-10 h-10 text-white" />
                        </div>
                        <ul className="space-y-1 flex-grow">
                            {['Business financial solutions', 'Personal financial services', 'Investment & growth planning'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#81d742] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="self-end mt-2 px-6 py-2 rounded-full border border-white/30 bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#81d742] hover:text-[#0d0d0d] hover:border-[#81d742] transition-all"
                        >
                            Finance
                        </button>
                    </div>

                    {/* Emalangeni Automation */}
                    <div className="rounded-2xl border-2 border-[#81d742] bg-[#0d0d0d] p-6 flex flex-col gap-4 hover:shadow-[0_0_24px_rgba(129,215,66,0.25)] transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <img src="/images/EMALANGENI TECH ICON.png" alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="text-white font-bold text-sm leading-none">EMALANGENI<sup className="text-[#81d742] text-[8px]">®</sup></p>
                                    <p className="text-[#81d742] text-xs font-semibold tracking-widest uppercase">Automation</p>
                                </div>
                            </div>
                            <FileText className="w-10 h-10 text-white" />
                        </div>
                        <ul className="space-y-1 flex-grow">
                            {['Business process automation', 'Workflow optimisation', 'Smart system integration'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#81d742] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="self-end mt-2 px-6 py-2 rounded-full border border-white/30 bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#81d742] hover:text-[#0d0d0d] hover:border-[#81d742] transition-all"
                        >
                            Automation
                        </button>
                    </div>

                </div>
            </div>

            {/* Our Services Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">What We Offer</span>
                        <h2 className="text-3xl font-bold text-[#00343C] sm:text-4xl">Our Services</h2>
                        <p className="mt-4 text-lg text-[#304040] max-w-3xl mx-auto">
                            Emalangeni Technologies is dedicated to delivering exceptional services to our clients, helping them leverage technology to achieve their business goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group relative bg-[#f4f7f8] rounded-2xl p-8 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/Managed IT Services.jpg" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                    <Cpu className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00343C] mb-3 group-hover:text-white transition-colors">Managed IT Services</h3>
                                <p className="text-[#304040] leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                                    Emalangeni Technologies takes care of all your IT needs through our comprehensive managed IT services.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-[#f4f7f8] rounded-2xl p-8 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/ICT-Cloud-Solutions.jpg" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                    <TrendingUp className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00343C] mb-3 group-hover:text-white transition-colors">Digital Transformation Services</h3>
                                <p className="text-[#304040] leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                                    Emalangeni Technologies empowers businesses to embark on successful digital transformation journeys.
                                </p>
                            </div>
                        </div>
                        <div className="group bg-[#f4f7f8] rounded-2xl p-8 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                <Code2 className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-[#00343C] mb-3">Software Development</h3>
                            <p className="text-[#304040] leading-relaxed text-sm">
                                Our skilled software development team creates tailor-made applications and software solutions.
                            </p>
                        </div>
                        <div className="group relative bg-[#f4f7f8] rounded-2xl p-8 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/Design and UX Services.jpg" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#81d742] transition-colors">
                                    <Palette className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00343C] mb-3 group-hover:text-white transition-colors">Design and UX Services</h3>
                                <p className="text-[#304040] leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                                    Emalangeni Technologies offers creative design and user experience (UX) services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <button
                            onClick={() => navigate('/services-solutions')}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg"
                        >
                            Explore More <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mission, Vision & Pioneering Change */}
            <div className="py-20 bg-[#00343C]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative bg-white/10 rounded-2xl p-8 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/ABOUT US.png" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Fuelled by a deep passion for technology and a strong commitment to improving people's lives. We are driven by an unwavering desire to identify and explore new markets, opportunities, and innovative ways to implement our cutting-edge solutions. Emalangeni Technologies aims to be a leader in the connectivity and telephony space.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-white/10 rounded-2xl p-8 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/services emalangeni.png" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Eye className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Emalangeni Technologies envisions becoming the leading and most innovative company in the connectivity and telephony space, setting new standards for excellence, and transforming the way people and businesses communicate and interact.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-white/10 rounded-2xl p-8 overflow-hidden">
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <img src="/images/IT-Infrastructure.jpg" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#00343C]/50" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-7 h-7 text-[#81d742]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Pioneering Change</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Emalangeni Technologies is at the forefront of pioneering change in the connectivity, telephony, and IT managed service space. Our commitment to innovation, customer-centricity, and excellence sets us apart as a trailblazer in the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Why Us</span>
                        <h2 className="text-3xl font-bold text-[#00343C] sm:text-4xl">Why Choose Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: 'Business Leadership', desc: 'Emalangeni Technologies stands out as a leader in providing valuable and cost-effective IT solutions to businesses.' },
                            { icon: Headphones, title: 'Great Customer Support', desc: 'We are driven by a passion for great customer support and exceptional IT services — your success is our priority.' },
                            { icon: Zap, title: 'Technology & Product Innovation', desc: 'Our focus on technology and product innovation drives our commitment to delivering cutting-edge solutions to our clients.' },
                            { icon: Users, title: 'Community Empowerment', desc: 'Community empowerment is a cornerstone of our values. We are dedicated to making a positive impact through various initiatives.' },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="group text-center p-8 bg-[#f4f7f8] rounded-2xl border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-14 h-14 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#81d742] transition-colors">
                                    <Icon className="w-7 h-7 text-[#81d742] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00343C] mb-3">{title}</h3>
                                <p className="text-[#304040] text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Background Section */}
            <div className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <img src="/images/ABOUT US.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">About Us</span>
                        <h2 className="text-3xl font-bold text-[#fff] sm:text-4xl">Our Background</h2>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <p className="text-[#304040] text-lg leading-relaxed mb-6">
                            As one of South Africa's leading black owned, technology company, Emalangeni Technologies Pty (Ltd) is at the forefront of digital transformations bringing awe inspiring technology services to the mainstream IT in order to produce better business outcomes. Our aim is focused on improving people's daily experiences and interactions through the application of new and pulsating technology services and solutions. We help provide clients with access to certified and unparalleled technical expertise, logistical support and managed IT services.
                        </p>
                        <p className="text-[#304040] text-lg leading-relaxed mb-6">
                            Our company strives to deliver consistence and quality in client services. We can achieve this by thoroughly understanding our customers' needs and providing custom solutions designed to meet their individual requirements.
                        </p>
                        <p className="text-[#304040] text-lg leading-relaxed mb-4">
                            While we understand that each market is a little different from the other, there are some core values and principles that our company aligns itself to:
                        </p>
                        <ul className="space-y-3 text-[#304040] text-lg">
                            {[
                                'Always delivering high quality services',
                                'Maintaining excellent partnerships with our customers',
                                'Building strong ties with the communities that we serve',
                                "Always going beyond our client's expectations in order to deliver the best business results",
                            ].map((item) => (
                                <li key={item} className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-[#81d742] mr-3 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Teamwork Section */}
            <div className="py-20 bg-[#00343C]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-14 h-14 bg-[#81d742]/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                        <Users className="w-7 h-7 text-[#81d742]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Teamwork</h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Teamwork is at the core of Emalangeni Technologies' success. Our company is driven by a group of passionate IT specialists who are dedicated to delivering excellence in technology services. We take pride in designing, building, and implementing advanced technology solutions that unlock our customers' full business potential. By merging strategy, technology, and creativity, we empower organizations to surge ahead with a competitive edge built on continuous innovation.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#00343C] mb-6">Are You Ready to Transform Your Business?</h2>
                    <p className="text-xl text-[#304040] mb-10">
                        Stay up to date and never miss out. Schedule a consultation with our experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold text-lg hover:bg-[#5cad2a] transition-all shadow-lg flex items-center justify-center"
                        >
                            Schedule A Consultation <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
