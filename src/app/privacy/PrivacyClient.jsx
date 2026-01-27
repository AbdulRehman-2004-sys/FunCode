"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import { useLoading } from "../../context/LoadingContext";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function PrivacyClient() {
    const { isComplete } = useLoading();

    return (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.div
                initial="hidden"
                animate={isComplete ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#5FC0E0]/10 rounded-2xl text-[#5FC0E0]">
                        <Shield size={32} />
                    </div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Privacy <span className="text-[#5FC0E0]">Policy</span>
                    </motion.h1>
                </div>

                <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12">
                    Last updated: January 27, 2026. Your privacy is important to us. This policy outlines how FunCode collects, uses, and protects your personal data.
                </motion.p>

                <div className="space-y-12">
                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Eye className="text-[#5FC0E0]" size={20} />
                            Information Collection
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any details regarding your project requirements.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Lock className="text-[#5FC0E0]" size={20} />
                            Data Security
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by authorized personnel who are required to keep the information confidential.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <FileText className="text-[#5FC0E0]" size={20} />
                            Cookies & Analytics
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Our website uses cookies to enhance your browsing experience and analyze site traffic. These small files are stored on your device to help us understand how you interact with our platform, allowing us to improve our services and design.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>To provide and maintain our services</li>
                            <li>To notify you about changes to our services</li>
                            <li>To provide customer support and project updates</li>
                            <li>To gather analysis or valuable information so that we can improve our service</li>
                        </ul>
                    </motion.section>

                    <motion.section variants={fadeInUp} className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
                        <h2 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h2>
                        <p className="text-gray-400 mb-6">
                            If you have any questions about this Privacy Policy or our data practices, please reach out to our dedicated privacy officer.
                        </p>
                        <a
                            href="mailto:privacy@funcode-agency.com"
                            className="inline-block px-6 py-3 bg-[#5FC0E0] text-charcoal font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            Email Privacy Team
                        </a>
                    </motion.section>
                </div>
            </motion.div>
        </main>
    );
}
