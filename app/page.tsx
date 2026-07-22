import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services" 
import CaseStudiesSection from "./components/CaseStudies";
export default function Home() {
  return(
    <>
      <Hero/>
      <Services/>
      <CaseStudiesSection/>
    </>
  )
}
