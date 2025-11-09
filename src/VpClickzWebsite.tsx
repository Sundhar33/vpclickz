import React, { useState } from "react";
import "./VpClickzWebsite.css";

import vp1 from "@src/assets/vp1.jpg";
import vp2 from "@src/assets/vp2.jpg";
import vp3 from "@src/assets/vp3.jpg";
import vp4 from "@src/assets/vp4.jpg";
import vp5 from "@src/assets/vp5.jpg";

const VpClickzWebsite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ownerNumber = "916385371104";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      `Customer Name: ${name}\nEmail: ${email}\nMobile Number:${number}\nMessage: ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="neon-bg"></div>

      {/* HEADER */}
      <header className="header">
        <div className="logo-area">VP CLICKZ</div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Q&A</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/vp_clicks_25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <h1 className="hero-title">VPCLICKZ</h1>
        <p className="hero-subtitle">
          Welcome to VP CLICKZ! India's boldest photography destination for stunning
          portraits, creative event coverage, and vibrant visual storytelling.
          Transform memories into masterpieces with pro-grade studio, outdoor,
          and commercial shoots. Trusted by brands & cherished by families.
        </p>
        <button
          className="cta-btn"
          onClick={() => (window.location.href = "#contact")}
        >
          Book Now
        </button>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          VP CLICKZ is a creative photography studio based in Thiruverumbur, Trichy.
          Founded by Veeramani, we specialize in portraits, events, products, and
          creative design services. We capture your best moments with precision,
          creativity, and care.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">📸 Portraits</div>
          <div className="service-card">🎬 Events</div>
          <div className="service-card">🛍️ Products</div>
          <div className="service-card">🌈 Retouching</div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section" id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <img src={vp1} alt="Portfolio 1" />
          <img src={vp2} alt="Portfolio 2" />
          <img src={vp3} alt="Portfolio 3" />
          <img src={vp4} alt="Portfolio 4" />
          <img src={vp5} alt="Portfolio 5" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleWhatsAppSubmit}>📧 Send via WhatsApp</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>VP CLICKZ © 2025 — Made with ❤️ by VELTROX</p>
      </footer>
    </>
  );
};

export default VpClickzWebsite;
