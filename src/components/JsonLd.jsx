export default function JsonLd() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FunCode",
        "url": "https://funcode-agency.com",
        "logo": "https://funcode-agency.com/imges/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-313-4059969",
            "contactType": "customer service",
            "areaServed": "Global",
            "availableLanguage": ["English", "Urdu"]
        },
        "sameAs": [
            "https://www.facebook.com/funcode",
            "https://www.linkedin.com/in/abdul-rehman4002"
        ]
    };

    const serviceData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Agency",
        "provider": {
            "@type": "Organization",
            "name": "FunCode"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Global"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX Design"
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
            />
        </>
    );
}
