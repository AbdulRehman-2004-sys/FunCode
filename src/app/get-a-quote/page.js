"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import { Loader2, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import "react-quill-new/dist/quill.snow.css";

// Disable SSR for Quill
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    budget: "",
    currency: "USD",
    projectDetails: "",
    otherServiceDescription: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = { ...formData };

      if (payload.services.includes("Other")) {
        payload.services = payload.services.filter((s) => s !== "Other");
        if (payload.otherServiceDescription.trim()) {
          payload.services.push(`Other: ${payload.otherServiceDescription}`);
        }
      }

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Quote request sent successfully!");
        setFormData({
          name: "",
          email: "",
          services: [],
          budget: "",
          currency: "USD",
          projectDetails: "",
          otherServiceDescription: "",
        });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to send request.");
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
        className="pt-40 px-4 max-w-7xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Get A <span className="text-lime">Quote</span>
          </h1>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tell us about your specific needs and receive a customized quote.
          </p>
        </motion.div>
      </motion.section>

      <Section className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 md:p-12 rounded-[2rem] space-y-8"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:border-lime outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:border-lime outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-bold mb-4">
              Service Required
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                "UI/UX Design",
                "Web Development",
                "Video Editing",
                "SEO",
                "Mobile App",
                "Other",
              ].map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="h-5 w-5 rounded bg-charcoal border-zinc-700 text-lime"
                  />
                  <span className="text-gray-300">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2">
                Budget Amount
              </label>
              <input
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 focus:border-lime outline-none"
                placeholder="e.g. 5000"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Currency</label>
              <div className="relative">
                <select
                  id="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full bg-charcoal border border-zinc-700 rounded-xl px-4 py-3 appearance-none focus:border-lime outline-none"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>PKR</option>
                  <option>INR</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* ✅ Rich Text Editor */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Project Details
            </label>

            <div className="bg-charcoal border border-zinc-700 rounded-xl overflow-hidden">
              <ReactQuill
                theme="snow"
                value={formData.projectDetails}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    projectDetails: value,
                  }))
                }
                placeholder="Describe your project goals, timeline, and requirements..."
              />
            </div>
          </div>

          <Button
            disabled={loading}
            className="w-full bg-[#5FC0E0] text-charcoal font-bold py-4 rounded-xl text-lg flex justify-center"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
          </Button>
        </form>
      </Section>
    </main>
  );
}
