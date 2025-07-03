'use client';

export default function Testimonial() {
  const testimonials = [
    {
      name: "Milos Vidic",
      role: "CEO @goatmarketing",
      text: "“Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time...”",
      source: "Clutch",
    },
    {
      name: "Rasess Seth",
      role: "CEO @nextyn",
      text: "“Vas was extremely easy to work with. He’s a pro at Webflow and is always open to hearing you out...”",
      source: "Upwork",
    },
    {
      name: "Goran Markovic",
      role: "Founder @viztiya",
      text: "“Working with Handmade on our website design was an exceptional experience. As an architect...”",
      source: "Clutch",
    },
    {
      name: "Chris Hjort",
      role: "PM @host",
      text: "“I highly recommend Vasilije. He is a hardworking guy with great ideas for big or small projects...”",
      source: "Clutch",
    },
    {
      name: "Borgar Erlendsson",
      role: "CEO @kozmoz",
      text: "“True professional capable of delivering quality work within very tight time constraints...”",
      source: "Clutch",
    },
    {
      name: "Jasper Zhang",
      role: "CEO @hyperbolic",
      text: "“Vasilije did an outstanding job designing our website. He’s highly skilled, professional...”",
      source: "Clutch",
    },
    {
      name: "Rasess Seth",
      role: "CEO @nextyn",
      text: "“Vas was extremely easy to work with. He’s a pro at Webflow and is always open to hearing you out...”",
      source: "Upwork",
    },
    {
      name: "Goran Markovic",
      role: "Founder @viztiya",
      text: "“Working with Handmade on our website design was an exceptional experience. As an architect...”",
      source: "Clutch",
    },
    {
      name: "Chris Hjort",
      role: "PM @host",
      text: "“I highly recommend Vasilije. He is a hardworking guy with great ideas for big or small projects...”",
      source: "Clutch",
    },
    {
      name: "Borgar Erlendsson",
      role: "CEO @kozmoz",
      text: "“True professional capable of delivering quality work within very tight time constraints...”",
      source: "Clutch",
    },
    {
      name: "Jasper Zhang",
      role: "CEO @hyperbolic",
      text: "“Vasilije did an outstanding job designing our website. He’s highly skilled, professional...”",
      source: "Clutch",
    }, {
      name: "Jasper Zhang",
      role: "CEO @hyperbolic",
      text: "“Vasilije did an outstanding job designing our website. He’s highly skilled, professional...”",
      source: "Clutch",
    }
  ];

  return (
    <section className="w-full bg-black py-20 px-[100px] text-white font-montserrat flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-4 mb-8 max-w-[880px]">
        <div className="inline-block border border-yellow-300 text-yellow-300 px-4 py-1 rounded-full text-sm">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-snug">
          Read what our clients are<br />saying about us
        </h2>
      </div>

      {/* Scrollable 3-column Grid */}
      <div className="h-[500px] w-full max-w-[1440px] overflow-y-auto pr-2 scroll-smooth scrollbar-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{t.role}</p>
                <p className="text-sm text-gray-200 mb-6">{t.text}</p>
              </div>
              <div className="text-sm">
                <span className="font-bold">{t.source}</span>{" "}
                <span className="text-yellow-400">5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
