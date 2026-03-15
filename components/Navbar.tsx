export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        {/* MASSIVE NIKE LOGO */}
        <div className="text-4xl md:text-5xl font-black italic tracking-tighter cursor-pointer">
          NIKE
        </div>
      </div>
    </nav>
  );
}
