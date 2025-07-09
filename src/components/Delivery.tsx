"use client";
import { motion } from "framer-motion";

export default function Delivery() {
  const tags = [
    "UI/UX design",
    "Graphic design",
    "Logo design",
    "Branding",
    "Animation",
    "Social Media",
    "Web Development",
    "Print Design",
  ];

  return (
    <section className="w-full flex justify-center bg-black py-12 mb-[100px]">
      <div className="max-w-[880px] w-full px-4 sm:px-6 md:px-[100px] text-center text-white font-montserrat">
        <div className="inline-block bg-black border border-yellow-300 text-yellow-300 px-3 py-1 rounded-full text-xs sm:text-sm mb-6">
          Services
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-10">
          All you want,<br />
          delivered on time
        </h2>

        <div className="overflow-hidden space-y-4">
          {[1, 2].map((row) => (
            <div key={row} className="relative w-full overflow-hidden">
              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

              {/* Right fade */}
              <div className="absolute right-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-3 sm:gap-4 w-max"
                initial={{ x: row === 1 ? "0%" : "-25%" }}
                animate={{ x: row === 1 ? "-50%" : "-75%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 30,
                }}
              >
                {[...tags, ...tags].map((tag, i) => (
                  <div
                    key={`${row}-${i}`}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a] text-white text-xs sm:text-sm rounded-md border border-gray-700 whitespace-nowrap"
                  >
                    {tag}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
