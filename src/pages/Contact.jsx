import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useTranslation } from '../context/i18n';

const Contact = () => {
    const { t } = useTranslation();
    const oilMillMap = 'https://maps.app.goo.gl/KkCz75CstNW7k2HC7';
    const industriesMap = 'https://maps.app.goo.gl/DXvceUEow9mMn8JP6';

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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <a href={oilMillMap} target="_blank" rel="noopener noreferrer" title="Open location" aria-label="Open location" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><MapPin size={24} /></div>
                                </a>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('contact.factoryAddr')}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">Near Railway Station,<br />Jadcherla, Telangana</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><Phone size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Ramesh Chand Jhawar", num: "+91 94407 47339" },
                                            { name: "Hari Prasad Jhawar", num: "+91 94401 59617" },
                                            { name: "Sham Sundar Jhawar", num: "+91 94418 09781" },
                                            { name: "Omprakash Jhawar", num: "+91 94405 76611" }
                                        ].map((contact, idx) => (
                                            <a key={idx} href={`tel:${contact.num.replace(/\s+/g, '')}`} className="flex flex-wrap gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group cursor-pointer">
                                                <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{contact.num}</span>
                                                <span>-</span>
                                                <span>{contact.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-3 bg-green-50 rounded-lg h-fit text-[var(--accent-primary)]"><Mail size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <a href="mailto:shribalajioilmill@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors break-all">shribalajioilmill@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 lg:h-full min-h-[300px] bg-gray-100 rounded-xl overflow-hidden border border-[var(--border-color)]">
                            <iframe
                                src="https://maps.google.com/maps?q=Near+Railway+Station,+Jadcherla,+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sri Balaji Oil Mill Map"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section id="balaji-industries-contact" className="mb-8 bg-[var(--bg-secondary)]">
                <Card className="h-full border-t-4 border-[var(--accent-secondary)]" hoverEffect={false}>
                    <h2 className="text-3xl font-bold mb-8 text-[var(--accent-secondary)]" style={{ fontFamily: 'Playfair Display, serif' }}>Balaji Industries</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <a href={industriesMap} target="_blank" rel="noopener noreferrer" title="Open location" aria-label="Open location" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><MapPin size={24} /></div>
                                </a>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('contact.factoryAddr')}</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">Appaipally Village,<br />Mahabubnagar, Telangana</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><Phone size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Suresh chand Jhawar", num: "+91 98490 82162" },
                                            { name: "Omprakash Jhawar", num: "+91 94405 76611" }
                                        ].map((contact, idx) => (
                                            <a key={idx} href={`tel:${contact.num.replace(/\s+/g, '')}`} className="flex flex-wrap gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors group cursor-pointer">
                                                <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)] transition-colors">{contact.num}</span>
                                                <span>-</span>
                                                <span>{contact.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-3 bg-orange-50 rounded-lg h-fit text-[var(--accent-secondary)]"><Mail size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <a href="mailto:balajiindustriesjhawar@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors break-all">balajiindustriesjhawar@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-64 lg:h-full min-h-[300px] bg-gray-100 rounded-xl overflow-hidden border border-[var(--border-color)]">
                            <iframe
                                src="https://maps.google.com/maps?q=Appaipally+Village,+Mahabubnagar,+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Balaji Industries Map"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section className="py-2 mb-20">
                <div className="glass p-8 rounded-2xl border border-[var(--glass-border)] max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to partner with us?</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="https://wa.me/919440576611?text=Hello%20Sri%20Balaji%20Group,%20I%20am%20interested%20in%20your%20products." target="_blank" rel="noopener noreferrer">
                            <Button style={{ background: 'var(--whatsapp)', color: 'var(--on-whatsapp)' }} className="w-full md:w-auto px-8 shadow-lg shadow-none border-none">
                                <MessageCircle className="mr-2" /> Chat on WhatsApp
                            </Button>
                        </a>
                        <a href="mailto:shribalajioilmill@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Sri%20Balaji%20Group">
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
