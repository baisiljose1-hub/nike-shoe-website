import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* You can add more components here later, like <Features /> or <Archive /> */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">More content here...</h2>
      </section>
    </main>
  );
}
