import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    CheckCircle2,
    MessageSquare,
    ArrowRight,
    Globe,
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

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);
import { LandingNavbar } from '../components/LandingNavbar';
import { Footer } from '../components/Footer';

type FormData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    role: string;
    message: string;
};

const SUBJECTS = [
    'General Enquiry',
    'IT Support & Services',
    'Wireless WiFi Solutions',
    'Fibre Connectivity',
    'Network Infrastructure',
    'Partnership Opportunity',
    'Sales & Pricing',
    'Careers',
    'Other',
];

const ROLES = ['Business', 'School', 'Government', 'Individual', 'Media / Press', 'Other'];

export const ContactUs: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', phone: '', subject: '', role: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
    };

    return (
        <div className="min-h-screen bg-white">
            <LandingNavbar showSocialStrip={true} />

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#00343C] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <img src="/images/Contact us Emalangeni.png" alt="" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00343C]/95 via-[#00343C]/70 to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Let's Start a<br />
                            <span className="text-[#81d742]">Conversation</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">
                            Whether you need IT support, wireless connectivity, fibre solutions, or just want to learn more — our team responds within 24 hours.
                        </p>
                        <button
                            onClick={() => navigate('/register')}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:border-[#81d742] hover:bg-[#81d742]/10 transition-all text-sm"
                        >
                            Register Your Interest <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Branch Offices ───────────────────────────── */}
            <section className="bg-[#81d742] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Mpumalanga Office */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-7 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h3 className="font-bold text-lg mb-4">Mpumalanga</h3>
                            <p className="text-sm mb-2">22 Bulpin Street, Unit No 1<br />Delta Complex<br />Nelspruit, 1200</p>
                            <p className="text-sm font-semibold mt-4">013 004 0180</p>
                            <p className="text-sm text-white/70">info@emalangenitech.co.za</p>
                        </div>

                        {/* Limpopo Office */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-7 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h3 className="font-bold text-lg mb-4">Limpopo</h3>
                            <p className="text-sm mb-2">1 Ivory Villas, 18 Dorp Street<br />Polokwane, 0699</p>
                            <p className="text-sm font-semibold mt-4">015 004 1393</p>
                            <p className="text-sm text-white/70">info@emalangenitech.co.za</p>
                        </div>

                        {/* KZN Office */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-7 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h3 className="font-bold text-lg mb-4">KZN</h3>
                            <p className="text-sm mb-2">Office 4, Block 1<br />3 Dumat Place Mount<br />Edgecombe, 4301</p>
                            <p className="text-sm font-semibold mt-4">031 100 0720</p>
                            <p className="text-sm text-white/70">kzn@emalangenitech.co.za</p>
                        </div>

                        {/* Gauteng Office */}
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-7 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h3 className="font-bold text-lg mb-4">Gauteng</h3>
                            <p className="text-sm mb-2">3 Villa Place, Berkeley Avenue<br />Bryanston, 2191</p>
                            <p className="text-sm font-semibold mt-4">013 004 0627</p>
                            <p className="text-sm text-white/70">info@emalangenitech.co.za</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact Details + Form ────────────────────── */}
            <section className="py-24 bg-[#f4f7f8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* ── Left: Form (3 cols) ── */}
                        <div className="lg:col-span-3">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Send a Message</span>
                            <h2 className="text-3xl font-bold text-[#00343C] mb-8">How Can We Help?</h2>

                            {submitted ? (
                                <div className="bg-white rounded-2xl p-12 border border-[rgba(129,215,66,0.2)] shadow-sm text-center">
                                    <div className="w-20 h-20 bg-[rgba(129,215,66,0.12)] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-[#81d742]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#00343C] mb-3">Message Sent!</h3>
                                    <p className="text-[#304040] text-lg mb-8">
                                        Thank you for reaching out. A member of our team will respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[rgba(129,215,66,0.2)] shadow-sm space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Full Name *</label>
                                            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name"
                                                className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Email Address *</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com"
                                                className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all" />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Phone Number</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+27 (0) 00 000 0000"
                                                className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">I am a... *</label>
                                            <select name="role" required value={formData.role} onChange={handleChange}
                                                className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all bg-white">
                                                <option value="">Select your role</option>
                                                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#00343C] mb-2">Subject *</label>
                                        <select name="subject" required value={formData.subject} onChange={handleChange}
                                            className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all bg-white">
                                            <option value="">Select a topic</option>
                                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#00343C] mb-2">Message *</label>
                                        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                                            placeholder="Tell us how we can help..."
                                            className="w-full border border-[rgba(129,215,66,0.3)] rounded-xl px-4 py-3 text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all resize-none" />
                                    </div>
                                    <button type="submit" disabled={loading}
                                        className="w-full py-4 bg-[#81d742] text-[#00343C] rounded-xl font-bold hover:bg-[#5cad2a] transition-all shadow-lg shadow-[#81d742]/20 flex items-center justify-center gap-2 disabled:opacity-60">
                                        {loading ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                                    </button>
                                    <p className="text-[#304040]/50 text-xs text-center">Your information is secure and will never be shared.</p>
                                </form>
                            )}
                        </div>

                        {/* ── Right: Sidebar (2 cols) ── */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Full Contact Details */}
                            <div className="bg-[#00343C] rounded-2xl p-8 text-white">
                                <h3 className="font-bold text-xl mb-6">Contact Details</h3>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <MapPin className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Gauteng (Head Office)</p>
                                            <p className="font-semibold">3 Villa Place, Berkeley Avenue</p>
                                            <p className="text-white/70 text-sm">Bryanston, 2191</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Mail className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                                            <a href="mailto:info@emalangenitech.co.za" className="font-semibold hover:text-[#81d742] transition-colors block">info@emalangenitech.co.za</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Phone className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</p>
                                            <a href="tel:0130040627" className="font-semibold hover:text-[#81d742] transition-colors block">013 004 0627</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Globe className="w-5 h-5 text-[#81d742]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Website</p>
                                            <p className="font-semibold">www.emalangenitech.co.za</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-2xl p-7 border border-[rgba(129,215,66,0.15)] shadow-sm">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#81d742]" />
                                    </div>
                                    <h3 className="font-bold text-[#00343C] text-lg">Office Hours</h3>
                                </div>
                                <ul className="space-y-3 text-[#304040]">
                                    <li className="flex justify-between items-center">
                                        <span className="text-sm">Monday – Friday</span>
                                        <span className="font-bold text-[#00343C] text-sm">08:00 – 17:00</span>
                                    </li>
                                    <li className="flex justify-between items-center text-[#304040]/40">
                                        <span className="text-sm">Saturday</span>
                                        <span className="text-sm">Closed</span>
                                    </li>
                                    <li className="flex justify-between items-center text-[#304040]/40">
                                        <span className="text-sm">Sunday &amp; Public Holidays</span>
                                        <span className="text-sm">Closed</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-t border-[rgba(129,215,66,0.1)] flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <p className="text-xs text-[#304040]/60">Emergency IT support available <strong className="text-[#81d742]">24/7</strong></p>
                                </div>
                            </div>

                            {/* Common Enquiries */}
                            <div className="bg-[#f4f7f8] rounded-2xl p-7 border border-[rgba(129,215,66,0.1)]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[rgba(129,215,66,0.12)] rounded-xl flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-[#81d742]" />
                                    </div>
                                    <h3 className="font-bold text-[#00343C]">Common Enquiries</h3>
                                </div>
                                <ul className="space-y-2">
                                    {['IT support & maintenance', 'Wireless WiFi installation', 'Fibre connectivity solutions', 'Network infrastructure setup', 'Pricing and custom quotes'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-[#304040]">
                                            <CheckCircle2 className="w-4 h-4 text-[#81d742] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social */}
                            <div className="bg-white rounded-2xl p-7 border border-[rgba(129,215,66,0.15)] shadow-sm">
                                <h3 className="font-bold text-[#00343C] mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {[
                                        { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                                        { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                                        { icon: XIcon, href: 'https://twitter.com', label: 'X' },
                                    ].map(({ icon: Icon, href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-[rgba(129,215,66,0.1)] rounded-xl hover:bg-[#81d742] group transition-colors">
                                            <Icon className="w-4 h-4 text-[#81d742] group-hover:text-white transition-colors" />
                                            <span className="text-xs font-semibold text-[#00343C] group-hover:text-white transition-colors">{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Register CTA Banner ───────────────────────── */}
            <section className="bg-[#81d742] py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#00343C] mb-3">Ready to Get Started?</h2>
                    <p className="text-[#00343C]/70 mb-8 max-w-xl mx-auto">
                        Register your interest and our team will put together a tailored IT, WiFi or Fibre solution for you.
                    </p>
                    <button
                        onClick={() => navigate('/register')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00343C] rounded-full font-bold hover:bg-[#f4f7f8] transition-all shadow-lg"
                    >
                        Register Now <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};
