import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services",
  description:
    "Explore our comprehensive digital solutions: Web Development, App Development, UI/UX Design, SEO Marketing, and Video Editing.",
  alternates: {
    canonical: "https://funcodeofficial.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
