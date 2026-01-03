import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, noPadding = false, ...props }) => {
    // smaller default padding for mobile-first
    const defaultPadding = noPadding ? '0' : '20px';

    return (
        <motion.article
            aria-label="card"
            whileHover={hoverEffect ? { y: -6, boxShadow: 'var(--shadow-lg)' } : {}}
            transition={{ type: "spring", stiffness: 280 }}
            className={`rounded-2xl overflow-hidden glass ${className}`}
            style={{
                boxShadow: 'var(--shadow-md)',
                padding: defaultPadding
            }}
            {...props}
        >
            {children}
        </motion.article>
    );
};

export default Card;
