export default function Footer() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-[100px] font-montserrat overflow-hidden max-[400px]:px-4 max-[400px]:py-10">
      {/* Background Image */}
      <div className="absolute inset-0 rotate-180 z-0">
        <img
          src="/c5e14e11ec0ab683136075decb92161458861ab1.jpg"
          alt="footer background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Heading & Button */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-[182px] max-[400px]:gap-3 max-[400px]:mb-12">
        <h2 className="text-3xl md:text-5xl font-medium leading-snug max-[400px]:text-xl max-[400px]:leading-snug">
          Need more clarity?
          <br />
          Get in touch!
        </h2>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition max-[400px]:text-sm max-[400px]:px-4 max-[400px]:py-1.5">
          Book a demo →
        </button>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between items-center w-full max-[400px]:flex-col max-[400px]:gap-4 max-[400px]:text-center">
        <div className="text-sm text-gray-400 max-[400px]:text-xs">
          © 2024 All Rights Reserved
        </div>

        <div className="flex gap-4 max-[400px]:gap-2">
          {["in", "ig", "be", "dr", "g"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-yellow-400 transition max-[400px]:w-7 max-[400px]:h-7"
            >
              <span className="text-sm text-white uppercase max-[400px]:text-[10px]">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
