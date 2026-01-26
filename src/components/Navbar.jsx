'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className=" text-white absolute w-full z-50 border-b border-charcoal-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navVariants}
                    className="flex items-center justify-between h-20"
                >
                    <motion.div variants={itemVariants} className="flex items-center">
                        <Link href="/" className="text-3xl font-bold font-sans">
                            {/* FC<span className="text-lime">.</span> */}
                            <Image src="/imges/logo.png" alt="Logo" width={70} height={70} />
                        </Link>
                    </motion.div>
                    <div className="hidden md:block">
                        <motion.div variants={navVariants} className="ml-10 flex items-baseline space-x-8">
                            <motion.div variants={itemVariants}>
                                <Link href="/" className="hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link href="/about" className="hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative group">
                                <button className="flex items-center hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    Services <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-0 w-56 bg-charcoal-light rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible border border-zinc-800">
                                    <Link href="/services" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">All Services</Link>
                                    <Link href="/services/web-development" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">Web Development</Link>
                                    <Link href="/services/app-development" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">App Development</Link>
                                    <Link href="/services/ui-ux-design" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">UI/UX Design</Link>
                                    <Link href="/services/seo-marketing" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">SEO & Marketing</Link>
                                    <Link href="/services/video-editing" className="block px-4 py-2 text-sm hover:bg-zinc-800 hover:text-lime">Video Editing</Link>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Link href="/portfolio" className="hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
                            </motion.div>
                            {/* <motion.div variants={itemVariants}>
                                <Link href="/blog" className="hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                            </motion.div> */}
                            <motion.div variants={itemVariants}>
                                <Link href="/contact" className="hover:text-lime transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div variants={itemVariants} className="hidden md:block">
                        <Link href="/get-a-quote" className="bg-[#5FC0E0] text-charcoal px-5 py-2.5 rounded-full font-bold transition-all text-sm">
                            Get a Quote
                        </Link>
                    </motion.div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-charcoal-light focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[300px] bg-charcoal z-50 md:hidden border-l border-zinc-800 shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-10">
                                    <Image src="/imges/logo.png" alt="Logo" width={50} height={50} />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <motion.div
                                    className="flex flex-col space-y-4"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.2
                                            }
                                        }
                                    }}
                                >
                                    {[
                                        { name: 'Home', href: '/' },
                                        { name: 'About', href: '/about' },
                                        { name: 'Portfolio', href: '/portfolio' },
                                        { name: 'Contact', href: '/contact' }
                                    ].map((item) => (
                                        <motion.div
                                            key={item.name}
                                            variants={{
                                                hidden: { x: 50, opacity: 0 },
                                                visible: { x: 0, opacity: 1 }
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-2xl font-bold hover:text-[#5FC0E0] transition-colors block py-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        variants={{
                                            hidden: { x: 50, opacity: 0 },
                                            visible: { x: 0, opacity: 1 }
                                        }}
                                        className="pt-4 border-t border-zinc-800 mt-4"
                                    >
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full text-left font-bold text-2xl flex justify-between items-center py-2"
                                        >
                                            Services <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-4 mt-2 space-y-3"
                                                >
                                                    {[
                                                        { name: 'All Services', href: '/services' },
                                                        { name: 'Web Development', href: '/services/web-development' },
                                                        { name: 'App Development', href: '/services/app-development' },
                                                        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
                                                        { name: 'SEO & Marketing', href: '/services/seo-marketing' },
                                                        { name: 'Video Editing', href: '/services/video-editing' }
                                                    ].map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block text-lg text-gray-400 hover:text-[#5FC0E0] transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>

                                <div className="mt-auto pt-10">
                                    <Link
                                        href="/get-a-quote"
                                        className="block w-full text-center bg-[#5FC0E0] text-charcoal py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
