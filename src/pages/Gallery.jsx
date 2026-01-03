import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Section from '../components/UI/Section';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', category: 'Factory Exterior' },
        { src: 'https://images.unsplash.com/photo-1565514020176-db792d270387?auto=format&fit=crop&q=80', category: 'Advanced Machinery' },
        { src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80', category: 'Storage Silos' },
        { src: 'https://images.unsplash.com/photo-1605333555214-a90db67104ae?auto=format&fit=crop&q=80', category: 'Cotton Processing' },
        { src: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80', category: 'Oil Extraction Unit' },
        { src: 'https://images.unsplash.com/photo-1595856552636-1c0b39eb38c4?auto=format&fit=crop&q=80', category: 'Logistics & Dispatch' },
    ];

    return (
        <>
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <span className="text-[var(--accent-secondary)] uppercase tracking-widest font-bold text-sm mb-4 block">Visual Tour</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Infrastructure</h1>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">A glimpse into our world-class manufacturing facilities.</p>
                </div>
            </div>

            <Section>
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 mb-6 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center">
                        <ZoomIn size={48} className="text-[var(--accent-primary)] opacity-50" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Coming Soon
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-md">
                        Our gallery is being updated with photos of our facilities and operations. Please check back soon!
                    </p>
                </div>
            </Section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="absolute bottom-8 text-white/80 text-xl font-light tracking-wide">{selectedImage.category}</p>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Gallery;
