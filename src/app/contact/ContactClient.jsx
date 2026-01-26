"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "react-toastify";

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

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            setLoading(true);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
                toast.error(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                        Get in <span className="text-[#5FC0E0]">Touch</span>
                    </h1>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind? We'd love to hear from you and discuss how we can help your business grow.
                    </p>
                </motion.div>
            </motion.section>

            <Section className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-zinc-900 p-3 rounded-full text-[#5FC0E0] mr-4">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-gray-400">hello@agency.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-zinc-900 p-3 rounded-full text-[#5FC0E0] mr-4">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call Us</h3>
                                <p className="text-gray-400">+92 313 4059969</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-zinc-900 p-8 rounded-3xl">
                        <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                        <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
                        <p className="text-gray-400">Saturday - Sunday: Closed</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-zinc-900 p-8 md:p-10 rounded-3xl space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5FC0E0] transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5FC0E0] transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-bold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5FC0E0] transition-colors"
                            placeholder="Project Inquiry"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5FC0E0] transition-colors"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>
                    <Button
                        disabled={loading}
                        className="w-full bg-[#5FC0E0] text-charcoal font-bold py-4 rounded-xl hover:bg-[#5FC0E0]/90 transition duration-300 flex justify-center items-center cursor-pointer"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
                    </Button>
                </form>
            </Section>
        </main>
    );
}
