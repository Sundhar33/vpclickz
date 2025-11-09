import React, { useState } from 'react';


import './VpClickzWebsite.css';
import vp1 from "@src/assets/vp1.jpg"
import vp2 from "@src/assets/vp2.jpg"
import vp3 from "@src/assets/vp3.jpg"
import vp4 from "@src/assets/vp4.jpg"
import vp5 from "@src/assets/vp5.jpg"

const VpClickzWebsite: React.FC = () => {
  // State for the contact form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  // Event handler for the WhatsApp submit button
  const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form from submitting traditionally

    const ownerNumber = "916385371104"; // Your WhatsApp number

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      `Customer Name: ${name}\nEmail: ${email}\nMobile Number:${number}\nMessage: ${message}`
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="neon-bg"></div>
      <div className="container">
        {/* Header with logo */}
        <header>
          <div className="logo-area">
            <span className="brand-tagline"></span>
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#faq">Q&A</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="social-icons">
            <a href="https://www.instagram.com/vp_clicks_25?igsh=MTBteHNqMTFscmVuYg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </header>

        {/* Hero Section with animated gradient text */}
        <section className="hero" id="home">
          <div className="hero-title">
            <span className="hero-gradient"></span><br />
            <span className="hero-gradient" style={{ fontSize: '5.05rem' }}>VPCLICKZ</span>
          </div>
          <div className="hero-subtitle">
            Welcome to VP CLICKZ! India's boldest photography destination for stunning portraits, creative event coverage, and vibrant visual storytelling.<br />
            Transform memories into masterpieces with pro-grade studio, outdoor, and commercial shoots. Trusted by brands & cherished by families.
          </div>
          <button className="cta-btn" onClick={() => { window.location.href = '#contact'; }}>Book now</button>
        </section>

        {/* Animated Neon geometric shapes */}
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
        <div className="square-sm"></div>
        <div className="square-sm2"></div>
      </div>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-title">About Us</div>
        <p>
          VP CLICKZ is a creative photography studio based in Thiruverumbur, Trichy. Founded by Veeramani, we offer a full spectrum of professional photography and design services for families, brands, and businesses. With a passion for innovation and years of artistic expertise, our team captures moments that matter — from intimate weddings and lively events to bold product shoots and artistic portraits.<br /><br />
          Our studio is known for friendly service, attention to detail, and cutting-edge visual experiences using the latest digital tools. We believe every client deserves memories worth cherishing forever. Discover the VP CLICKZ experience today!
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <span className="service-icon">📸</span>
            <h3>Portrait Photography</h3>
            <p>Professional studio and outdoor sessions for individuals, couples, families, and more.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🎬</span>
            <h3>Event Coverage</h3>
            <p>Expert photography for weddings, birthdays, corporate functions, and festivals.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🛍️</span>
            <h3>Product Shoots</h3>
            <p>High-quality product and commercial photography to elevate your brand's image.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🌈</span>
            <h3>Creative Retouching</h3>
            <p>Advanced editing, color grading, and artistic photo effects for unforgettable results.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-section">
          <div className="portfolio-column">
            {/* NOTE: Images paths are fixed to /images/... assuming they are in the 'public/images' folder */}
            <div className="portfolio-item"><img src="src/assets/vp1.jpg" alt="Portfolio 1" /></div>
            <div className="portfolio-item"><img src="src/assets/vp2.jpg" alt="Portfolio 2" /></div>
          </div>
          <div className="portfolio-center">
            <img src="src/assets/vp3.jpg" alt="Portfolio Center" />
          </div>
          <div className="portfolio-column">
            <div className="portfolio-item"><img src="src/assets/vp4.jpg" alt="Portfolio 3" /></div>
            <div className="portfolio-item"><img src="src/assets/vp5.jpg" alt="Portfolio 4" /></div>
          </div>
        </div>
      </section>

      {/* FAQ/Q&A Section */}
      <section className="faq-section" id="faq">
        <div className="faq-title">Questions & Answers</div>
        <ul className="faq-list">
          <li>
            <div className="faq-question">What types of photography do you offer?</div>
            <div className="faq-answer">VP CLICKZ covers portraits, events, products, creative shoots, retouching, and videography upon request.</div>
          </li>
          <li>
            <div className="faq-question">How do I book a session?</div>
            <div className="faq-answer">Use our contact form below or call us during studio hours; we reply to all inquiries within 24 hours.</div>
          </li>
          <li>
            <div className="faq-question">Do you provide prints, albums, or framing?</div>
            <div className="faq-answer">Yes! We offer full print and album packages, as well as custom framing for all shoots.</div>
          </li>
          <li>
            <div className="faq-question">Do you travel for events or offer shoots outside Trichy?</div>
            <div className="faq-answer">Absolutely! We serve all nearby towns and are available to travel for projects on request.</div>
          </li>
          <li>
            <div className="faq-question">What is your editing process?</div>
            <div className="faq-answer">Every image is professionally edited and delivered with color correction, crop, and optional creative effects.</div>
          </li>
        </ul>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" id="testimonials">
        <div className="testimonial-title">Client Testimonials</div>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <div className="testimonial-quote">“VP CLICKZ made our family photoshoot magical! The studio is welcoming and the photos look stunning!”</div>
            <div className="testimonial-user">– Aravind R.</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">“Professional, friendly, and creative. Our wedding memories are truly priceless thanks to Veeramani and team.”</div>
            <div className="testimonial-user">– Swathi & Karthik</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">“Quick turnaround, vibrant colors, and lots of attention to detail on our product shoot. Highly recommended!”</div>
            <div className="testimonial-user">– CraftyArts, Trichy</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Send Inquiry</h2>
        <form className="contact-form" id="contactForm" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="nameInput" style={{ color: 'white' }}>Name *</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              placeholder="Your full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailInput" style={{ color: 'white' }}>Email *</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="your.email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberInput" style={{ color: 'white' }}>Phone *</label>
            <input
              type="tel"
              id="numberInput"
              name="number"
              placeholder="+91 XXXXXXXXXX"
              pattern="[0-9]{10}"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="messageInput" style={{ color: 'white' }}>Message *</label>
            <textarea
              id="messageInput"
              name="message"
              rows={5}
              placeholder="Tell us about your photography needs..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleWhatsAppSubmit}
            style={{
              background: 'linear-gradient(90deg,#fbff00 10%, #ff00fa 90%)',
              color: 'white',
              margin: '10px 0',
              padding: '12px 24px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '30px',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            📧 Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-social">
          <a href="https://www.instagram.com/vp_clicks_25?igsh=MTBteHNqMTFscmVuYg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/916385371104" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="footer-text">
          VP CLICKZ &copy; 2025 — All rights reserved.<br />
          Made with passion by VELTROX.
        </div>
      </footer>
    </>
  );
};

export default VpClickzWebsite;
