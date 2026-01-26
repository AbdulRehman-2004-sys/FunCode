import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceCard({ title, description, icon: Icon, link }) {
    return (
        <Link href={link} className="group block bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-[#5FC0E0]/30">
            <div className="mb-6 inline-block p-4 rounded-full bg-charcoal group-hover:bg-[#5FC0E0] group-hover:text-charcoal transition-colors border border-zinc-700 group-hover:border-[#5FC0E0] text-[#5FC0E0]">
                {Icon && <Icon size={32} />}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#5FC0E0] transition-colors">{title}</h3>
            <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>
            <div className="flex items-center text-sm font-bold text-white group-hover:text-[#5FC0E0] transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
}
