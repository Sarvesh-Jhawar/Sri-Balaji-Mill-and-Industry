import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Factory, Info, CheckCircle, Package } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../context/i18n';

import oilImg from '../assets/oil_process.png';
import cottonImg from '../assets/product-images/cotton_process.png';
import biofuelImg from '../assets/product-images/biofuel-brigade.webp';
import castorImg from '../assets/product-images/castord-oil-image.jpg';
import cottonSeedImg from '../assets/product-images/cotton-seed-oil.jpg';
import groundnutImg from '../assets/product-images/ground-nut.jpg';
import lintImg from '../assets/product-images/Lint-Cotton.jpg';
import maizeImg from '../assets/product-images/maize-cattle-feed.jpeg';
import cottonGinningImg from '../assets/product-images/Cotton-Ginning-img.jpg';

const Divisions = () => {
    const { t } = useTranslation();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Smooth-scroll to hash when location changes
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // small timeout to wait for layout
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset;
                    const navbarOffset = 72; // approximate header height
                    window.scrollTo({ top: Math.max(0, top - navbarOffset), behavior: 'smooth' });
                }
            }, 60);
        } else {
            // if no hash, scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const oilMillProducts = [
        {
            id: 'castor-oil',
            name: t('divisions.products.castor.name'),
            desc: t('divisions.products.castor.desc'),
            details: t('divisions.products.castor.details'),
            specs: t('divisions.products.castor.specs', { returnObjects: true }),
            image: castorImg
        },
        {
            id: 'cotton-oil',
            name: t('divisions.products.cotton.name'),
            desc: t('divisions.products.cotton.desc'),
            details: t('divisions.products.cotton.details'),
            specs: t('divisions.products.cotton.specs', { returnObjects: true }),
            image: cottonSeedImg
        },
        {
            id: 'groundnut',
            name: t('divisions.products.groundnut.name'),
            desc: t('divisions.products.groundnut.desc'),
            details: t('divisions.products.groundnut.details'),
            specs: t('divisions.products.groundnut.specs', { returnObjects: true }),
            image: groundnutImg
        },
        {
            id: 'briquettes',
            name: t('divisions.products.briquettes.name'),
            desc: t('divisions.products.briquettes.desc'),
            details: t('divisions.products.briquettes.details'),
            specs: t('divisions.products.briquettes.specs', { returnObjects: true }),
            image: biofuelImg
        },
        {
            id: 'maize',
            name: t('divisions.products.maize.name'),
            desc: t('divisions.products.maize.desc'),
            details: t('divisions.products.maize.details'),
            specs: t('divisions.products.maize.specs', { returnObjects: true }),
            image: maizeImg
        }
    ];

    const industryProducts = [
        {
            id: 'ginning',
            name: t('divisions.products.ginning.name'),
            desc: t('divisions.products.ginning.desc'),
            details: t('divisions.products.ginning.details'),
            specs: t('divisions.products.ginning.specs', { returnObjects: true }),
            image: cottonGinningImg
        },
        {
            id: 'lint',
            name: t('divisions.products.lint.name'),
            desc: t('divisions.products.lint.desc'),
            details: t('divisions.products.lint.details'),
            specs: t('divisions.products.lint.specs', { returnObjects: true }),
            image: lintImg
        }
    ];

    return (
        <>
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{t('divisions.title')}</h1>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">{t('divisions.subtitle')}</p>
                </div>
            </div>

            {/* Division 1: Oil Mill */}
            <Section id="oil-mill">
                <div className="flex items-center gap-6 mb-12">
                    <div className="p-4 bg-green-100 rounded-2xl text-[var(--accent-primary)] shadow-inner">
                        <Droplets size={40} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t('divisions.oilMill.title')}</h2>
                        <p className="text-[var(--text-secondary)] text-lg">{t('divisions.oilMill.desc')}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {oilMillProducts.map(product => (
                        <Card key={product.id} className="flex flex-col h-full p-0 group" noPadding={true}>
                            <div className="h-64 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                                <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">{product.desc}</p>
                                <Button variant="outline" onClick={() => setSelectedProduct(product)} className="w-full mt-auto">
                                    {t('divisions.btnView')} <Info size={16} />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Division 2: Industries */}
            <Section id="balaji-industries" className="bg-[var(--bg-secondary)]" pattern={true}>
                <div className="flex items-center gap-6 mb-12">
                    <div className="p-4 bg-orange-100 rounded-2xl text-[var(--accent-secondary)] shadow-inner">
                        <Factory size={40} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{t('divisions.industries.title')}</h2>
                        <p className="text-[var(--text-secondary)] text-lg">{t('divisions.industries.desc')}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industryProducts.map(product => (
                        <Card key={product.id} className="flex flex-col h-full p-0 group" noPadding={true}>
                            <div className="h-64 overflow-hidden relative">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                                <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">{product.desc}</p>
                                <Button variant="outline" onClick={() => setSelectedProduct(product)} className="w-full mt-auto">
                                    {t('divisions.btnView')} <Info size={16} />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Product Details Modal */}
            <Modal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                title={selectedProduct?.name}
            >
                {selectedProduct && (
                    <div className="flex flex-col gap-6">
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-80 object-cover rounded-xl shadow-md" />
                        <div>
                            <h4 className="font-bold text-xl mb-3">{t('divisions.modalDesc')}</h4>
                            <p className="text-[var(--text-secondary)] mb-6 text-lg leading-relaxed">{selectedProduct.details}</p>

                            <h4 className="font-bold text-xl mb-3">{t('divisions.modalSpecs')}</h4>
                            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl">
                                <ul className="space-y-3">
                                    {selectedProduct.specs.map((spec, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[var(--text-primary)] font-medium">
                                            <CheckCircle size={20} className="text-[var(--accent-primary)]" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Button variant="primary" className="w-full" onClick={() => setSelectedProduct(null)}>
                            {t('divisions.btnClose')}
                        </Button>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Divisions;
