"use client";
import { motion } from "framer-motion";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import { Code, Layout, Layers, ArrowRight, CheckCircle } from "lucide-react";
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

export default function WebDevelopmentClient() {
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
                        Web <span className="text-[#5FC0E0]">Development</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From custom coding to no-code solutions, we build high-performance websites that drive results and enhance user experience.
                    </p>
                </motion.div>
            </motion.section>

            <Section className="grid gap-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Custom Coding
                        </h2>
                        <p className="text-gray-400 text-lg mb-6">
                            For complex applications requiring maximum performance and
                            scalability, our custom coding solutions are the answer. We use
                            modern frameworks like Next.js, React, and Node.js.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> High
                                Performance
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Scalable
                                Architecture
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Custom
                                Functionality
                            </li>
                        </ul>
                    </div>
                    <div className="bg-zinc-900 aspect-video rounded-3xl flex items-center justify-center text-zinc-700 font-bold text-2xl border border-zinc-800 overflow-hidden relative">
                        <Image
                            src="https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg"
                            alt="Web Development - Custom Coding"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 bg-zinc-900 aspect-video rounded-3xl flex items-center justify-center text-zinc-700 font-bold text-2xl border border-zinc-800 overflow-hidden relative">
                        <Image
                            src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg"
                            alt="Wordpress Development Services"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Wordpress Development
                        </h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Powering over 40% of the web, Wordpress is ideal for content-heavy
                            sites and blogs. We build custom themes and plugins tailored to
                            your specific needs.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Easy
                                Content Management
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Huge
                                Ecosystem
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> SEO
                                Friendly
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center overflow-hidden">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Webflow Development
                        </h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Bridging the gap between design and code. Webflow allows for
                            stunning, animated websites with a powerful CMS, developed in a
                            fraction of the time.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Visual
                                Development
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Fast
                                Turnaround
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle className="text-[#5FC0E0] mr-3" size={20} /> Advanced
                                Animations
                            </li>
                        </ul>
                    </div>
                    <div className="bg-zinc-900 aspect-video rounded-3xl flex items-center justify-center text-zinc-700 font-bold text-2xl border border-zinc-800 overflow-hidden relative">
                        <Image
                            src="https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg"
                            alt="Webflow Interface and Design"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            <Section className="bg-charcoal-light py-20 text-center rounded-[3rem] my-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Not sure which is right for you?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Book a free consultation and let our experts guide you to the best
                    technology for your project.
                </p>
                <Button href="/get-a-quote">Schedule Consultation</Button>
            </Section>
        </main>
    );
}
