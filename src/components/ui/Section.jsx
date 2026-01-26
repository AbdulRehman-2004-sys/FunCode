export default function Section({ children, className = '', id = '' }) {
    return (
        <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
}
