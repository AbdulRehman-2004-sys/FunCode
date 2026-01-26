"use client";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";

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

export default function Careers() {
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
            Join the <span className="text-lime">Team</span>
          </h1>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are always looking for talented individuals to join our growing
            agency.
          </p>
        </motion.div>
      </motion.section>

      <Section>
        <div className="grid gap-6">
          {[
            {
              title: "Senior UI/UX Designer",
              type: "Full-time",
              location: "Remote",
            },
            {
              title: "Frontend Developer",
              type: "Full-time",
              location: "New York, NY",
            },
            {
              title: "Project Manager",
              type: "Full-time",
              location: "London, UK",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center border border-zinc-800 hover:border-lime/30 transition-colors"
            >
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-400">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Button variant="outline" href="/contact">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
