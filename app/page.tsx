import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChoiceSection from "@/components/ChoiceSection";
import Values from "@/components/Values";
import SpecialList from "@/components/SpecialList";
import Escrow from "@/components/Escrow";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsLogoes from "@/components/ClientsLogoes";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonial";
import RequestForm from "@/components/RequestForm";
import Blog from "@/components/OurBlog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ChoiceSection />
      <Values />
      <SpecialList />
      <Escrow />
      <Portfolio />
      <WhyChooseUs />
      <ClientsLogoes />
      <Faqs />
      <Testimonials />
      <RequestForm />
      <Blog />
      <Footer />
    </main>
  );
}