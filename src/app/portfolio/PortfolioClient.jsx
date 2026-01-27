"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import PortfolioItem from "../../components/PortfolioItem";

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

export default function PortfolioClient() {
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
                        Our <span className="text-[#5FC0E0]">Work</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A collection of our favorite projects and success stories, showcasing our commitment to excellence and innovation.
                    </p>
                </motion.div>
            </motion.section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <PortfolioItem
                        image="/web_app_ui.png"
                        title="Fintech Dashboard"
                        category="UI/UX Design"
                        link="https://www.figma.com/design/UsLsyNcS6GwTSxfZ0IcRol/XENPOP-Mining-App--Copy-?node-id=0-1&p=f&t=zvT2kOceu6UrxBZu-0"
                    />
                    <PortfolioItem
                        image="/web_app.png"
                        title="EcoEats Delivery"
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
                    <PortfolioItem
                        image="/motionwizz.png"
                        title="MotionWizz"
                        category="Web Development"
                        link="https://motionwizz.com/"
                    />
                    <PortfolioItem
                        title="Health Tracker"
                        category="Mobile App"
                        link="/portfolio/health"
                    />
                </div>
            </Section>
        </main>
    );
}
