import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer role="contentinfo" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '40px', paddingBottom: '28px', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

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
                    <div>
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact: Oil Mill</h3>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <MapPin size={16} className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            <a href="https://maps.app.goo.gl/KkCz75CstNW7k2HC7" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'inline-flex', gap: 6, alignItems: 'center' }} aria-label="Open Sri Balaji Oil Mill location">
                                <span>Industrial Area, Rajkot, Gujarat</span>
                                <ExternalLink size={14} className="flex-shrink-0" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            <a href="tel:+919876543210" style={{ color: 'var(--text-secondary)' }}>+91 98765 43210</a>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            <a href="mailto:oilmill@sribalajigroup.com" style={{ color: 'var(--text-secondary)' }} className="break-all">oilmill@sribalajigroup.com</a>
                        </div>
                    </div>

                    {/* Contact Info - Balaji Industries */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact: Industries</h3>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <MapPin size={16} className="flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                            <a href="https://maps.app.goo.gl/DXvceUEow9mMn8JP6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'inline-flex', gap: 6, alignItems: 'center' }} aria-label="Open Balaji Industries location">
                                <span>GIDC Industrial Park, Rajkot, Gujarat</span>
                                <ExternalLink size={14} className="flex-shrink-0" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                            <a href="tel:+919876500000" style={{ color: 'var(--text-secondary)' }}>+91 98765 00000</a>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                            <a href="mailto:industries@sribalajigroup.com" style={{ color: 'var(--text-secondary)' }} className="break-all">industries@sribalajigroup.com</a>
                        </div>
                    </div>
                </div>      {/* Removed Follow Us section per request */}

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>&copy; {currentYear} Sri Balaji Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
