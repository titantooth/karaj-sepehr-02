import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Features />
      <Contact /> 

    </main>

  );
}
