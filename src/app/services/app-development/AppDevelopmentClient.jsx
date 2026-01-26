"use client";
import { motion } from "framer-motion";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import { Smartphone, Tablet, Watch, CheckCircle } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function AppDevelopmentClient() {
    return (
        <main>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="pt-40 pb-12 px-4 max-w-7xl mx-auto text-center"
            >
                <motion.div variants={fadeInUp}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        App <span className="text-[#5FC0E0]">Development</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Native and cross-platform mobile applications for iOS and Android, built with performance and user experience in mind.
                    </p>
                </motion.div>
            </motion.section>

            <Section className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Mobile First Solutions
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                        We design and develop mobile applications that provide seamless user
                        experiences across all devices. Whether it's a consumer-facing app
                        or an enterprise solution, we have the expertise.
                    </p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                            <div className="flex items-center mb-4">
                                <Smartphone className="text-[#5FC0E0] mr-3" size={24} />
                                <h3 className="font-bold text-xl">iOS Development</h3>
                            </div>
                            <p className="text-gray-400">
                                High-performance native apps using Swift and SwiftUI for the Apple ecosystem.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                            <div className="flex items-center mb-4">
                                <Smartphone className="text-[#5FC0E0] mr-3" size={24} />
                                <h3 className="font-bold text-xl">Android Development</h3>
                            </div>
                            <p className="text-gray-400">
                                Scalable apps for the world's most popular mobile OS using Kotlin and Jetpack Compose.
                            </p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                            <div className="flex items-center mb-4">
                                <Tablet className="text-[#5FC0E0] mr-3" size={24} />
                                <h3 className="font-bold text-xl">
                                    Cross-Platform Development
                                </h3>
                            </div>
                            <p className="text-gray-400">
                                Leveraging React Native and Flutter for cost-effective development across multiple platforms.
                            </p>
                        </div>
                    </div>

                    <Button href="/get-a-quote">Start Your App Project</Button>
                </div>
                <div className="relative">
                    <div className="bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 overflow-hidden mx-auto max-w-[350px] shadow-lg shadow-[#5FC0E0]/20 relative aspect-[9/18.5]">
                        <Image
                            src="/services/mobile.png"
                            alt="Mobile Application Interface Preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>
        </main>
    );
}
