import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioItem({ title, category, image, link }) {
    return (
        <Link target="_blank" href={link || '#'} className="group block relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* Placeholder for actual image if not provided */}
                <div className={`w-full h-full bg-zinc-800 transition-transform duration-500 group-hover:scale-105 ${image ? '' : 'flex items-center justify-center'}`}>
                    {image ? (
                        <Image src={image} alt={title} fill className="object-cover object-center" />
                    ) : (
                        <span className="text-zinc-600 font-bold text-xl">Project Preview</span>
                    )}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent pt-20">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-lime text-sm font-bold mb-1 uppercase tracking-wider">{category}</p>
                        <h3 className="text-2xl font-bold text-white group-hover:text-lime transition-colors">{title}</h3>
                    </div>
                    <div className="bg-white text-charcoal p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
