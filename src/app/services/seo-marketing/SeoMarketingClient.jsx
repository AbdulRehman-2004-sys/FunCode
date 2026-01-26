"use client";
import { motion } from "framer-motion";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import { Search, TrendingUp, BarChart, Globe, Mail } from "lucide-react";

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

export default function SeoMarketingClient() {
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
                        SEO & <span className="text-[#5FC0E0]">Marketing</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Driving organic traffic, increasing online visibility, and converting visitors into
                        loyal customers through data-driven digital marketing strategies.
                    </p>
                </motion.div>
            </motion.section>

            <Section className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Search Engine Optimization
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Ranking high on search engines is essential for modern business growth. Our
                        SEO strategies ensure your website is visible to the right audience at the right time.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <Search className="text-[#5FC0E0] mr-4 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-bold mb-2">Technical SEO</h4>
                                <p className="text-gray-400">
                                    Optimizing site speed, mobile-friendliness, and crawlability for search engines.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <TrendingUp className="text-[#5FC0E0] mr-4 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-bold mb-2">On-Page Optimization</h4>
                                <p className="text-gray-400">
                                    Professional keyword research, high-quality content optimization, and meta tag management.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <BarChart className="text-[#5FC0E0] mr-4 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-bold mb-2">Link Building</h4>
                                <p className="text-gray-400">
                                    Acquiring authoritative, high-quality backlinks to significantly boost your domain authority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                    <h2 className="text-3xl font-bold mb-6">Digital Marketing</h2>
                    <p className="text-gray-400 mb-8">
                        Beyond SEO, we offer comprehensive digital marketing services to
                        reach your customers across all digital touchpoints.
                    </p>
                    <ul className="space-y-4">
                        <li className="bg-charcoal p-4 rounded-xl flex items-center justify-between">
                            <span className="font-bold flex items-center text-white">
                                <Globe className="mr-3 text-[#5FC0E0]" size={20} /> Social Media
                                Marketing
                            </span>
                        </li>
                        <li className="bg-charcoal p-4 rounded-xl flex items-center justify-between">
                            <span className="font-bold flex items-center text-white">
                                <Mail className="mr-3 text-[#5FC0E0]" size={20} /> Email Campaigns
                            </span>
                        </li>
                        <li className="bg-charcoal p-4 rounded-xl flex items-center justify-between">
                            <span className="font-bold flex items-center text-white">
                                <TrendingUp className="mr-3 text-[#5FC0E0]" size={20} />{" "}
                                Pay-Per-Click (PPC)
                            </span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <Button href="/get-a-quote" className="w-full">
                            Get a Marketing Audit
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
