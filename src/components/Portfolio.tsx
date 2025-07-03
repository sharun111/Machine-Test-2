'use client';

import Image from 'next/image';

export default function Portfolio() {
    return (
        <section className="  px-[100px] flex flex-col gap-[54px] mx-auto bg-black text-white mb-[80px]">
            <div className="flex flex-col gap-4">
                <button className="px-4 py-1 border border-gray-400 text-yellow-400 rounded-full w-max text-sm font-medium">
                    Portfolio
                </button>
                <h2 className="text-[42px] font-light leading-[1.2]">
                    Exceptional work <br /> you deserve
                </h2>
                <p className="max-w-[480px] text-sm text-gray-400 mt-2">
                    From tech startups to healthcare giants, e-commerce pioneers to edtech, we've left our mark on diverse domains.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-[30px]">
                <div className="rounded-[28px] overflow-hidden">
                    <Image src="/Container (2).jpg" alt="Slippery Moneys" width={398.66} height={398.85} className="w-full h-auto" />
                </div>

                <div className="rounded-[20px] overflow-hidden">
                    <Image src="/53463de02b5d05410c63971d5286ea87196d5f36.jpg" alt="Hybrid Capital" width={400} height={300} className="w-full h-auto" />
                </div>

                <div className="rounded-[26px] overflow-hidden">
                    <Image src="/7df07795a1d0a0d3f51cd0275ce6c4d19e964d23 (1).jpg" alt="Betero" width={400} height={300} className="w-full h-auto" />
                </div>

                <div className="rounded-[26px] overflow-hidden">
                    <Image src="/bd306e87e4731545736c34d9cbc61404b1fd12d7 (1).jpg" alt="Exec" width={400} height={300} className="w-full h-auto" />
                </div>

                <div className="rounded-[26px] overflow-hidden">
                    <Image src="/1afbc2d479467729d4530f63e3617b1dfd1b087a.jpg" alt="Voltage" width={400} height={300} className="w-full h-auto" />
                </div>

                <div className="rounded-[26px] overflow-hidden">
                    <Image src="/ece20f690cf418a4d24170e54d60e737ae9f9c40 (1).jpg" alt="Hyperbolic" width={400} height={300} className="w-full h-auto" />
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium ">
                    See all works →
                </button>
            </div>
           

        </section>


    );
}
