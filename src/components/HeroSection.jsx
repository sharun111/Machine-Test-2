export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-36 gap-6 text-white font-montserrat mb-[50px]">

            
            <div className="py-1 px-4 border border-white rounded-[30px] text-xs flex items-center justify-center gap-1 w-[200px] h-[40px]">
                5.0 <span className="text-yellow-400">⭐⭐⭐⭐⭐</span> 11 reviews
            </div>


            <div className="w-[960px] h-auto text-center font-medium text-[70px] leading-[77.7px] tracking-[0%] p-4  rounded-lg">
                Partner with a Full-Service Design Team for All Your Creative Needs
            </div>


            <div>Skip the hassle of finding the perfect full-time designer or studio</div>
            <button className="w-[165px] h-[44px] flex items-center justify-center gap-[22px] bg-yellow-400 text-black rounded-[30px] text-sm font-medium hover:bg-yellow-500 transition">
                Connect Us
            </button>

        

        </div>
    );
}
