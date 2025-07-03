export default function Pricing(){
    return(
        <div className="mb-[100px]">
          <div className="flex flex-col items-center text-center mb-16 ">
                <div className="mb-3 inline-block bg-black border border-yellow-300 text-yellow-300 px-4 py-1 rounded-full text-sm">
                    Pricing
                </div>

                <h2 className="text-3xl md:text-5xl font-medium leading-snug max-w-4xl">
                    Choose the relevant plan to build,<br />
                    grow and fasten your team
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-[54px] max-w-[1440px]">
                <div className="bg-[#111] rounded-[20px] p-8 w-[300px] flex flex-col justify-between">
                    <div>
                        <p className="text-sm mb-2 text-gray-400">STANDARD</p>
                        <p className="text-3xl font-semibold">$2,150<span className="text-base font-normal">/month</span></p>
                        <a href="#" className="text-yellow-400 underline text-sm mt-1 inline-block">One request at a time</a>
                        <ul className="text-sm mt-6 space-y-2 text-gray-300">
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Unlimited requests</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>~48 hour delivery</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Unlimited brands</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Weekly meetings</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Pause or cancel anytime</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Managed via Slack and Trello</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>All services except Webflow</li>
                        </ul>
                    </div>
                    <div className="mt-6 flex flex-col gap-4">
                        <button className="bg-yellow-400 text-black py-2 rounded-full font-medium">Subscribe →</button>
                        <button className="border border-white text-white py-2 rounded-full text-sm">Book a demo</button>
                    </div>
                </div>

                <div className="bg-[#111] rounded-[20px] p-8 w-[300px] flex flex-col justify-between relative">
                    <div className="absolute top-4 right-4 bg-yellow-900 text-yellow-300 text-xs px-3 py-1 rounded-full">
                        Faster ⚡
                    </div>
                    <div>
                        <p className="text-sm mb-2 text-gray-400">PRO</p>
                        <p className="text-3xl font-semibold">$3,150<span className="text-base font-normal">/month</span></p>
                        <a href="#" className="text-yellow-400 underline text-sm mt-1 inline-block">Double the requests</a>
                        <ul className="text-sm mt-6 space-y-2 text-gray-300">
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Unlimited requests</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>~48 hour delivery</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Unlimited brands</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Weekly meetings</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Pause or cancel anytime</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Managed via Slack and Trello</li>
                            <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>All services and Webflow</li>
                        </ul>
                    </div>
                    <div className="mt-6 flex flex-col gap-4">
                        <button className="bg-yellow-400 text-black py-2 rounded-full font-medium">Subscribe →</button>
                        <button className="border border-white text-white py-2 rounded-full text-sm">Book a demo</button>
                    </div>
                </div>

                <div className="flex flex-col gap-[54px]">
                    <div className="bg-[#111] rounded-[20px] p-8 w-[300px] h-[270px] flex flex-col justify-between">
                        <div>
                            <p className="text-sm mb-2 text-gray-400">PROJECT-BASED</p>
                            <p className="text-sm text-gray-300 mb-4">
                                For a custom fee delivered in milestones. Ideal for specific goals. Custom project scope.
                            </p>
                            <ul className="text-sm space-y-2 text-gray-300">
                                <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Fixed scope of work</li>
                                <li className="flex items-start gap-2"><span className="text-yellow-400">✔</span>Delivered in milestones</li>
                            </ul>
                        </div>
                        <button className="mt-6 border border-white text-white py-2 rounded-full text-sm">Send email</button>
                    </div>

                    <div className="bg-[#111] rounded-[20px] p-8 w-[300px] text-center flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-medium mb-2">Refer & earn</h3>
                            <p className="text-sm text-gray-300">Receive $150 for each referral!</p>
                        </div>
                        <button className="mt-6 border border-white text-white py-2 rounded-full text-sm">Join now</button>
                    </div>
                </div>
            </div>
            </div>
    )
}