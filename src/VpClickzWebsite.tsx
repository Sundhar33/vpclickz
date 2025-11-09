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
      <div className="container">
        {/* Header */}
        <header>
          <div className="logo-area">
            <span className="brand-tagline">VP CLICKZ</span>
          </div>

          {/* Hamburger toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation */}
          <nav className={menuOpen ? "active" : ""}>
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

        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-title">
            <span className="hero-gradient" style={{ fontSize: "5rem" }}>VPCLICKZ</span>
          </div>
          <div className="hero-subtitle">
            Welcome to VP CLICKZ! India's boldest photography destination for
            stunning portraits, creative event coverage, and vibrant visual
            storytelling. Transform memories into masterpieces with pro-grade
            studio, outdoor, and commercial shoots. Trusted by brands & cherished
            by families.
          </div>
          <button
            className="cta-btn"
            onClick={() => (window.location.href = "#contact")}
          >
            Book Now
          </button>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-title">About Us</div>
          <p>
            VP CLICKZ is a creative photography studio based in Thiruverumbur, Trichy.
            Founded by Veeramani, we offer a full spectrum of professional photography
            and design services for families, brands, and businesses. We believe every
            client deserves memories worth cherishing forever.
          </p>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-list">
            <div className="service-card">
              <span className="service-icon">📸</span>
              <h3>Portrait Photography</h3>
              <p>Studio and outdoor sessions for individuals and families.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🎬</span>
              <h3>Event Coverage</h3>
              <p>Photography for weddings, birthdays, and corporate functions.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🛍️</span>
              <h3>Product Shoots</h3>
              <p>High-quality product photography to elevate your brand.</p>
            </div>
            <div className="service-card">
              <span className="service-icon">🌈</span>
              <h3>Creative Retouching</h3>
              <p>Advanced editing, color grading, and photo effects.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section" id="portfolio">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-gallery">
            <div className="portfolio-item"><img src={vp1} alt="Portfolio 1" /></div>
            <div className="portfolio-item"><img src={vp2} alt="Portfolio 2" /></div>
            <div className="portfolio-item"><img src={vp3} alt="Portfolio 3" /></div>
            <div className="portfolio-item"><img src={vp4} alt="Portfolio 4" /></div>
            <div className="portfolio-item"><img src={vp5} alt="Portfolio 5" /></div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonial-section" id="testimonials">
          <div className="testimonial-title">Client Testimonials</div>
          <div className="testimonial-list">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                “VP CLICKZ made our family photoshoot magical!”
              </div>
              <div className="testimonial-user">– Aravind R.</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                “Professional and creative. Our wedding memories are priceless.”
              </div>
              <div className="testimonial-user">– Swathi & Karthik</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                “Quick turnaround and vibrant colors. Highly recommended!”
              </div>
              <div className="testimonial-user">– CraftyArts, Trichy</div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section" id="contact">
          <h2 className="section-title">Send Inquiry</h2>
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
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
            <button type="submit" onClick={handleWhatsAppSubmit}>
              📧 Send via WhatsApp
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/vp_clicks_25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/916385371104" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="footer-text">
            VP CLICKZ © 2025 — Made with 💖 by VELTROX
          </div>
        </footer>
      </div>
    </>
  );
};

export default VpClickzWebsite;
