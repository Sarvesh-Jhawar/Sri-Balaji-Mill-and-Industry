import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Modal from '../UI/Modal';
import { useTranslation } from '../../context/i18n';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const { t } = useTranslation();

    return (
        <footer role="contentinfo" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '40px', paddingBottom: '28px', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-2xl font-bold flex flex-col">
                            <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>SRI BALAJI</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '2px' }}>GROUP</span>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Excellence in Agro Processing & Cotton Manufacturing. quality products, sustainable practices, and trusted partnerships since inception.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            {['About Us', 'Divisions', 'Quality', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'var(--text-secondary)' }} className="hover:text-[var(--accent-primary)] transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Oil Mill */}
                    <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact: Sri Balaji Oil Mill</h3>
                        <div className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            <a href="https://maps.app.goo.gl/KkCz75CstNW7k2HC7" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'inline-flex', gap: 6, alignItems: 'center' }} aria-label="Open Sri Balaji Oil Mill location">
                                <span>Near Railway Station, Jadcherla, Telangana</span>
                                <ExternalLink size={14} className="flex-shrink-0" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-1 mt-1">
                            {[
                                { name: "Ramesh Chand Jhawar", num: "+91 94407 47339" },
                                { name: "Hari Prasad Jhawar", num: "+91 94401 59617" },
                                { name: "Sham Sundar Jhawar", num: "+91 94418 09781" },
                                { name: "Omprakash Jhawar", num: "+91 94405 76611" }
                            ].map((contact, idx) => (
                                <div key={idx} className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                    <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <a href={`tel:${contact.num.replace(/\s+/g, '')}`} style={{ color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{contact.num}</a>
                                        <span className="text-xs opacity-75">-</span>
                                        <span className="text-sm opacity-90 whitespace-nowrap">{contact.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mt-1" style={{ color: 'var(--text-secondary)' }}>
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            <a href="mailto:shribalajioilmill@gmail.com" style={{ color: 'var(--text-secondary)' }} className="break-all">shribalajioilmill@gmail.com</a>
                        </div>
                    </div>

                    {/* Contact Info - Balaji Industries */}
                    <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact: Balaji Industries</h3>
                        <div className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                            <a href="https://maps.app.goo.gl/DXvceUEow9mMn8JP6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'inline-flex', gap: 6, alignItems: 'center' }} aria-label="Open Balaji Industries location">
                                <span>Appaipally Village,Mahabubnagar,Telangana</span>
                                <ExternalLink size={14} className="flex-shrink-0" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-1 mt-1">
                            {[
                                { name: "Suresh chand Jhawar", num: "+91 98490 82162" },
                                { name: "Omprakash Jhawar", num: "+91 94405 76611" }
                            ].map((contact, idx) => (
                                <div key={idx} className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                    <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <a href={`tel:${contact.num.replace(/\s+/g, '')}`} style={{ color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{contact.num}</a>
                                        <span className="text-xs opacity-75">-</span>
                                        <span className="text-sm opacity-90 whitespace-nowrap">{contact.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mt-1" style={{ color: 'var(--text-secondary)' }}>
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                            <a href="mailto:balajiindustriesjhawar@gmail.com" style={{ color: 'var(--text-secondary)' }} className="break-all">balajiindustriesjhawar@gmail.com</a>
                        </div>
                    </div>
                </div>      {/* Removed Follow Us section per request */}

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', textAlign: 'center', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <p>&copy; {currentYear} Sri Balaji Group. All rights reserved.</p>
                    <button
                        onClick={() => setShowDisclaimer(true)}
                        className="text-xs hover:text-[var(--accent-primary)] underline transition-colors opacity-75 hover:opacity-100"
                    >
                        {t('disclaimer.title') || 'Disclaimer'}
                    </button>
                </div>
            </div>

            <Modal isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} title={t('disclaimer.title') || 'Disclaimer'}>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                    {t('disclaimer.text') || 'Images used on this website are for representation purposes only and may be sourced from the internet. All rights belong to their respective owners.'}
                </p>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setShowDisclaimer(false)}
                        className="px-4 py-2 bg-[var(--accent-primary)] text-white rounded-lg hover:brightness-110 transition-all font-medium text-sm"
                    >
                        {t('process.btnClose') || 'Close'}
                    </button>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
