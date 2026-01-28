import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about FunCode, a team of passionate designers, developers, and strategists committed to digital innovation.",
  alternates: {
    canonical: "https://funcodeofficial.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
