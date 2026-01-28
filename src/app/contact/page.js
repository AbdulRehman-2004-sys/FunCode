import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FunCode. Whether you have a project inquiry or just want to say hi, we'd love to hear from you.",
  alternates: {
    canonical: "https://funcodeofficial.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
