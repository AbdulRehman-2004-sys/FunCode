import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl sm:text-2xl font-bold font-sans mb-6 block">
                            {/* <Image src="/imges/logo.png" alt="Logo" width={50} height={50} /> */}
                            Fun<span className="text-[#5FC0E0]">Code.</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Creative digital agency crafting premium web experiences for forward-thinking brands.
                        </p>
                        <div className="flex space-x-4">
                            <a target='_blank' href="https://www.facebook.com/" className="bg-zinc-800 p-2 rounded-full hover:bg-[#5FC0E0] hover:text-charcoal transition-all">
                                <Facebook size={20} />
                            </a>


                            <a target='_blank' href="www.linkedin.com/in/abdul-rehman4002" className="bg-zinc-800 p-2 rounded-full hover:bg-[#5FC0E0] hover:text-charcoal transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/about" className="hover:text-[#5FC0E0] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[#5FC0E0] transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-[#5FC0E0] transition-colors">Portfolio</Link></li>
                            {/* <li><Link href="/careers" className="hover:text-[#5FC0E0] transition-colors">Careers</Link></li> */}
                            <li><Link href="/contact" className="hover:text-[#5FC0E0] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/services/web-development" className="hover:text-[#5FC0E0] transition-colors">Web Development</Link></li>
                            <li><Link href="/services/app-development" className="hover:text-[#5FC0E0] transition-colors">App Development</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:text-[#5FC0E0] transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services/seo-marketing" className="hover:text-[#5FC0E0] transition-colors">SEO & Marketing</Link></li>
                            <li><Link href="/services/video-editing" className="hover:text-[#5FC0E0] transition-colors">Video Editing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="mailto:hello@agency.com" className="hover:text-[#5FC0E0] transition-colors">hello@agency.com</a></li>
                            <li><a href="tel:+1234567890" className="hover:text-[#5FC0E0] transition-colors">+92 313 4059969</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-[#5FC0E0] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#5FC0E0] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
