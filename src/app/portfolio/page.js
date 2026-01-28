import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore our collection of favorite projects and success stories, showcasing our expertise in UI/UX Design, Web Development, and Mobile Apps.",
  alternates: {
    canonical: "https://funcodeofficial.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
