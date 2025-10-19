import ButtonComponent from "./button";
import { Metadata } from "next";

// SEO Metadata for a specific page
//Metadata can only be exported from a page or layout file AND ONLY A SERVER COMPONENT
export const metadata: Metadata = {
  title: "Contact Us | Name of Website",
  description: "This is the contact page of our website",
  keywords: "contact, get in touch, support, about us",
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Name of Website",
    description: "This is the contact page of our website",
  },
};

export default async function Contact() {
  console.log("I'm a server component");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <ButtonComponent />
    </div>
  );
}
