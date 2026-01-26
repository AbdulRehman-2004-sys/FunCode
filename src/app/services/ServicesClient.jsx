"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import ServiceCard from "../../components/ServiceCard";
import {
    Code,
    Smartphone,
    Palette,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

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

export default function ServicesClient() {
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
                        Our <span className="text-[#5FC0E0]">Services</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs, from high-performance web development to creative UI/UX design.
                    </p>
                </motion.div>
            </motion.section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Web Development"
                        description="Custom coding, Wordpress, and Webflow solutions for high-performance sites."
                        icon={Code}
                        link="/services/web-development"
                    />
                    <ServiceCard
                        title="App Development"
                        description="Native iOS, Android, and cross-platform mobile applications."
                        icon={Smartphone}
                        link="/services/app-development"
                    />
                    <ServiceCard
                        title="UI/UX Design"
                        description="User-centric interfaces, wireframing, and visual design."
                        icon={Palette}
                        link="/services/ui-ux-design"
                    />
                    <ServiceCard
                        title="SEO & Marketing"
                        description="Technical SEO, content strategy, and digital marketing campaigns."
                        icon={TrendingUp}
                        link="/services/seo-marketing"
                    />
                    <ServiceCard
                        title="Video Editing"
                        description="Professional video production for social media and commercials."
                        icon={Video}
                        link="/services/video-editing"
                    />
                    <ServiceCard
                        title="Global Consultancy"
                        description="Strategic advice to help your business navigate the digital world."
                        icon={Globe}
                        link="/contact"
                    />
                </div>
            </Section>
        </main>
    );
}
