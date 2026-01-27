"use client";
import { motion } from "framer-motion";
import { useLoading } from "../../context/LoadingContext";
import { Scale, FileCheck, AlertCircle, HelpCircle } from "lucide-react";

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

export default function TermsClient() {
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
                        <Scale size={32} />
                    </div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Terms of <span className="text-[#5FC0E0]">Service</span>
                    </motion.h1>
                </div>

                <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12">
                    Welcome to FunCode. By accessing our services, you agree to the following terms and conditions. Please read them carefully to understand your rights and responsibilities.
                </motion.p>

                <div className="space-y-12">
                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <FileCheck className="text-[#5FC0E0]" size={20} />
                            Agreement to Terms
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and FunCode, concerning your access to and use of our website and services.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Scale className="text-[#5FC0E0]" size={20} />
                            Services Provided
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            FunCode provides digital services including but not limited to Web Development, UI/UX Design, App Development, and Video Editing. The specific scope of work for each project will be outlined in a separate service agreement or statement of work.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <AlertCircle className="text-[#5FC0E0]" size={20} />
                            Intellectual Property Rights
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Unless otherwise indicated, the website and its content are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us.
                        </p>
                    </motion.section>

                    <motion.section variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <HelpCircle className="text-[#5FC0E0]" size={20} />
                            Prohibited Activities
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            You may not access or use the site for any purpose other than that for which we make the site available. Prohibited activity includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Systematically retrieving data to create a collection or database.</li>
                            <li>Circumventing, disabling, or interfering with security-related features.</li>
                            <li>Engaging in unauthorized framing of or linking to the site.</li>
                            <li>Using any information obtained from the site to harass or harm another person.</li>
                        </ul>
                    </motion.section>

                    <motion.section variants={fadeInUp} className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50">
                        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                        <p className="text-gray-400">
                            These terms shall be governed by and defined following the laws of Pakistan. FunCode and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </motion.section>
                </div>
            </motion.div>
        </main>
    );
}
