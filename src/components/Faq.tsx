'use client';

export default function Faq() {
  return (
    <section className="w-full bg-black py-20 px-[100px] text-white flex flex-col items-center font-montserrat">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-4 max-w-[880px] mb-12">
        <div className="inline-block border border-yellow-300 text-yellow-300 px-4 py-1 rounded-full text-sm">
          Insights
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-snug">
          Frequently asked<br />questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-4 w-full max-w-[880px]">
        {[
          "Is it really unlimited?",
          "Why wouldn't I just hire a freelancer?",
          "Why wouldn't I just hire a full-time designer?",
          "Can I pause, renew or cancel at any time?",
          "Are there any contracts?",
          "How do we communicate?",
          "What if I only have one design task?",
          "What is an active task?",
          "Who are the designers?",
          "How many designs can be done in a single month?",
          "Are there any refunds if I don't like the designs?"
        ].map((question, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] rounded-md px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-[#222] transition"
          >
            <span className="text-white text-sm md:text-base">{question}</span>
            <span className="text-white text-lg">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
