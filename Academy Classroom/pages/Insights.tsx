import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Brain,
    BookOpen,
    GraduationCap,
    School,
    TrendingUp,
    Clock,
    Calendar,
    Search,
    Tag,
    ChevronRight,
} from 'lucide-react';
import { LandingNavbar } from '../components/LandingNavbar';
import { ContactFormModal } from '../components/ContactFormModal';

type Article = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    featured?: boolean;
    icon: React.ElementType;
};

const CATEGORIES = ['All', 'AI in Education', 'CAPS Curriculum', 'Study Tips', 'School Management', 'EdTech'];

const ARTICLES: Article[] = [
    {
        id: '1',
        title: 'How AI is Revolutionising Personalised Learning in South Africa',
        excerpt: 'Artificial intelligence is no longer a futuristic concept in education — it\'s here, and it\'s changing the way South African learners engage with curriculum content every day.',
        category: 'AI in Education',
        date: 'April 10, 2026',
        readTime: '6 min read',
        featured: true,
        icon: Brain,
    },
    {
        id: '2',
        title: 'Understanding the CAPS Curriculum: A Parent\'s Complete Guide',
        excerpt: 'The Curriculum and Assessment Policy Statement can be confusing. Here\'s everything you need to know to support your child\'s learning from Grade R to Grade 12.',
        category: 'CAPS Curriculum',
        date: 'April 3, 2026',
        readTime: '8 min read',
        featured: true,
        icon: BookOpen,
    },
    {
        id: '3',
        title: '10 Proven Study Techniques That Actually Work for Matric Students',
        excerpt: 'With matric exams approaching, the right study strategies can be the difference between passing and distinction. Our education experts share the techniques that consistently deliver results.',
        category: 'Study Tips',
        date: 'March 28, 2026',
        readTime: '5 min read',
        featured: true,
        icon: GraduationCap,
    },
    {
        id: '4',
        title: 'Why Schools Are Choosing AI-Powered Assessment Over Traditional Tests',
        excerpt: 'Traditional pen-and-paper tests have limitations that modern educators are beginning to move past. Discover how AI assessment is improving outcomes across South African schools.',
        category: 'School Management',
        date: 'March 20, 2026',
        readTime: '7 min read',
        featured: true,
        icon: School,
    },
    {
        id: '5',
        title: 'The Role of EdTech in Bridging the Education Gap in South Africa',
        excerpt: 'Educational technology is proving to be a powerful equaliser. Here\'s how platforms like Emalangeni Tech are helping learners from all backgrounds access quality education.',
        category: 'EdTech',
        date: 'March 15, 2026',
        readTime: '6 min read',
        featured: true,
        icon: TrendingUp,
    },
    {
        id: '6',
        title: 'Bloom\'s Taxonomy Explained: How We Design Questions That Build Thinking Skills',
        excerpt: 'All 500,000+ questions on our platform are aligned to Bloom\'s Taxonomy. Here\'s why that matters and how it helps learners develop deeper understanding.',
        category: 'CAPS Curriculum',
        date: 'March 8, 2026',
        readTime: '5 min read',
        featured: false,
        icon: Brain,
    },
    {
        id: '7',
        title: 'Helping Your Foundation Phase Child Build a Love of Learning',
        excerpt: 'The early years of schooling are critical for developing a positive attitude towards learning. Practical tips for parents of Grade R to Grade 3 learners.',
        category: 'Study Tips',
        date: 'March 1, 2026',
        readTime: '4 min read',
        featured: false,
        icon: BookOpen,
    },
    {
        id: '8',
        title: 'CPD for Teachers: How 55 SACE-Accredited Courses Can Advance Your Career',
        excerpt: 'Continuous Professional Development is essential for South African educators. Our SACE-accredited online courses make it easier than ever to grow professionally.',
        category: 'School Management',
        date: 'February 24, 2026',
        readTime: '5 min read',
        featured: false,
        icon: GraduationCap,
    },
];

const FEATURED = ARTICLES.filter((a) => a.featured);
const NON_FEATURED = ARTICLES.filter((a) => !a.featured);

export const Insights: React.FC = () => {
    const navigate = useNavigate();
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = NON_FEATURED.filter((a) => {
        const matchCat = activeCategory === 'All' || a.category === activeCategory;
        const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

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
                                Insights &amp; Resources
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Education Insights<br />
                                <span className="text-[#81d742]">From the Experts</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                                Stay informed with the latest educational insights, learning strategies, curriculum guidance, and EdTech news from the Emalangeni Tech team.
                            </p>
                        </div>
                        {/* Search */}
                        <div className="relative max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#81d742] focus:bg-white/15 transition-all"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Featured Articles ─────────────────────────── */}
                <section className="py-24 bg-[#f4f7f8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Editor's Picks</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Featured Articles</h2>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {FEATURED.map((article, i) => (
                                <div
                                    key={article.id}
                                    className={`group bg-white rounded-2xl overflow-hidden border border-[rgba(129,215,66,0.15)] shadow-sm hover:shadow-xl hover:border-[#81d742] transition-all duration-300 flex flex-col ${i === 0 ? 'lg:col-span-2' : ''}`}
                                >
                                    {/* Image placeholder */}
                                    <div className={`bg-gradient-to-br from-[#00343C] to-[#81d742] flex items-center justify-center ${i === 0 ? 'h-56' : 'h-40'}`}>
                                        <article.icon className="w-16 h-16 text-white/30" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[rgba(129,215,66,0.12)] text-[#81d742] text-xs font-bold px-3 py-1 rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00343C] mb-3 group-hover:text-[#81d742] transition-colors flex-grow">
                                            {article.title}
                                        </h3>
                                        <p className="text-[#304040] text-sm leading-relaxed mb-4">{article.excerpt}</p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(129,215,66,0.1)]">
                                            <div className="flex items-center gap-3 text-xs text-[#304040]/60">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                                            </div>
                                            <button className="text-[#81d742] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                Read More <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Category Filter + Articles ────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
                            <div>
                                <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Browse</span>
                                <h2 className="text-3xl font-bold text-[#00343C]">All Articles</h2>
                            </div>
                            {/* Category Filters */}
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                            activeCategory === cat
                                                ? 'bg-[#81d742] text-[#00343C]'
                                                : 'bg-[#f4f7f8] text-[#304040] hover:bg-[rgba(129,215,66,0.1)]'
                                        }`}
                                    >
                                        <Tag className="w-3 h-3" />
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="text-center py-20 text-[#304040]/60">
                                <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                                <p className="text-lg">No articles found matching your search.</p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                                {filtered.map((article) => (
                                    <div
                                        key={article.id}
                                        className="group flex gap-6 bg-[#f4f7f8] rounded-2xl p-6 border border-transparent hover:border-[#81d742] hover:bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#81d742] to-[#5cad2a] flex items-center justify-center flex-shrink-0">
                                            <article.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-wide mb-2 block">{article.category}</span>
                                            <h3 className="text-lg font-bold text-[#00343C] mb-2 group-hover:text-[#81d742] transition-colors leading-snug">
                                                {article.title}
                                            </h3>
                                            <p className="text-[#304040] text-sm leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                                            <div className="flex items-center gap-3 text-xs text-[#304040]/50">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Topics Grid ───────────────────────────────── */}
                <section className="py-24 bg-[#f4f7f8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Explore by Topic</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#00343C]">Explore by Topic</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Brain, title: 'AI in Education', count: '12 articles', color: 'from-[#81d742] to-[#5cad2a]' },
                                { icon: BookOpen, title: 'CAPS Curriculum', count: '18 articles', color: 'from-[#00343C] to-[#004D57]' },
                                { icon: GraduationCap, title: 'Study Tips', count: '24 articles', color: 'from-[#81d742] to-[#5cad2a]' },
                                { icon: School, title: 'School Management', count: '9 articles', color: 'from-[#00343C] to-[#004D57]' },
                                { icon: TrendingUp, title: 'EdTech Trends', count: '15 articles', color: 'from-[#81d742] to-[#5cad2a]' },
                                { icon: BookOpen, title: 'Parent Guides', count: '11 articles', color: 'from-[#00343C] to-[#004D57]' },
                            ].map((topic) => (
                                <button
                                    key={topic.title}
                                    onClick={() => setActiveCategory(topic.title.split(' ').slice(0, 2).join(' '))}
                                    className="group flex items-center gap-4 bg-white rounded-2xl p-6 border border-[rgba(129,215,66,0.15)] hover:border-[#81d742] hover:shadow-lg transition-all duration-300 text-left"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <topic.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#00343C] group-hover:text-[#81d742] transition-colors">{topic.title}</h3>
                                        <p className="text-[#304040]/60 text-sm">{topic.count}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-[#81d742] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Newsletter ────────────────────────────────── */}
                <section className="bg-[#00343C] py-20">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                        <span className="text-[#81d742] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Stay Updated</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get Insights in Your Inbox</h2>
                        <p className="text-white/70 text-lg mb-10">
                            Monthly educational insights, curriculum updates, and study tips — delivered straight to you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#81d742] transition-all"
                            />
                            <button className="px-8 py-4 bg-[#81d742] text-[#00343C] rounded-full font-bold hover:bg-[#5cad2a] transition-all whitespace-nowrap">
                                Subscribe Free
                            </button>
                        </div>
                        <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe at any time.</p>
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
                            <button onClick={() => navigate('/services-solutions')} className="hover:text-white transition-colors">Services</button>
                            <button onClick={() => navigate('/contact-us')} className="hover:text-white transition-colors">Contact</button>
                        </div>
                        <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Emalangeni Tech. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};
