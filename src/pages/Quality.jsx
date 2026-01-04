import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Award, FileCheck, Star } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import labImg from '../assets/lab_quality.png';
import { useTranslation } from '../context/i18n';

const Quality = () => {
    const { t } = useTranslation();

    const features = [
        { title: t('quality.features.lab.title'), desc: t('quality.features.lab.desc') },
        { title: t('quality.features.sorting.title'), desc: t('quality.features.sorting.desc') },
        { title: t('quality.features.hygiene.title'), desc: t('quality.features.hygiene.desc') },
        { title: t('quality.features.audits.title'), desc: t('quality.features.audits.desc') }
    ];

    return (
        <>
            <Helmet>
                <title>Quality Assurance & Certifications | Sri Balaji Oil Mill Jadcherla</title>
                <meta name="description" content="Sri Balaji Group maintains highest quality standards at our Jadcherla oil mill and Manyamkonda cotton ginning facility. In-house quality labs, certified processes, and rigorous testing." />
                <meta name="keywords" content="quality oil mill Jadcherla, certified cotton ginning Telangana, agro processing standards, Mahbubnagar quality products, trusted manufacturer" />
                <link rel="canonical" href="https://sri-balaji-mill.vercel.app/quality" />
            </Helmet>
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <span className="text-[var(--accent-primary)] uppercase tracking-widest font-bold text-sm mb-4 block">{t('quality.tag')}</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{t('quality.title')}</h1>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">{t('quality.subtitle')}</p>
                </div>
            </div>

            <Section>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img
                                src={labImg}
                                alt="Quality Lab"
                                className="rounded-2xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--accent-secondary)] rounded-full opacity-20 blur-3xl z-0"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[var(--accent-primary)] rounded-full opacity-20 blur-3xl z-0"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{t('quality.promiseTitle')}</h2>
                        <p className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed">
                            {t('quality.promiseDesc')}
                        </p>
                        <div className="space-y-6">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle className="text-[var(--accent-primary)]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-[var(--text-primary)]">{item.title}</h4>
                                        <p className="text-[var(--text-secondary)]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-[var(--bg-secondary)]" pattern={true}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>{t('quality.certTitle')}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Card className="text-center p-8 border-none bg-white shadow-lg hover:shadow-xl transition-all" hoverEffect={true}>
                        <Award className="mx-auto mb-6 text-red-500" size={56} />
                        <h3 className="font-bold text-xl mb-2">{t('quality.certs.iso.title')}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">{t('quality.certs.iso.sub')}</p>
                    </Card>
                    <Card className="text-center p-8 border-none bg-white shadow-lg hover:shadow-xl transition-all" hoverEffect={true}>
                        <Shield className="mx-auto mb-6 text-green-500" size={56} />
                        <h3 className="font-bold text-xl mb-2">{t('quality.certs.fssai.title')}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">{t('quality.certs.fssai.sub')}</p>
                    </Card>
                    <Card className="text-center p-8 border-none bg-white shadow-lg hover:shadow-xl transition-all" hoverEffect={true}>
                        <FileCheck className="mx-auto mb-6 text-blue-500" size={56} />
                        <h3 className="font-bold text-xl mb-2">{t('quality.certs.govt.title')}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">{t('quality.certs.govt.sub')}</p>
                    </Card>
                    <Card className="text-center p-8 border-none bg-white shadow-lg hover:shadow-xl transition-all" hoverEffect={true}>
                        <Star className="mx-auto mb-6 text-yellow-500" size={56} />
                        <h3 className="font-bold text-xl mb-2">{t('quality.certs.star.title')}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">{t('quality.certs.star.sub')}</p>
                    </Card>
                </div>
            </Section>
        </>
    );
};

export default Quality;
