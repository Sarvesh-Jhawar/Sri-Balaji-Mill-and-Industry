import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children, className = '', id = '', pattern = false, ...props }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id={id}
            ref={ref}
            className={`section ${pattern ? 'bg-pattern' : ''} ${className}`}
            {...props}
        >
            <div
                className={pattern ? 'absolute inset-0 opacity-[0.03] pointer-events-none' : 'hidden'}
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="container relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
