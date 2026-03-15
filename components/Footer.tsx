export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* LARGE DECORATIVE LOGO */}
        <div className="text-[12vw] font-black italic tracking-tighter text-white/5 select-none leading-none mb-10">
          NIKE
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Developed by You
          </p>

          <ul className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white">
            <li className="cursor-pointer hover:text-red-600 transition-colors">
              Instagram
            </li>
            <li className="cursor-pointer hover:text-red-600 transition-colors">
              Twitter
            </li>
            <li className="cursor-pointer hover:text-red-600 transition-colors">
              Github
            </li>
          </ul>

          <button className="text-xs font-black uppercase tracking-tighter border-b-2 border-red-600 pb-1 hover:text-red-600 transition-all">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
