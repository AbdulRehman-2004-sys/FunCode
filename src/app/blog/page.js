"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";

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

export default function Blog() {
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
            Our <span className="text-lime">Journal</span>
          </h1>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, thoughts, and trends from our team.
          </p>
        </motion.div>
      </motion.section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="group cursor-pointer">
              <div className="relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  Blog Post Image {post}
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-lime mb-2 font-bold uppercase">
                <span>Design</span>
                <span>•</span>
                <span>5 Min Read</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-lime transition-colors">
                The Future of Web Design in 2026
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="text-white font-bold underline decoration-lime underline-offset-4">
                Read Article
              </span>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
