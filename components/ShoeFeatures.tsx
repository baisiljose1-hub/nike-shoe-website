import Image from "next/image";

const features = [
  {
    id: "01",
    title: "The Profile",
    desc: "Aerodynamic design built for explosive speed.",
    img: "/AIR1.png",
  },
  {
    id: "02",
    title: "The Heel",
    desc: "Impact-absorbing cushioning for hard landings.",
    img: "/AIR2.png",
  },
  {
    id: "03",
    title: "The Toe Box",
    desc: "Breathable mesh for maximum airflow.",
    img: "/AIR3.png",
  },
  {
    id: "04",
    title: "The Sole",
    desc: "Multi-directional traction pattern.",
    img: "/AIR4.png",
  },
  {
    id: "05",
    title: "The Tongue",
    desc: "Locked-in fit with premium stitching.",
    img: "/AIR5.png",
  },
  {
    id: "06",
    title: "The Details",
    desc: "Holographic emblem that changes with the light.",
    img: "/AIR6.png",
  },
];

export default function ShoeFeatures() {
  return (
    <section className="relative w-full bg-[#050505] text-white py-32 overflow-hidden">
      {/* 🔴 AMBIENT STUDIO LIGHTING 🔴 */}
      {/* This bleeds down from the top section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-75 bg-red-600/10 blur-[120px] pointer-events-none z-0"></div>

      {/* Middle right glow */}
      <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-red-700/5 blur-[150px] pointer-events-none rounded-full z-0"></div>

      {/* Bottom left glow */}
      <div className="absolute bottom-10 left-[-10%] w-[60vw] h-[60vw] bg-red-800/10 blur-[150px] pointer-events-none rounded-full z-0"></div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-40 relative z-10">
        {features.map((feature, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4 z-10">
                <span className="text-red-600 font-bold tracking-widest text-sm uppercase">
                  Angle {feature.id}
                </span>
                <h2
                  className="text-5xl md:text-7xl font-black italic uppercase text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
                >
                  {feature.title}
                </h2>
                <p className="text-neutral-400 max-w-sm text-lg font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Shoe Image */}
              <div className="w-full md:w-1/2 flex justify-center z-10 relative group">
                {/* Intense red flash right behind the shoe on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-600/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={600}
                  height={600}
                  className="w-full max-w-md object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform duration-700 ease-out cursor-pointer relative z-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
