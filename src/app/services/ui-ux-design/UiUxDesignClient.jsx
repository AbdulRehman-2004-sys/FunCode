"use client";
import { motion } from "framer-motion";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import { PenTool, Users, Monitor, CheckCircle } from "lucide-react";
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

export default function UiUxDesignClient() {
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
                        UI/UX <span className="text-[#5FC0E0]">Design</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Crafting intuitive, engaging, and beautiful digital experiences that resonate with users and drive business success.
                    </p>
                </motion.div>
            </motion.section>

            <Section>
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                        <Users className="text-[#5FC0E0] mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-4">User Research</h3>
                        <p className="text-gray-400">
                            Understanding your users' needs, behaviors, and pain points to
                            build products that solve real-world problems effectively.
                        </p>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                        <PenTool className="text-[#5FC0E0] mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-4">
                            Wireframing & Prototyping
                        </h3>
                        <p className="text-gray-400">
                            Creating low and high-fidelity prototypes to test concepts and
                            validate user flows before full-scale development.
                        </p>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                        <Monitor className="text-[#5FC0E0] mb-6" size={40} />
                        <h3 className="text-2xl font-bold mb-4">Visual Design</h3>
                        <p className="text-gray-400">
                            Applying modern aesthetics, color theory, and typography to create a stunning and cohesive brand identity.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="group aspect-square bg-zinc-800 rounded-3xl flex items-center justify-center overflow-hidden cursor-pointer relative">
                        <Image
                            src="/services/uii.png"
                            fill
                            className="transition-transform duration-700 ease-out group-hover:scale-105 object-cover"
                            alt="UI/UX Design Process and Interface Showcase"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Our Design Process
                        </h2>
                        <div className="space-y-8">
                            {[
                                { step: 1, title: "Discovery", desc: "Analyzing business goals and user requirements." },
                                { step: 2, title: "Strategy", desc: "Defining information architecture and user journeys." },
                                { step: 3, title: "Design", desc: "Crafting the visual interface and interactive elements." },
                                { step: 4, title: "Handoff", desc: "Delivering pixel-perfect assets to developers." },
                            ].map((item) => (
                                <div key={item.step} className="flex">
                                    <div className="bg-[#5FC0E0] text-charcoal font-bold w-10 h-10 rounded-full flex items-center justify-center mr-6 shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button href="/get-a-quote">Transform Your UI/UX</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
