"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../context/LoadingContext";
import TrueFocus from "./TrueFocus";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [progress, setProgress] = useState(0);
    const { setComplete } = useLoading();

    useEffect(() => {
        setMounted(true);
        // Hide scrollbar globally during loading
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        // Progress counter logic (0 to 100 over 8 seconds)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 80); // ~8 seconds for 100 increments

        // Total duration before vanishing
        const timer = setTimeout(() => {
            setIsLoading(false);
            setComplete(); // Notify site that loading is finished
            // Restore scrollbar
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        }, 11000); // Increased a bit to allow TrueFocus to breathe

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, []);

    // SSR Fallback: This is rendered in the initial HTML to prevent the "flash" of content
    if (!mounted) {
        return (
            <div className="fixed inset-0 z-[100000] bg-[#111111] flex flex-col items-center justify-center text-white overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    html, body { overflow: hidden !important; height: 100% !important; }
                    @keyframes pulse {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.7; }
                    }
                    .pulse { animation: pulse 2s infinite ease-in-out; }
                `}} />
                <div className="flex flex-col items-center">
                    <img src="/imges/logo.png" alt="Loading" className="w-24 h-24 mb-8 opacity-50 pulse" />
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader-overlay"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100000] bg-[#0c0c0c] flex flex-col items-center justify-center text-white overflow-hidden"
                >
                    {/* Extra safety to ensure no scrolling */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        html, body { overflow: hidden !important; position: fixed !important; width: 100% !important; height: 100% !important; }
                    `}} />
                    <div className="relative flex flex-col items-center px-6">
                        {/* Progressive Counter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute -top-32 text-[150px] font-bold text-white/5 font-mono select-none"
                        >
                            {progress}%
                        </motion.div>

                        {/* TrueFocus Animation */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="mb-12 z-10"
                        >
                            <TrueFocus
                                sentence="FUN CODE"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="#5FC0E0"
                                animationDuration={0.5}
                                pauseBetweenAnimations={1}
                            />
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-64 h-[2px] bg-zinc-900 relative overflow-hidden mb-8">
                            <motion.div
                                className="absolute inset-0 bg-[#5FC0E0]"
                                style={{ scaleX: progress / 100, transformOrigin: "left" }}
                            />
                        </div>

                        {/* Dynamic Loading Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] font-medium"
                        >
                            {progress < 30 ? "Initializing..." : progress < 70 ? "Crafting Excellence..." : "Ready to Reveal"}
                        </motion.div>
                    </div>

                    {/* Branding Decorative Element */}
                    <div className="absolute bottom-10 left-10 overflow-hidden">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 0.3 }}
                            transition={{ delay: 2 }}
                            className="text-[10px] tracking-widest uppercase vertical-text font-mono"
                            style={{ writingMode: 'vertical-rl' }}
                        >
                            FunCode Digital Agency © 2026
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
