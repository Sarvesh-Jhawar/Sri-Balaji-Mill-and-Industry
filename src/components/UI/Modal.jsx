import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // set focus to close button for accessibility
            setTimeout(() => closeBtnRef.current?.focus(), 50);
        } else {
            document.body.style.overflow = 'unset';
            // remove focus from close button if necessary
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose && onClose();
        };
        if (isOpen) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="presentation"
                    aria-hidden={!isOpen}
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={title || 'Modal'}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            borderRadius: '12px',
                            maxWidth: '640px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid var(--border-color)',
                            zIndex: 101,
                            color: 'var(--text-primary)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px', borderBottom: '1px solid var(--border-color)' }}>
                            <h3 style={{ margin: 0, fontSize: '1.125rem', fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                            <button ref={closeBtnRef} onClick={onClose} style={{ background: 'none', color: 'var(--text-primary)' }} aria-label="Close modal">
                                <X size={20} />
                            </button>
                        </div>
                        <div style={{ padding: '16px' }}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
