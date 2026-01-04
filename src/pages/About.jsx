import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Truck, Cpu, Leaf } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useTranslation } from '../context/i18n';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>About Sri Balaji Group | Agro-Processing Leaders in Jadcherla, Telangana</title>
                <meta name="description" content="Sri Balaji Group - Trusted agro-processing company in Jadcherla and Manyamkonda. Decades of excellence in oil milling, cotton ginning, and sustainable manufacturing in Mahbubnagar, Telangana." />
                <meta name="keywords" content="Sri Balaji Group history, oil mill Jadcherla, cotton ginning Manyamkonda, agro processing Telangana, Mahbubnagar industry, sustainable manufacturing" />
                <link rel="canonical" href="https://sri-balaji-mill.vercel.app/about" />
            </Helmet>
            {/* Header Section */}
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <span className="text-[var(--accent-secondary)] uppercase tracking-widest font-bold text-sm mb-4 block">{t('about.whoWeAre')}</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-8 text-[var(--text-primary)]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        {t('about.title')}
                    </motion.h1>
                    <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-xl leading-relaxed font-light">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <Section>
                <div className="grid md:grid-cols-2 gap-10">
                    <Card className="p-10 border-t-4 border-[var(--accent-primary)] h-full" hoverEffect={false}>
                        <div className="flex items-center gap-6 mb-6">
                            <div className="p-4 bg-green-50 rounded-full text-[var(--accent-primary)]">
                                <Target size={40} />
                            </div>
                            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t('about.mission')}</h2>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            {t('about.missionDesc')}
                        </p>
                    </Card>

                    <Card className="p-10 border-t-4 border-[var(--accent-secondary)] h-full" hoverEffect={false}>
                        <div className="flex items-center gap-6 mb-6">
                            <div className="p-4 bg-yellow-50 rounded-full text-[var(--accent-secondary)]">
                                <Eye size={40} />
                            </div>
                            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t('about.vision')}</h2>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            {t('about.visionDesc')}
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Infrastructure */}
            <Section className="bg-[var(--bg-secondary)]" pattern={true}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{t('about.infra')}</h2>
                    <p className="text-[var(--text-secondary)]">{t('about.infraDesc')}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center p-8 hover:bg-white transition-colors" noPadding={true}>
                        <div className="p-8">
                            <div className="bg-[var(--bg-primary)] p-6 rounded-full inline-block mb-6 shadow-inset">
                                <Cpu size={40} className="text-[var(--accent-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Modern Technology</h3>
                            <p className="text-[var(--text-secondary)]">Equipped with the latest automated machinery for precision grading and processing.</p>
                        </div>
                    </Card>
                    <Card className="text-center p-8 hover:bg-white transition-colors" noPadding={true}>
                        <div className="p-8">
                            <div className="bg-[var(--bg-primary)] p-6 rounded-full inline-block mb-6">
                                <Truck size={40} className="text-[var(--accent-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Efficient Logistics</h3>
                            <p className="text-[var(--text-secondary)]">Streamlined supply chain management ensuring timely delivery across domestic and international markets.</p>
                        </div>
                    </Card>
                    <Card className="text-center p-8 hover:bg-white transition-colors" noPadding={true}>
                        <div className="p-8">
                            <div className="bg-[var(--bg-primary)] p-6 rounded-full inline-block mb-6">
                                <Award size={40} className="text-[var(--accent-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Quality Labs</h3>
                            <p className="text-[var(--text-secondary)]">In-house quality testing laboratories to ensure every batch meets rigorous standards.</p>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Sustainability / Values */}
            <Section>
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=800&q=80"
                                alt="Sustainability"
                                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <Leaf className="mb-2" size={32} />
                                    <h3 className="text-2xl font-bold">Nature First</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="text-[var(--accent-primary)] uppercase tracking-widest font-bold text-sm mb-2 block">{t('about.sustainability')}</span>
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{t('about.susTitle')}</h2>
                        <p className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed">
                            {t('about.susDesc')}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] rounded-lg">
                                <div className="bg-white p-2 rounded-full text-green-600"><Leaf size={20} /></div>
                                <span className="font-medium">Utilization of Groundnut Husk for Biofuel Briquettes</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] rounded-lg">
                                <div className="bg-white p-2 rounded-full text-green-600"><Leaf size={20} /></div>
                                <span className="font-medium">Zero-waste Cotton Ginning process</span>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] rounded-lg">
                                <div className="bg-white p-2 rounded-full text-green-600"><Leaf size={20} /></div>
                                <span className="font-medium">Supporting local farmers with fair procurement</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
