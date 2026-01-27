// This will be the content of the home page as a client component
"use client";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ServiceCard";
import PortfolioItem from "../components/PortfolioItem";
import {
    Palette,
    Code,
    Megaphone,
    Smartphone,
    Video,
    CheckCircle,
    ArrowRight,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    Quote,
} from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import VariableProximity from "@/components/VariableProximity";
// import Antigravity from "@/components/Antigravity";
import ElectricBorder from "@/components/ElectricBorder";
import DotGrid from "@/components/DotGrid";
import { useLoading } from "../context/LoadingContext";

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

export default function HomeClient() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const containerRef = useRef(null);
    const { isComplete } = useLoading();

    const testimonials = [
        {
            id: 1,
            content:
                "Agency delivered a stunning website that perfectly captures our brand essence. The attention to detail in UI/UX is remarkable.",
            name: "Sarah Johnson",
            position: "CEO, TechStart",
            service: "Web Development",
            rating: 5,
        },
        {
            id: 2,
            content:
                "Their mobile app development team is top-notch. Our user retention increased by 40% after the redesign.",
            name: "Michael Chen",
            position: "Product Manager, EcoEats",
            service: "Mobile App",
            rating: 5,
        },
        {
            id: 3,
            content:
                "Incredible results on our SEO campaign. We ranked #1 for our key terms within 3 months. Highly recommended!",
            name: "David Smith",
            position: "Founder, GrowthHacker",
            service: "SEO Marketing",
            rating: 5,
        },
        {
            id: 4,
            content:
                "The branding package they created gave us a completely new identity that resonates with our target audience.",
            name: "Emily Davis",
            position: "Marketing Director, Neon",
            service: "Branding",
            rating: 5,
        },
        {
            id: 5,
            content:
                "Professional video editing that transformed our raw footage into compelling marketing assets.",
            name: "James Wilson",
            position: "Content Creator, TubeStar",
            service: "Video Editing",
            rating: 5,
        },
        {
            id: 6,
            content:
                "The UI design for our dashboard is intuitive and beautiful. Our clients love using the new interface.",
            name: "Lisa Wong",
            position: "CTO, FinTech Sol",
            service: "UI/UX Design",
            rating: 5,
        },
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
        setIsAutoPlaying(false);
    };

    return (
        <main>
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate={isComplete ? "visible" : "hidden"}
                variants={staggerContainer}
                className="relative min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden"
            // style={{
            //     backgroundImage: "url(/imges/hero6.png)",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
                    <DotGrid
                        dotSize={5}
                        gap={15}
                        baseColor="#271E37"
                        activeColor="#5FC0E0"
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                    />
                </div>

                <ElectricBorder
                    color="#5FC0E0"
                    speed={1}
                    chaos={0.12}
                    borderRadius={999}
                >
                    <div>
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-[#5FC0E0] mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-300">
                                Accepting new projects for 2026
                            </span>
                        </motion.div>
                    </div>
                </ElectricBorder>
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mt-6"
                >
                    <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                            label={"We build digital"}
                            className={"variable-proximity-demo"}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>
                </motion.h1>
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3"
                >
                    <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                            label={"experiences."}
                            className={"variable-proximity-demo"}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-7 z-50"
                >
                    A full-service digital agency specializing in UI/UX design, web
                    development, and branding for bold companies.
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 z-50"
                >
                    <Button className="" href="/contact">
                        Start a Project
                    </Button>

                    <Button href="/portfolio" variant="secondary">
                        View Our Work
                    </Button>
                </motion.div>

                {/* Vertical Social Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-20 pr-8"
                >
                    <span
                        className="text-white text-sm tracking-widest whitespace-nowrap font-extrabold"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                        Directly Reach Out
                    </span>
                    <ArrowDown className="text-[#5FC0E0] animate-bounce" size={20} />
                    <div className="flex flex-col gap-4">
                        <a
                            target="_blank"
                            Rel="noopener noreferrer"
                            href="https://wa.me/923134059969?text=Hi%20can%20i%20get%20a%20quote?"
                            className="p-3 bg-zinc-800 rounded-full text-[#5FC0E0] hover:bg-[#5FC0E0] hover:text-charcoal transition-all duration-300 hover:scale-110"
                        >
                            <FaWhatsapp size={20} />
                        </a>
                        <a
                            target="_blank"
                            Rel="noopener noreferrer"
                            href="https://www.facebook.com/"
                            className="p-3 bg-zinc-800 rounded-full text-[#5FC0E0] hover:bg-[#5FC0E0] hover:text-charcoal transition-all duration-300 hover:scale-110"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                /> */}
            </motion.section>

            {/* Testimonials Slider */}
            <Section className="my-10 min-h-[80vh] md:h-screen overflow-hidden relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Results that speak for themselves
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We don't just build digital products; we build business solutions
                            that drive growth and engagement.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-lg">
                                <CheckCircle className="text-[#5FC0E0] mr-3" /> 98% Client
                                Satisfaction Rate
                            </li>
                            <li className="flex items-center text-lg">
                                <CheckCircle className="text-[#5FC0E0] mr-3" /> 200+ Projects
                                Completed
                            </li>
                            <li className="flex items-center text-lg">
                                <CheckCircle className="text-[#5FC0E0] mr-3" /> Dedicated Support
                                Team
                            </li>
                            <li className="flex items-center text-lg">
                                <CheckCircle className="text-[#5FC0E0] mr-3" /> Fast Turnaround Times
                            </li>
                        </ul>
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="bg-charcoal p-10 rounded-3xl border border-zinc-800 relative min-h-[300px] flex flex-col justify-center">
                            <Quote
                                className="text-[#5FC0E0] mb-4 opacity-50 absolute top-8 right-8"
                                size={48}
                            />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex text-[#5FC0E0] mb-4">
                                        {[...Array(testimonials[currentTestimonial].rating)].map(
                                            (_, i) => (
                                                <span key={i} className="text-xl">
                                                    ★
                                                </span>
                                            ),
                                        )}
                                    </div>

                                    <p className="text-xl font-medium mb-6 italic">
                                        "{testimonials[currentTestimonial].content}"
                                    </p>

                                    <div className="flex items-center mt-auto">
                                        <div className="w-12 h-12 bg-[#5FC0E0]/20 rounded-full mr-4 flex items-center justify-center text-[#5FC0E0] font-bold">
                                            {testimonials[currentTestimonial].name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                {testimonials[currentTestimonial].name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonials[currentTestimonial].position}
                                            </p>
                                            <p className="text-xs text-[#5FC0E0] mt-1 font-semibold uppercase tracking-wider">
                                                {testimonials[currentTestimonial].service}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-end mt-4 gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 bg-zinc-800 rounded-full hover:bg-[#5FC0E0] hover:text-charcoal transition-all duration-300 group"
                                aria-label="Previous Testimonial"
                            >
                                <ChevronLeft className="group-hover:scale-110 transition-transform cursor-pointer" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-3 bg-zinc-800 rounded-full hover:bg-[#5FC0E0] hover:text-charcoal transition-all duration-300 group"
                                aria-label="Next Testimonial"
                            >
                                <ChevronRight className="group-hover:scale-110 transition-transform cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Services Section */}
            <Section id="services" className="bg-charcoal">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Our expertise
                        </h2>
                        <p className="text-gray-400 text-lg">
                            We combine strategy, design, and technology to build brands that
                            stand out in the digital landscape.
                        </p>
                    </div>
                    <Button href="/services" variant="outline" className="mt-6 md:mt-0">
                        View All Services
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        title="UI/UX Design"
                        description="User-centric interfaces that delight users and drive conversions."
                        icon={Palette}
                        link="/services/ui-ux-design"
                    />
                    <ServiceCard
                        title="Web Development"
                        description="Robust, scalable websites built with the latest technologies."
                        icon={Code}
                        link="/services/web-development"
                    />
                    <ServiceCard
                        title="Video Editing"
                        description="High-quality video production and post-production to tell your story."
                        icon={Video}
                        link="/services/video-editing"
                    />
                    <ServiceCard
                        title="Mobile Apps"
                        description="Native and cross-platform mobile applications for iOS and Android."
                        icon={Smartphone}
                        link="/services/app-development"
                    />
                </div>
            </Section>

            {/* Selected Work */}
            <Section id="portfolio">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Selected work
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A selection of projects crafted for our clients.
                        </p>
                    </div>
                    <Button href="/portfolio" variant="outline" className="mt-6 md:mt-0">
                        View All Work
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PortfolioItem
                        image="/web_app_ui.png"
                        title="Fintech Dashboard"
                        category="UI/UX Design"
                        link="https://www.figma.com/design/UsLsyNcS6GwTSxfZ0IcRol/XENPOP-Mining-App--Copy-?node-id=0-1&p=f&t=zvT2kOceu6UrxBZu-0"
                    />
                    <PortfolioItem
                        image="/web_app.png"
                        title="Xenpop Mining App"
                        category="Web App"
                        link="https://xenpop.com/"
                    />
                    <PortfolioItem
                        title="Neon Brand"
                        category="Branding"
                        link="/portfolio/neon"
                    />
                    <PortfolioItem
                        image="/website.png"
                        title="Outreaching"
                        category="Web Development"
                        link="https://outreaching.io/"
                    />
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center py-32 border rounded-4xl mb-8 bg-zinc-900">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                    Ready to start your project?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Let's discuss how we can help your business grow with a custom digital
                    solution.
                </p>
                <Button href="/get-a-quote" className="text-lg px-10 py-4">
                    Get a Free Quote
                </Button>
            </Section>
        </main>
    );
}
