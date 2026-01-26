import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300';
    const variants = {
        primary: 'bg-[#5FC0E0] text-charcoal hover:bg-lime-hover hover:scale-105',
        secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal hover:scale-105',
        outline: 'bg-transparent border border-zinc-700 text-white hover:border-lime hover:text-lime',
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
