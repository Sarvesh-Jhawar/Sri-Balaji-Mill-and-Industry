import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { LanguageProvider } from '../../context/LanguageContext';

const Layout = () => {
    // Theme state - default to light, or persist from localStorage
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    // Apply theme to body
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <LanguageProvider>
            <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main style={{ flex: 1 }}>
                    <Outlet />
                </main>
                <Footer />
                {/* WhatsApp Floating Button */}
                <a
                    href="https://wa.me/919440576611?text=Hello%20Sri%20Balaji%20Group,%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: 'var(--whatsapp)',
                        color: 'var(--on-whatsapp)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        zIndex: 100,
                        cursor: 'pointer'
                    }}
                    aria-label="Chat on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M380.9 97.1C339.3 55.5 283.2 32 223.2 32 100.1 32 0 132.5 0 255.6c0 45 11.7 88.3 33.9 126.8L0 480l106.9-33.9c37.2 20.3 79.7 30.9 122.3 30.9 123.1 0 223.2-100.5 223.2-223.6 0-60-23.5-116.2-65.4-158.3zM223.2 413.6c-36.9 0-73.1-9.9-104.9-28.7l-7.5-4.4-63.4 20.1 21.4-61.8-4.9-7.9c-19.9-31.9-30.4-68.9-30.4-107.9 0-103.6 84.8-188.3 188.8-188.3 50.4 0 98 19.6 133.9 55.3 35.8 35.7 55.4 83.2 55.4 133.2 0 103.9-84.8 188.4-188.3 188.4zM324.3 303.6c-5.2-2.6-30.7-15.1-35.5-16.8-4.8-1.7-8.3-2.6-11.8 2.6-3.5 5.2-13.7 16.8-16.8 20.2-3.1 3.5-6.2 3.9-11.4 1.3-30.9-15.4-51-27.5-71.5-62.1-5.4-9.3 5.4-8.6 15.6-28.6 1.7-3.5.9-6.5-.5-9-1.3-2.6-11.8-28.6-16.2-39.1-4.3-10.2-8.7-8.8-11.8-8.9-3.1-.1-6.7-.1-10.2-.1-3.5 0-9 1.3-13.7 6.5-4.8 5.2-18.3 17.9-18.3 43.7 0 25.9 18.7 50.9 21.3 54.4 2.6 3.5 36.8 56 89.2 76.4 12.4 5.3 22 8.5 29.6 10.9 12.4 3.7 23.7 3.2 32.6 2 9.9-1.3 30.7-12.5 35-24.6 4.3-12.1 4.3-22.4 3-24.6-1.3-2.1-4.8-3.5-10-6.1z" />
                    </svg>
                </a>
            </div>
        </LanguageProvider>
    );
};

export default Layout;
