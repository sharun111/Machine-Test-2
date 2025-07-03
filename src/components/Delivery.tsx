export default function Delivery(){
    return(
         <section className="w-full flex justify-center bg-black py-12 mb-[100px] ">
                <div className="max-w-[880px] w-full px-[100px] text-center text-white font-montserrat">

                    <div className="inline-block bg-black border border-yellow-300 text-yellow-300 px-4 py-1 rounded-full text-sm mb-6">
                        Services
                    </div>

                    <h2 className="text-4xl font-medium leading-snug mb-10">
                        All you want,<br />delivered on time
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'UI/UX design',
                            'Graphic design',
                            'Logo design',
                            'Branding',
                            'Animation',
                            'Social Media',
                            'Web Development',
                            'Print Design'
                        ].map((tag, i) => (
                            <button
                                key={i}
                                className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md text-sm border border-gray-700 hover:bg-gray-800 transition"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
    )
}