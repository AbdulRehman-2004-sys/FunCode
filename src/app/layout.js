import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import JsonLd from "../components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata = {
  metadataBase: new URL("https://funcodeofficial.com"),
  title: {
    default: "FunCode | Creative Digital Agency",
    template: "FunCode | %s",
  },
  description:
    "FunCode is a creative digital agency crafting premium web experiences, UI/UX design, and innovative branding solutions for forward-thinking brands.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "UI/UX Design",
    "Branding",
    "SEO Marketing",
    "App Development",
  ],
  authors: [{ name: "FunCode Team" }],
  creator: "FunCode",
  publisher: "FunCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FunCode | Creative Digital Agency",
    description:
      "Creative digital agency crafting premium web experiences for forward-thinking brands.",
    url: "https://funcode-agency.com",
    siteName: "FunCode",
    images: [
      {
        url: "/imges/hero6.png",
        width: 1200,
        height: 630,
        alt: "FunCode Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FunCode | Creative Digital Agency",
    description:
      "Creative digital agency crafting premium web experiences for forward-thinking brands.",
    images: ["/imges/hero6.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/imges/logo.png",
    shortcut: "/imges/logo.png",
    apple: "/imges/logo.png",
  },
};

import { LoadingProvider } from "../context/LoadingContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${robotoFlex.variable} antialiased`}
      >
        <LoadingProvider>
          <Preloader />
          <JsonLd />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LoadingProvider>
        <ToastContainer
          position="bottom-right"
          theme="dark"
          // toastStyle={{ backgroundColor: "#333", color: "#fff" }} // optional
          progressStyle={{ background: "lime" }} // <-- customize the progress bar here
        />
      </body>
    </html>
  );
}
