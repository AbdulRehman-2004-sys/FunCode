"use client";
import { motion } from "framer-motion";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import { Video, Play, Film, Scissors } from "lucide-react";

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

export default function VideoEditingClient() {
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
                        Video <span className="text-[#5FC0E0]">Editing</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Professional video production and high-impact post-production services to tell
                        your story in a way that captures and keeps attention.
                    </p>
                </motion.div>
            </motion.section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="aspect-video bg-zinc-800 rounded-3xl flex items-center justify-center relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10 ">
                            <video autoPlay muted loop src="/services/video.mp4" className="w-full h-full object-cover" aria-label="Professional video showreel"></video>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Compelling Visual Storytelling
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            In the age of short-form content and high-production YouTube, professional video is essential. We edit
                            high-quality videos that resonate with your audience and drive massive engagement.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-900 p-4 rounded-xl text-center">
                                <Film className="mx-auto text-[#5FC0E0] mb-3" size={32} />
                                <h4 className="font-bold">Commercials</h4>
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-xl text-center">
                                <Scissors className="mx-auto text-[#5FC0E0] mb-3" size={32} />
                                <h4 className="font-bold">Social Content</h4>
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-xl text-center">
                                <Video className="mx-auto text-[#5FC0E0] mb-3" size={32} />
                                <h4 className="font-bold">Corporate</h4>
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-xl text-center">
                                <Play className="mx-auto text-[#5FC0E0] mb-3" size={32} />
                                <h4 className="font-bold">Animations</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Section className="bg-zinc-900 rounded-[3rem] text-center border border-zinc-800">
                    <h2 className="text-3xl font-bold mb-6">Ready to create?</h2>
                    <p className="text-gray-400 mb-8">
                        Submit your raw footage or brief, and our expert editors will handle the rest to make your vision a reality.
                    </p>
                    <Button href="/get-a-quote">Start Video Project</Button>
                </Section>
            </Section>
        </main>
    );
}
