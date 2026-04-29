
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle2,
    ArrowRight,
    Cpu,
    Settings,
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
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <LandingNavbar />

             {/* Hero Section - Video Background */}
            <div className="relative pt-16 pb-8 lg:pt-20 lg:pb-12 min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/video/OPTION_01.mp4" type="video/mp4" />
                </video>
                
                {/* Yellow Green Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#81d742] z-20" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Badge - smaller on mobile */}
                       

                        {/* Headline - more compact */}
                        <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold text-[#fff] tracking-tight leading-tight mb-8 lg:mb-12">
                            Connecting the world through <span className="text-[#fff]">Technology</span>
                        </h1>
                        <br />
                        <br />

                        {/* Subheadline - more compact */}
                        <p className="text-base lg:text-lg text-[#ffff] mb-6 lg:mb-8 max-w-2xl mx-auto">
                            </p>

                        {/* Get Started Section - compact header */}
                        <div>
                            
                            {/* Cards Grid - compact for desktop, stacked for mobile */}
                            <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
                                {/* Emalangeni Connect Card */}
                                <div
                                    onClick={() => navigate('/services-solutions')}
                                    className="group cursor-pointer relative overflow-hidden bg-transparent rounded-2xl lg:rounded-3xl border-2 border-slate-200 hover:border-[#81d742]/30 transition-all duration-300 hover:shadow-xl"
                                >
                                    {/* Dark overlay for contrast */}
                                    <div className="absolute inset-0 bg-black/55 pointer-events-none" />
                                    <div className="p-5 lg:p-6 text-left h-full flex flex-col relative z-10">
                                        {/* Icon */}
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[rgba(129,215,66,0.2)] to-[rgba(146,171,196,0.1)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Wifi className="w-6 h-6 lg:w-7 lg:h-7 text-[#81d742]" />
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Emalangeni Connect</h3>
                                        <p className="text-sm text-white/80 mb-4 leading-relaxed">
                                            High-speed fibre and wireless connectivity solutions for homes, businesses, and communities — keeping everyone seamlessly connected.
                                        </p>

                                        {/* Features */}
                                        <ul className="hidden lg:block space-y-2 mb-4 flex-grow">
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                Fibre & wireless broadband
                                            </li>
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                WiFi hotspot solutions
                                            </li>
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                Campus-wide connectivity
                                            </li>
                                        </ul>

                                        {/* CTA Button */}
                                        <button className="w-full py-3 lg:py-3.5 bg-[#00343C] text-white rounded-xl font-bold group-hover:bg-[#81d742] group-hover:text-[#00343C] transition-colors flex items-center justify-center mt-auto relative z-20">
                                            Emalangeni Connect
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Emalangeni Financial Services Card */}
                                <div
                                    onClick={() => navigate('/contact-us')}
                                    className="group cursor-pointer relative overflow-hidden bg-transparent rounded-2xl lg:rounded-3xl border-2 border-slate-200 hover:border-[#81d742]/30 transition-all duration-300 hover:shadow-xl"
                                >
                                    {/* Dark overlay for contrast */}
                                    <div className="absolute inset-0 bg-black/55 pointer-events-none" />
                                    <div className="p-5 lg:p-6 text-left h-full flex flex-col relative z-10">
                                        {/* Icon */}
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[rgba(129,215,66,0.2)] to-[rgba(146,171,196,0.1)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <DollarSign className="w-6 h-6 lg:w-7 lg:h-7 text-[#81d742]" />
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Emalangeni Financial Services</h3>
                                        <p className="text-sm text-white/80 mb-4 leading-relaxed">
                                            Empowering individuals and businesses with accessible, innovative financial solutions tailored to your growth and stability.
                                        </p>

                                        {/* Features */}
                                        <ul className="hidden lg:block space-y-2 mb-4 flex-grow">
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                Business financial solutions
                                            </li>
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                Personal financial services
                                            </li>
                                            <li className="flex items-center text-white text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#81d742] rounded-full mr-2 flex-shrink-0" />
                                                Investment & growth planning
                                            </li>
                                        </ul>

                                        {/* CTA Button */}
                                        <button className="w-full py-3 lg:py-3.5 bg-[#00343C] text-white rounded-xl font-bold group-hover:bg-[#81d742] group-hover:text-[#00343C] transition-colors flex items-center justify-center mt-auto relative z-20">
                                            Emalangeni Financial Services
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Shapes - smaller and more subtle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#81d742]/10 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
                    <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#00343C]/10 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
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
