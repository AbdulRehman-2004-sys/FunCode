"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import Image from "next/image";
import FlyingPosters from "@/components/FlyingPosters ";
import ProfileCard from "@/components/ProfileCard";
import CircularGallery from "@/components/CircularGallery";

const team = [
    {
        name: "Abdul Rehman",
        position: "Frontend Developer",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
        name: "Usama Noor",
        position: "UI/UX Designer",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
        name: "Hamid Javed",
        position: "Backend Developer",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
        name: "Arslan Ali",
        position: "Video Editor",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
];

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

export default function AboutClient() {
    const items = [
        "https://picsum.photos/500/500?grayscale",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/400/400?grayscale",
    ];
    return (
        <main>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="pt-40 pb-12 px-4 text-center"
            >
                <motion.div variants={fadeInUp}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Who <span className="text-[#5FC0E0]">We</span> Are
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are a team of passionate designers, developers, and strategists
                        committed to transforming brands through digital innovation.
                    </p>
                </motion.div>
            </motion.section>

            <Section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square bg-zinc-800 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                        <Image
                            src="/imges/about.jpg"
                            alt="About FunCode Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Our mission is simple: to empower businesses with the digital tools
                        they need to succeed in a rapidly evolving connected world. We
                        believe in the power of good design to solve complex problems.
                    </p>
                    <p className="text-gray-400 text-lg mb-8">
                        Since our inception in 2026, we have partnered with over 200 clients
                        globally, delivering award-winning websites, applications, and brand
                        identities.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-zinc-900 p-6 rounded-2xl">
                            <h3 className="text-4xl font-bold text-[#5FC0E0] mb-2">5+</h3>
                            <p className="text-gray-400">Years Experience</p>
                        </div>
                        <div className="bg-zinc-900 p-6 rounded-2xl">
                            <h3 className="text-4xl font-bold text-[#5FC0E0] mb-2">200+</h3>
                            <p className="text-gray-400">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </Section>

            <h2 className="text-3xl text-center md:text-5xl font-bold">Meet the Team</h2>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollSpeed={2} scrollEase={0.05} />
            </div>
        </main>
    );
}
