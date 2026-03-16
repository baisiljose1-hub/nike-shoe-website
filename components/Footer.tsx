"use client";

export default function Footer() {
  // This function perfectly scrolls the page back to the Hero section
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#050505] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* LARGE DECORATIVE LOGO */}
        <div className="text-[12vw] font-black italic tracking-tighter text-white/5 select-none leading-none mb-10 pointer-events-none">
          NIKE
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          {/* PROFESSIONAL DEVELOPER SIGN-OFF */}
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Engineered by Baisil Jose
          </p>

          {/* FUNCTIONAL BACK TO TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="text-xs font-black text-white uppercase tracking-tighter border-b-2 border-red-600 pb-1 hover:text-red-600 transition-all cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
