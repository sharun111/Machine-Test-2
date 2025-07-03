export default function Footer(){
    return(
         <section className="w-full bg-black bg-[url('/your-pattern-image.png')] bg-cover text-white py-20 px-[100px] font-montserrat max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center text-center gap-6 mb-[182px]">
                    <h2 className="text-3xl md:text-5xl font-medium leading-snug">
                        Need more clarity?<br />Get in touch!
                    </h2>
                    <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
                        Book a demo →
                    </button>
                </div>


                <div className="flex justify-between items-center w-full">

                    <div className="text-sm text-gray-400">
                        © 2024 All Rights Reserved
                    </div>


                    <div className="flex gap-4">
                        {["in", "ig", "be", "dr", "g"].map((icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
                            >
                                <span className="text-sm text-white uppercase">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
    )
}