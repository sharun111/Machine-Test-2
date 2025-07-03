export default function Services() {
    return (
        <section className=" bg-black text-white flex flex-col items-center gap-10 py-10 font-sans mb-[120px]">
            <div className="flex gap-[20px]">
                <div
                    className="relative bg-[#e0e0e0] rounded-[25px] overflow-hidden bg-cover bg-center"
                    style={{
                        width: "477px",
                        height: "321px",
                        padding: "117px 195px",
                        backgroundImage: "url('/cc30cac8292777e20fd312b3cec87119032513b0.jpg')",

                    }}
                >
                    <a
                        href="/Recording 2025-07-03 160934.mp4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-lg hover:bg-black/80 transition"
                    >
                        ▶ Watch Video
                    </a>

                </div>


                <div
                    className="relative bg-[#1a1a1a] rounded-[25px] border border-[#3b3b3b] text-white mx-auto"
                    style={{
                        width: "739px",
                        height: "323px",
                        padding: "96.03px 41px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <img
                        src="/image fill.svg"
                        alt="Left Leaf Icon"
                        className="absolute left-12 top-1/2 -translate-y-1/2 w-37px h-87px "
                    />

                    <img
                        src="/image (1).svg"
                        alt="Right Leaf Icon"
                        className="absolute right-12 top-1/2 -translate-y-1/2 w-37px h-87px "
                    />

                    <p className="text-sm leading-relaxed text-gray-200 max-w-[500px] mb-4">
                        An absolute professional who consistently delivers exceptional work, even under
                        the most demanding deadlines. I appreciated the insightful feedback and
                        innovative ideas introduced throughout the design process, which greatly enhanced
                        the final product..
                    </p>

                    <p className="text-sm text-gray-400">
                        Wade Warren — <span className="text-gray-500">Founder @Lorem ipsum</span>
                    </p>
                </div>

            </div>


            <div
                className="bg-[#1a1a1a] rounded-[25px] border border-[#3b3b3b] text-white relative"
                style={{
                    width: "1240px",
                    height: "369.5px",
                    padding: "41px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div className="text-left flex items-start">
                    <h2 className="text-[28px] font-light leading-snug">
                        Your dedicated <br />
                        <span className="font-semibold">in-house design team</span>
                    </h2>
                </div>

                <div className="max-w-[640px] text-sm text-gray-300 flex flex-col justify-between relative">
                    <p className="mb-6 leading-relaxed">
                        We are a global collective of diverse designers and developers, partnering
                        with brands of all scales. What distinguishes us is our dedication to
                        crafting memorable, user-friendly, and captivating experiences — it’s what
                        we excel at. The projects we deliver combine creative vision with practical
                        execution, resulting in solutions that are both distinctive and impactful.
                    </p>
                    <p className="text-sm text-gray-400">
                        Lorem Ipsum — <span className="text-gray-500">Founder and CEO</span>
                    </p>

                    <img
                        src="/image (1).svg"
                        alt="Logo"
                        className="absolute bottom-0 right-0 w-37px h-87px "
                    />
                </div>
            </div>
            <section className="w-full bg-transparent  ">
                <div className="w-[1240px] h-[183.19px] mx-auto px-[100px] flex flex-col justify-center font-sans text-white gap-4">
                    {/* Heading */}
                    <p className=" h-[39.18px] pb-[6.18px] text-sm tracking-wide text-gray-300 uppercase text-center">
                        As seen and loved on
                    </p>

                    {/* Logos */}
                    <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
                        <div className="inline-flex gap-10 items-center">
                            <img src="/SVG.png" alt="Dribbble" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/SVG.svg" alt="Behance" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link.svg" alt="Figma" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link (1).svg" alt="Unsplash" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/SVG.png" alt="Product Hunt" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/SVG.svg" alt="Behance" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link.svg" alt="Figma" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link (1).svg" alt="Unsplash" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/SVG.png" alt="Product Hunt" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/SVG.svg" alt="Behance" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link.svg" alt="Figma" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                            <img src="/Link (1).svg" alt="Unsplash" className="w-[121px] h-[39.18px] pb-[6.18px]" />
                        </div>
                    </div>
                </div>
            </section>






        </section>
    )
}
