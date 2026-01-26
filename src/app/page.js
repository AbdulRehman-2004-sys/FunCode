import HomeClient from "./HomeClient";

export const metadata = {
  title: "FunCode | Home",
  description:
    "Welcome to FunCode - Your partner for high-performance web development, premium UI/UX design, and strategic digital branding.",
  alternates: {
    canonical: "https://funcode-agency.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
