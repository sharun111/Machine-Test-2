import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="review-badge">
        5.0 <span className="stars">⭐⭐⭐⭐⭐</span> 11 reviews
      </div>

      <h1 className="hero-title">
        Partner with a Full-Service Design Team for All Your Creative Needs
      </h1>

      <p className="hero-subtext">
        Skip the hassle of finding the perfect full-time designer or studio
      </p>

      <button className="hero-button">Connect Us</button>
    </section>
  );
}
