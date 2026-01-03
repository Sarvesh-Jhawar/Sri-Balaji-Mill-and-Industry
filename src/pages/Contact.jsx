import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useTranslation } from '../context/i18n';

const Contact = () => {
    const { t } = useTranslation();
    const oilMillMap = 'https://maps.app.goo.gl/KkCz75CstNW7k2HC7';
    const industriesMap = 'https://maps.app.goo.gl/KFLFYpMg3KF7eUio9?g_st=aw';
    return (
        <>
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <span className="text-[var(--accent-primary)] uppercase tracking-widest font-bold text-sm mb-4 block">{t('contact.getInTouch')}</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{t('contact.title')}</h1>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">{t('contact.subtitle')}</p>
                </div>
            </div>

            <Section id="oil-mill-contact" className="mb-8">
                <Card className="h-full border-t-4 border-[var(--accent-primary)]" hoverEffect={false}>
                    <h2 className="text-3xl font-bold mb-8 text-[var(--accent-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>Sri Balaji Oil Mill</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <a href={oilMillMap} target="_blank" rel="noopener noreferrer" title="Open location" aria-label="Open location" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><MapPin size={24} /></div>
                            </a>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{t('contact.factoryAddr')}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">No. 123, Industrial Estate Phase 2,<br />Rajkot-Jamnagar Highway,<br />Rajkot, Gujarat - 360001</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><Phone size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone</h3>
                                <p className="text-[var(--text-secondary)]">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><Mail size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-[var(--text-secondary)]">oilmill@sribalajigroup.com</p>
                            </div>
                        </div>

                        <div className="h-56 bg-gray-100 rounded-xl overflow-hidden border border-[var(--border-color)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.6820202687!2d70.7512554!3d22.2734719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdfad%3A0x76dd1faa7a53fceb!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section id="balaji-industries-contact" className="mb-8 bg-[var(--bg-secondary)]">
                <Card className="h-full border-t-4 border-[var(--accent-secondary)]" hoverEffect={false}>
                    <h2 className="text-3xl font-bold mb-8 text-[var(--accent-secondary)]" style={{ fontFamily: 'Playfair Display, serif' }}>Balaji Industries</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <a href={industriesMap} target="_blank" rel="noopener noreferrer" title="Open location" aria-label="Open location" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><MapPin size={24} /></div>
                            </a>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{t('contact.factoryAddr')}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">Plot 456, GIDC Industrial Park,<br />Gondal Road,<br />Rajkot, Gujarat - 360004</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><Phone size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone</h3>
                                <p className="text-[var(--text-secondary)]">+91 98765 00000</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><Mail size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-[var(--text-secondary)]">industries@sribalajigroup.com</p>
                            </div>
                        </div>

                        <div className="h-56 bg-gray-100 rounded-xl overflow-hidden border border-[var(--border-color)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.6820202687!2d70.7512554!3d22.2734719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdfad%3A0x76dd1faa7a53fceb!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section className="py-2 mb-20">
                <div className="glass p-8 rounded-2xl border border-[var(--glass-border)] max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to partner with us?</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="https://wa.me/919876543210?text=Hello%20Sri%20Balaji%20Group,%20I%20am%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer">
                            <Button style={{ background: 'var(--whatsapp)', color: 'var(--on-whatsapp)' }} className="w-full md:w-auto px-8 shadow-lg shadow-none border-none">
                                <MessageCircle className="mr-2" /> Chat on WhatsApp
                            </Button>
                        </a>
                        <a href="mailto:info@sribalajigroup.com?subject=Business%20Enquiry%20%E2%80%93%20Sri%20Balaji%20Group">
                            <Button variant="outline" className="w-full md:w-auto px-8">
                                <Mail className="mr-2" /> Send Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
