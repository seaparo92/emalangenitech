import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    ArrowLeft,
    Mail,
    Phone,
    User,
    Building2,
    CheckCircle2,
    Cpu,
    Wifi,
    Zap,
    MessageSquare,
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { Footer } from '../components/Footer';

type ServiceType = 'it-solutions' | 'wireless-wifi' | 'fibre' | 'general';

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: ServiceType | '';
    message: string;
};

const SERVICES: { id: ServiceType; icon: React.ElementType; label: string; description: string }[] = [
    {
        id: 'it-solutions',
        icon: Cpu,
        label: 'IT Solutions',
        description: 'Managed IT services, technical support & consulting',
    },
    {
        id: 'wireless-wifi',
        icon: Wifi,
        label: 'Wireless WiFi',
        description: 'WiFi infrastructure, hotspots & campus connectivity',
    },
    {
        id: 'fibre',
        icon: Zap,
        label: 'Fibre Connectivity',
        description: 'High-speed fibre installation & broadband solutions',
    },
    {
        id: 'general',
        icon: MessageSquare,
        label: 'General Enquiry',
        description: 'Not sure yet? Tell us what you need',
    },
];

export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleServiceSelect = (id: ServiceType) => {
        setFormData(prev => ({ ...prev, service: id }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const selectedService = SERVICES.find(s => s.id === formData.service);

    return (
        <div className="min-h-screen bg-white">
            <LandingNavbar showSocialStrip={true} />

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#00343C] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#81d742]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#81d742]/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </button>
                    <div className="max-w-3xl">
                        <span className="inline-block text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            Get Started
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Register Your<br />
                            <span className="text-[#81d742]">Interest</span>
                        </h1>
                        <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                            Tell us what you're looking for and our team will reach out within 24 hours with a tailored solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Form Section ─────────────────────────────── */}
            <section className="py-20 bg-[#f4f7f8]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {submitted ? (
                        /* ── Success State ── */
                        <div className="bg-white rounded-3xl p-12 shadow-sm border border-[rgba(129,215,66,0.15)] text-center">
                            <div className="w-24 h-24 bg-[rgba(129,215,66,0.12)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-12 h-12 text-[#81d742]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#00343C] mb-3">You're Registered!</h2>
                            <p className="text-[#304040] text-lg mb-2">
                                Thank you, <strong>{formData.name}</strong>.
                            </p>
                            <p className="text-[#304040] mb-8">
                                We've received your interest{selectedService ? ` in <strong>${selectedService.label}</strong>` : ''}. Our team will contact you at <strong>{formData.email}</strong> within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/')}
                                    className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    Back to Home <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                                    className="px-8 py-4 border-2 border-[rgba(129,215,66,0.3)] text-[#81d742] rounded-full font-bold hover:border-[#81d742] transition-all"
                                >
                                    Submit Another
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Step 1: Service Selection */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(129,215,66,0.15)]">
                                <h2 className="text-xl font-bold text-[#00343C] mb-2">What are you interested in?</h2>
                                <p className="text-[#304040] text-sm mb-6">Select the service that best matches your needs.</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {SERVICES.map((svc) => {
                                        const active = formData.service === svc.id;
                                        return (
                                            <button
                                                key={svc.id}
                                                type="button"
                                                onClick={() => handleServiceSelect(svc.id)}
                                                className={`group text-left rounded-xl p-5 border-2 transition-all duration-200 ${
                                                    active
                                                        ? 'border-[#81d742] bg-[rgba(129,215,66,0.06)] shadow-md'
                                                        : 'border-[rgba(129,215,66,0.2)] hover:border-[#81d742] hover:bg-[rgba(129,215,66,0.04)]'
                                                }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${active ? 'bg-[#81d742]' : 'bg-[rgba(129,215,66,0.12)] group-hover:bg-[#81d742]'}`}>
                                                        <svc.icon className={`w-5 h-5 transition-colors ${active ? 'text-white' : 'text-[#81d742] group-hover:text-white'}`} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#00343C] mb-1">{svc.label}</p>
                                                        <p className="text-xs text-[#304040]/70 leading-relaxed">{svc.description}</p>
                                                    </div>
                                                </div>
                                                {active && (
                                                    <div className="mt-3 flex justify-end">
                                                        <CheckCircle2 className="w-5 h-5 text-[#81d742]" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Step 2: Contact Details */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(129,215,66,0.15)]">
                                <h2 className="text-xl font-bold text-[#00343C] mb-6">Your Details</h2>
                                <div className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Full Name *</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#81d742]/60" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full pl-11 pr-4 py-3 border border-[rgba(129,215,66,0.3)] rounded-xl text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Email Address *</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#81d742]/60" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="w-full pl-11 pr-4 py-3 border border-[rgba(129,215,66,0.3)] rounded-xl text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Phone Number *</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#81d742]/60" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+27 12 345 6789"
                                                    className="w-full pl-11 pr-4 py-3 border border-[rgba(129,215,66,0.3)] rounded-xl text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#00343C] mb-2">Company / Organisation</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#81d742]/60" />
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Your company or school"
                                                    className="w-full pl-11 pr-4 py-3 border border-[rgba(129,215,66,0.3)] rounded-xl text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#00343C] mb-2">Tell us more (optional)</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Describe your requirements, location, or any specific questions..."
                                            className="w-full px-4 py-3 border border-[rgba(129,215,66,0.3)] rounded-xl text-[#304040] focus:outline-none focus:border-[#81d742] focus:ring-2 focus:ring-[#81d742]/20 transition-all resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading || !formData.service}
                                className="w-full py-4 bg-[#81d742] text-[#00343C] rounded-xl font-bold text-lg hover:bg-[#5cad2a] transition-all shadow-lg shadow-[#81d742]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <>Submit Registration <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                            {!formData.service && (
                                <p className="text-center text-sm text-[#304040]/50">Please select a service above to continue.</p>
                            )}
                            <p className="text-center text-xs text-[#304040]/40">
                                We respect your privacy. Your information will never be shared with third parties.
                            </p>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};
