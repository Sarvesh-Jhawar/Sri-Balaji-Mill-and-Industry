import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { MapPin } from 'lucide-react';
import { useTranslation } from '../context/i18n';
import oilImg from '../assets/oil_process.png';
import cottonImg from '../assets/product-images/cotton_process.png';

const Home = () => {
    const { t } = useTranslation();

    // External Google Maps links provided by user
    const oilMillMap = 'https://maps.app.goo.gl/KkCz75CstNW7k2HC7';
    const industriesMap = 'https://maps.app.goo.gl/KFLFYpMg3KF7eUio9?g_st=aw';

    return (
        <>
            <Helmet>
                <title>Sri Balaji Group | Best Oil Mill in Jadcherla & Cotton Ginning Manyamkonda</title>
                <meta name="description" content="Sri Balaji Group is a leading manufacturer of Castor oil, Cotton seed oil, and Biofuel Briquettes in Jadcherla. Premium Cotton Ginning and Pressing services near Manyamkonda, Mahbubnagar." />
                <meta name="keywords" content="Sri Balaji Oil Mill Jadcherla, Balaji Industries Manyamkonda, oil mill in Mahbubnagar, cotton ginning Telangana, castor oil manufacturer Jadcherla, groundnut seed supplier" />
                <link rel="canonical" href="https://sri-balaji-mill.vercel.app/" />
            </Helmet>
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '100px 0 20px 0' }}>
                <div className="home-inner">
                    <header style={{ textAlign: 'center', marginBottom: '28px' }}>
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', marginBottom: '6px' }}>{t('home.welcome')}</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>{t('home.chooseDivision')}</p>
                    </header>

                    <main style={{ display: 'grid', gap: '16px' }}>
                        <Link to="/divisions#oil-mill" aria-label={t('home.divisions.oilMill')}>
                            <div className="glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '18px', borderRadius: '14px' }}>
                                <img src={oilImg} alt={t('home.divisions.oilMill')} style={{ width: '88px', height: '88px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.2 }}>{t('home.divisions.oilMill')}</h2>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', marginTop: '6px' }}>{t('home.divisions.oilMillDesc')}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '14px' }}>
                                        <Button variant="primary" className="md:w-auto" style={{ padding: '8px 16px', fontSize: '14px' }}>{t('buttons.explore')}</Button>
                                        <a
                                            href={oilMillMap}
                                            onClick={(e) => { e.stopPropagation(); /* prevent Link navigation */ }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={t('home.viewLocation')}
                                            aria-label={t('home.viewLocation')}
                                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, border: '1px solid var(--border-color)', color: 'var(--text-primary)', background: 'transparent' }}
                                        >
                                            <MapPin size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/divisions#balaji-industries" aria-label={t('home.divisions.industries')}>
                            <div className="glass" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '18px', borderRadius: '14px' }}>
                                <img src={cottonImg} alt={t('home.divisions.industries')} style={{ width: '88px', height: '88px', objectFit: 'cover', borderRadius: '10px' }} />
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.2 }}>{t('home.divisions.industries')}</h2>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', marginTop: '6px' }}>{t('home.divisions.industriesDesc')}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '14px' }}>
                                        <Button variant="primary" className="md:w-auto" style={{ padding: '8px 16px', fontSize: '14px' }}>{t('buttons.explore')}</Button>
                                        <a
                                            href={industriesMap}
                                            onClick={(e) => { e.stopPropagation(); }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={t('home.viewLocation')}
                                            aria-label={t('home.viewLocation')}
                                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, border: '1px solid var(--border-color)', color: 'var(--text-primary)', background: 'transparent' }}
                                        >
                                            <MapPin size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div style={{ textAlign: 'center', marginTop: '6px' }}>
                            <Link to="/contact" style={{ color: 'var(--accent-primary)' }}>{t('home.contactSales')}</Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;

