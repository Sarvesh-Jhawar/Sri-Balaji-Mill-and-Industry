import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Truck, Settings, Filter, Layers, CheckCircle, Info } from 'lucide-react';
import arrivalImg from '../assets/process-images/Arrival-&-Grading-cotton.webp';
import ginningImg from '../assets/process-images/Ginning-cotton.jpg';
import preCleaningImg from '../assets/process-images/Pre-Cleaning-cotton.webp';
import pressingImg from '../assets/process-images/Pressing-cotton.jpg';
import balingImg from '../assets/process-images/Baling-cotton.jpg';

import procurementImg from '../assets/process-images/Procurement.jpg';
import cleaningGroundnutImg from '../assets/process-images/Cleaning-groundnut.jpg';
import sortingGroundnutImg from '../assets/process-images/sorting-groundnut.webp';
import sizeGradingImg from '../assets/process-images/Size-Grading-groundnut.webp';
import packingGroundnutImg from '../assets/process-images/Packing-groundnut.avif';
import dispatchGroundnutImg from '../assets/process-images/Dispatch-groundnut.jpg';
import Section from '../components/UI/Section';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';
import { useTranslation } from '../context/i18n';

const TimelineItem = ({ number, title, desc, icon, image, isLeft, onView }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            ref={ref}
            className={`flex flex-col md:flex-row items-center w-full mb-12 relative ${isLeft ? 'md:flex-row-reverse' : ''
                }`}
        >
            {/* Spacer for zig-zag */}
            <div className="hidden md:block md:w-5/12" />

            {/* Center Dot */}
            <div className="z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full 
                bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary-light)] 
                text-white shadow-lg border-4 border-[var(--bg-primary)]">
                <span className="text-xs font-bold">{number}</span>
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="w-full md:w-5/12 glass rounded-xl border border-[var(--glass-border)]
                hover:border-[var(--accent-primary)] transition-all p-4 md:p-5 min-h-[165px]"
            >
                <div className="flex flex-col sm:flex-row gap-5 h-full items-start">
                    {/* Image Column - Fixed Size Thumbnail */}
                    {image && (
                        <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm border border-[var(--glass-border)] w-[140px] h-[105px] md:w-[180px] md:h-[135px]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content Column */}
                    <div className="flex flex-col flex-grow min-w-0 self-stretch">
                        {/* Title & Icon */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="text-[var(--accent-primary)] p-1.5 bg-[var(--bg-primary)] rounded-md shadow-sm">
                                {React.cloneElement(icon, { size: 18 })}
                            </div>
                            <h3
                                className="text-lg font-bold truncate"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                {title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                            {desc}
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-end mt-auto">
                            <Button
                                variant="outline"
                                onClick={() => onView && onView({ title, desc })}
                                className="text-xs py-1.5 px-3 h-auto"
                            >
                                View Details <Info size={12} className="ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Process = () => {
    const { t } = useTranslation();
    const [selectedStep, setSelectedStep] = React.useState(null);
    const groundnutSteps = [
        { title: t('process.steps.procurement.title'), desc: t('process.steps.procurement.desc'), icon: <Truck size={20} />, image: procurementImg },
        { title: t('process.steps.cleaning.title'), desc: t('process.steps.cleaning.desc'), icon: <Filter size={20} />, image: cleaningGroundnutImg },
        { title: t('process.steps.sorting.title'), desc: t('process.steps.sorting.desc'), icon: <Layers size={20} />, image: sortingGroundnutImg },
        { title: t('process.steps.grading.title'), desc: t('process.steps.grading.desc'), icon: <Settings size={20} />, image: sizeGradingImg },
        { title: t('process.steps.packing.title'), desc: t('process.steps.packing.desc'), icon: <Package size={20} />, image: packingGroundnutImg },
        { title: t('process.steps.dispatch.title'), desc: t('process.steps.dispatch.desc'), icon: <Truck size={20} />, image: dispatchGroundnutImg }
    ];

    const cottonSteps = [
        { title: t('process.steps.arrival.title'), desc: t('process.steps.arrival.desc'), icon: <Truck size={20} />, image: arrivalImg },
        { title: t('process.steps.preClean.title'), desc: t('process.steps.preClean.desc'), icon: <Filter size={20} />, image: preCleaningImg },
        { title: t('process.steps.ginning.title'), desc: t('process.steps.ginning.desc'), icon: <Settings size={20} />, image: ginningImg },
        { title: t('process.steps.pressing.title'), desc: t('process.steps.pressing.desc'), icon: <Layers size={20} />, image: pressingImg },
        { title: t('process.steps.baling.title'), desc: t('process.steps.baling.desc'), icon: <Package size={20} />, image: balingImg }
    ];

    return (
        <>
            <div className="relative pt-32 pb-20 bg-[var(--bg-secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="container text-center relative z-10">
                    <span className="text-[var(--accent-secondary)] uppercase tracking-widest font-bold text-sm mb-4 block">{t('process.tag')}</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{t('process.title')}</h1>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">{t('process.subtitle')}</p>
                </div>
            </div>

            {/* Groundnut Process */}
            <Section pattern={true}>
                <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>{t('process.groundnutTitle')}</h2>
                <div className="relative wrap overflow-hidden p-4 h-full">
                    <div className="hidden md:block absolute border-opacity-20 border-[var(--accent-primary)] h-full border-l-2" style={{ left: '50%' }}></div>
                    {groundnutSteps.map((step, idx) => (
                        <TimelineItem
                            key={idx}
                            number={idx + 1}
                            title={step.title}
                            desc={step.desc}
                            icon={step.icon}
                            image={step.image}
                            isLeft={idx % 2 === 0}
                            onView={(data) => setSelectedStep({ ...data, stepIndex: idx, group: 'groundnut' })}
                        />
                    ))}
                </div>
            </Section>

            {/* Cotton Process */}
            <Section className="bg-[var(--bg-secondary)]">
                <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>{t('process.cottonTitle')}</h2>
                <div className="relative wrap overflow-hidden p-4 h-full">
                    <div className="hidden md:block absolute border-opacity-20 border-[var(--accent-secondary)] h-full border-l-2" style={{ left: '50%' }}></div>
                    {cottonSteps.map((step, idx) => (
                        <TimelineItem
                            key={idx}
                            number={idx + 1}
                            title={step.title}
                            desc={step.desc}
                            icon={step.icon}
                            image={step.image}
                            isLeft={idx % 2 !== 0}
                            onView={(data) => setSelectedStep({ ...data, stepIndex: idx, group: 'cotton' })}
                        />
                    ))}
                </div>
            </Section>

            <Modal isOpen={!!selectedStep} onClose={() => setSelectedStep(null)} title={selectedStep?.title}>
                {selectedStep && (
                    <div>
                        <p className="text-[var(--text-secondary)]" style={{ marginBottom: 12 }}>{selectedStep.desc}</p>
                        <div style={{ textAlign: 'right' }}>
                            <Button variant="primary" onClick={() => setSelectedStep(null)}>{t('process.btnClose')}</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Process;
