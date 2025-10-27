import { useState } from 'react';
import { Camera, Heart, Briefcase, Star, Mail, Phone, MapPin, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-bg.jpg';
import wedding1 from '@/assets/gallery-wedding-1.jpg';
import portrait1 from '@/assets/gallery-portrait-1.jpg';
import product1 from '@/assets/gallery-product-1.jpg';
import event1 from '@/assets/gallery-event-1.jpg';
import couple1 from '@/assets/gallery-couple-1.jpg';
import details1 from '@/assets/gallery-details-1.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // WhatsApp message format
    const whatsappMessage = `*New Photography Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email || 'Not provided'}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/916385371104?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const galleryImages = [
    { src: wedding1, title: 'Eternal Vows', genre: 'Wedding', size: 'lg' },
    { src: portrait1, title: 'Corporate Excellence', genre: 'Portrait', size: 'md' },
    { src: product1, title: 'Timeless Elegance', genre: 'Product', size: 'md' },
    { src: event1, title: 'Business Summit', genre: 'Event', size: 'lg' },
    { src: couple1, title: 'Love Story', genre: 'Portrait', size: 'sm' },
    { src: details1, title: 'Sacred Traditions', genre: 'Wedding', size: 'sm' },
  ];

  const services = [
    {
      icon: Heart,
      title: 'Wedding Cinematography',
      description: 'Capture every precious moment of your special day with our cinematic wedding photography and videography services.',
      features: [
        'Full-day coverage',
        'Drone videography',
        'Pre-wedding photoshoot',
        'Custom wedding albums',
        'Digital galleries'
      ]
    },
    {
      icon: User,
      title: 'Professional Portraits',
      description: 'Executive portraits, family photography, and personal branding sessions tailored to showcase your best self.',
      features: [
        'Studio & outdoor sessions',
        'Professional retouching',
        'Corporate headshots',
        'Family portraits',
        'Personal branding'
      ]
    },
    {
      icon: Briefcase,
      title: 'Commercial & Events',
      description: 'High-quality commercial photography for businesses, products, and corporate events across Chennai.',
      features: [
        'Product photography',
        'Corporate events',
        'Brand campaigns',
        'Real estate photography',
        'Event coverage'
      ]
    }
  ];

  return (
    
    <div class="neon-bg"></div>
    <div class="container">
        <!-- Header with logo -->
        <header>
            <div class="logo-area">

                <span class="brand-tagline"></span>
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
            <div class="social-icons">
                <a href="https://www.instagram.com/vp_clicks_25?igsh=MTBteHNqMTFscmVuYg== "target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
                </a>
                
                
            </div>
            
        </header>

        <!-- Hero Section with animated gradient text -->
        <section class="hero" id="home">
            <div class="hero-title">
                <span class="hero-gradient"></span><br>
                <span class="hero-gradient" style="font-size:5.05rem;">VPCLICKZ</span>
            </div>
            <div class="hero-subtitle">
                Welcome to VP CLICKZ! India's boldest photography destination for stunning portraits, creative event coverage, and vibrant visual storytelling.<br>
                Transform memories into masterpieces with pro-grade studio, outdoor, and commercial shoots. Trusted by brands & cherished by families.
            </div>
            <button class="cta-btn" onclick="location.href='#contact';">Book now</button>

        </section>

        <!-- Animated Neon geometric shapes -->
        <div class="shape-1"></div>
        <div class="shape-2"></div>
        <div class="shape-3"></div>
        <div class="shape-4"></div>
        <div class="square-sm"></div>
        <div class="square-sm2"></div>
    </div>

    <!-- About Us Section -->
    <section class="about-section" id="about">
        <div class="about-title">About Us</div>
        <p>
            VP CLICKZ is a creative photography studio based in Thiruverumbur, Trichy. Founded by Veeramani, we offer a full spectrum of professional photography and design services for families, brands, and businesses. With a passion for innovation and years of artistic expertise, our team captures moments that matter — from intimate weddings and lively events to bold product shoots and artistic portraits.<br><br>
            Our studio is known for friendly service, attention to detail, and cutting-edge visual experiences using the latest digital tools. We believe every client deserves memories worth cherishing forever. Discover the VP CLICKZ experience today!
        </p>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
        <h2 class="section-title">Our Services</h2>
        <div class="services-list">
            <div class="service-card">
                <span class="service-icon">📸</span>
                <h3>Portrait Photography</h3>
                <p>Professional studio and outdoor sessions for individuals, couples, families, and more.</p>
            </div>
            <div class="service-card">
                <span class="service-icon">🎬</span>
                <h3>Event Coverage</h3>
                <p>Expert photography for weddings, birthdays, corporate functions, and festivals.</p>
            </div>
            <div class="service-card">
                <span class="service-icon">🛍️</span>
                <h3>Product Shoots</h3>
                <p>High-quality product and commercial photography to elevate your brand's image.</p>
            </div>
            <div class="service-card">
                <span class="service-icon">🌈</span>
                <h3>Creative Retouching</h3>
                <p>Advanced editing, color grading, and artistic photo effects for unforgettable results.</p>
            </div>
        </div>
    </section>

    <section class="portfolio-section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>
        <div class="portfolio-section">
  <div class="portfolio-column">
    <div class="portfolio-item"><img src="\VPCLICKZ\images\photo1.JPEG" alt=""></div>
    <div class="portfolio-item"><img src= "\images\photo2.JPEG" alt=""></div>
  </div>
  <div class="portfolio-center">
    <img src="\image\center.jpeg" alt="">
  </div>
  <div class="portfolio-column">
    <div class="portfolio-item"><img src="\image\photo3.JPEG" alt=""></div>
    <div class="portfolio-item"><img src="\image\photo4.JPEG" alt=""></div>
  </div>
</div>
    </section>

    <!-- FAQ/Q&A Section -->
    <section class="faq-section" id="faq">
        <div class="faq-title">Questions & Answers</div>
        <ul class="faq-list">
            <li>
                <div class="faq-question">What types of photography do you offer?</div>
                <div class="faq-answer">VP CLICKZ covers portraits, events, products, creative shoots, retouching, and videography upon request.</div>
            </li>
            <li>
                <div class="faq-question">How do I book a session?</div>
                <div class="faq-answer">Use our contact form below or call us during studio hours; we reply to all inquiries within 24 hours.</div>
            </li>
            <li>
                <div class="faq-question">Do you provide prints, albums, or framing?</div>
                <div class="faq-answer">Yes! We offer full print and album packages, as well as custom framing for all shoots.</div>
            </li>
            <li>
                <div class="faq-question">Do you travel for events or offer shoots outside Trichy?</div>
                <div class="faq-answer">Absolutely! We serve all nearby towns and are available to travel for projects on request.</div>
            </li>
            <li>
                <div class="faq-question">What is your editing process?</div>
                <div class="faq-answer">Every image is professionally edited and delivered with color correction, crop, and optional creative effects.</div>
            </li>
        </ul>
    </section>

    <!-- Testimonial Section -->
    <section class="testimonial-section" id="testimonials">
        <div class="testimonial-title">Client Testimonials</div>
        <div class="testimonial-list">
            <div class="testimonial-card">
                <div class="testimonial-quote">“VP CLICKZ made our family photoshoot magical! The studio is welcoming and the photos look stunning!”</div>
                <div class="testimonial-user">– Aravind R.</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">“Professional, friendly, and creative. Our wedding memories are truly priceless thanks to Veeramani and team.”</div>
                <div class="testimonial-user">– Swathi & Karthik</div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-quote">“Quick turnaround, vibrant colors, and lots of attention to detail on our product shoot. Highly recommended!”</div>
                <div class="testimonial-user">– CraftyArts, Trichy</div>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <!-- Contact Form Section -->
     <section class="contact-section" id="contact">
    <h2 class="section-title">Send Inquiry</h2>
    <form class="contact-form" id="contactForm">
        <div class="form-group">
            <label for="nameInput" style="color: white;">Name *</label>
            <input type="text" id="nameInput" name="name" placeholder="Your full name" required />
        </div>
        
        <div class="form-group">
            <label for="emailInput" style="color: white;">Email *</label>
            <input type="email" id="emailInput" name="email" placeholder="your.email@example.com" required />
        </div>
        
        <div class="form-group">
            <label for="numberInput" style="color: white;">Phone *</label>
            <input type="tel" id="numberInput" name="number" placeholder="+91 XXXXXXXXXX" pattern="[0-9]{10}" required />
        </div>
        
        <div class="form-group">
            <label for="messageInput" style="color: white;">Message *</label>
            <textarea id="messageInput" name="message" rows="5" placeholder="Tell us about your photography needs..." required></textarea>
        </div>
        
        <button type="submit" id="cta-btn" style="background: linear-gradient(90deg,#fbff00 10%, #ff00fa 90%); color:white; margin: 10px 0; padding: 12px 24px; font-weight: bold; border:none; border-radius:30px; width: 100%;">
            📧 Send via WhatsApp
        </button>
    </form>
</section>



    <!-- Footer Section -->
    <footer>
        <div class="footer-social">
            <a href="https://www.instagram.com/vp_clicks_25?igsh=MTBteHNqMTFscmVuYg==" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href= "https://wa.me/916385371104" aria-label="Email">
                <i class="fab fa-whatsapp"></i>
            </a>
            
        </div>
        <div class="footer-text">
            VP CLICKZ &copy; 2025 — All rights reserved.<br>
            Made with passion by VELTROX.
        </div>
    </footer>
  );
};

export default Index;
