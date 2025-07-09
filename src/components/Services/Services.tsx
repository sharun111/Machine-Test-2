import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="services-top">
        {/* Video Section */}
        <div className="video-section">
          <div className="video-background" />
          <a
            href="/Recording 2025-07-03 160934.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-button"
          >
            ▶ Watch Video
          </a>
        </div>

        {/* Testimonial */}
        <div className="testimonial-box">
          <img src="/image fill.svg" alt="Left icon" className="leaf-icon left" />
          <img src="/image (1).svg" alt="Right icon" className="leaf-icon right" />
          <p className="testimonial-text">
            An absolute professional who consistently delivers exceptional work, even under
            the most demanding deadlines. I appreciated the insightful feedback and innovative
            ideas introduced throughout the design process, which greatly enhanced the final product.
          </p>
          <p className="testimonial-author">
            Wade Warren — <span>Founder @Lorem ipsum</span>
          </p>
        </div>
      </div>

      {/* Design Info */}
      <div className="design-box">
        <div className="design-left">
          <h2>
            Your dedicated <br />
            <span>in-house design team</span>
          </h2>
        </div>

        <div className="design-right">
          <p>
            We are a global collective of diverse designers and developers, partnering with brands of all
            scales. What distinguishes us is our dedication to crafting memorable, user-friendly, and
            captivating experiences — it’s what we excel at. The projects we deliver combine creative vision
            with practical execution, resulting in solutions that are both distinctive and impactful.
          </p>
          <p className="author">
            Lorem Ipsum — <span>Founder and CEO</span>
          </p>
          <img src="/image (1).svg" alt="Leaf logo" className="leaf-icon bottom-right" />
        </div>
      </div>

      {/* Logos */}
      <div className="logos-section">
        <p className="logos-heading">As seen and loved on:</p>
        <div className="logos-scroll">
          <img src="/SVG.png" alt="Dribbble" />
          <img src="/SVG.svg" alt="Behance" />
          <img src="/Link.svg" alt="Figma" />
          <img src="/Link (1).svg" alt="Unsplash" />
          <img src="/SVG.png" alt="Dribbble" />
          <img src="/SVG.svg" alt="Behance" />
          <img src="/Link.svg" alt="Figma" />
          <img src="/Link (1).svg" alt="Unsplash" />
          <img src="/SVG.png" alt="Dribbble" />
          <img src="/SVG.svg" alt="Behance" />
          <img src="/Link.svg" alt="Figma" />
          <img src="/Link (1).svg" alt="Unsplash" />
          <img src="/SVG.png" alt="Dribbble" />
          <img src="/SVG.svg" alt="Behance" />
          <img src="/Link.svg" alt="Figma" />
          <img src="/Link (1).svg" alt="Unsplash" />
        </div>
      </div>
    </section>
  );
}
