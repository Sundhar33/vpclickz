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

    // State for the Mobile Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle navigation click and close menu
    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

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
                {/* Header with logo, menu button, and navigation */}
                <header>
                    <div className="logo-area">
                        <span className="brand-tagline"></span>
                    </div>

                    {/* Hamburger Menu Button (visible on mobile, toggles 'open' class) */}
                    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    {/* Navigation Menu (desktop view is standard, mobile view is toggled) */}
                    <nav className={isMenuOpen ? 'open' : ''}>
                        <a href="#home" onClick={handleNavLinkClick}>Home</a>
                        <a href="#about" onClick={handleNavLinkClick}>About</a>
                        <a href="#portfolio" onClick={handleNavLinkClick}>Portfolio</a>
                        <a href="#services" onClick={handleNavLinkClick}>Services</a>
                        <a href="#faq" onClick={handleNavLinkClick}>Q&A</a>
                        <a href="#testimonials" onClick={handleNavLinkClick}>Testimonials</a>
                        <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
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
                    VP CLICKZ is a creative photography studio based in Thiruverumbur, Trichy. Founded by Veeramani, we offer a full spectrum of professional photography and design services for families, brands, and businesses. With a passion for innovation and years of artistic expertise, our team captures moments that matter —
