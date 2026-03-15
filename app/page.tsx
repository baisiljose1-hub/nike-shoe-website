import Hero from "@/components/Hero";
import ShoeFeatures from "@/components/ShoeFeatures";
import Footer from "@/components/Footer"; // Import it

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <ShoeFeatures />
      <Footer /> {/* Add it at the end */}
    </main>
  );
}
