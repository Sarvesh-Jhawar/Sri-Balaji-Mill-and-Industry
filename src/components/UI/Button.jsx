import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', ariaLabel, ...props }) => {
    const baseStyles = "rounded-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 uppercase text-sm";

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-primary-light) 100%)',
            color: 'var(--on-accent)',
            border: 'none',
            boxShadow: '0 6px 18px rgba(27, 67, 50, 0.18)'
        },
        secondary: {
            background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-secondary-dark) 100%)',
            color: 'var(--text-primary)',
            border: 'none',
            boxShadow: '0 6px 18px rgba(212, 163, 115, 0.14)'
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)'
        }
    };

    // Mobile-first touch target sizing
    const touchStyle = {
        minHeight: 44,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: '0.95rem'
    };

    return (
        <motion.button
            type={type}
            aria-label={ariaLabel}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{ ...variants[variant], ...touchStyle }}
            className={`${baseStyles} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
