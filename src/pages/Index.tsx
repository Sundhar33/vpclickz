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
    const whatsappUrl = `https://wa.me/911234567890?text=${whatsappMessage}`;
    
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold text-gradient">VP CLICKZ</h1>
            <div className="flex gap-6">
              {['home', 'gallery', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Photography Studio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient">
            VP CLICKZ
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-foreground/90">
            Capturing Timeless Moments
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">VEERAMANI</span> · Owner & Lead Photographer<br />
            Wedding · Portrait · Commercial · Event Photography
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover-lift"
            >
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('gallery')}
              className="border-primary/20 hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of our finest captures across wedding, portrait, and commercial photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer animate-scale-in ${
                  image.size === 'lg' ? 'md:col-span-2 md:row-span-2' : 
                  image.size === 'md' ? 'md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-primary font-semibold mb-1">{image.genre}</p>
                    <h3 className="text-2xl font-display font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Exclusive <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium photography services tailored to your unique vision and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch with us today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8 animate-fade-in-up">
              <Card className="bg-card border-border p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-display font-bold mb-6">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">VEERAMANI</p>
                        <p className="text-muted-foreground">Owner & Lead Photographer</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href="mailto:vpphotography1102@gmail.com"
                          className="text-primary hover:underline"
                        >
                          vpphotography1102@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone / WhatsApp</p>
                        <a
                          href="tel:6385371104"
                          className="text-primary hover:underline"
                        >
                          +91 6385371104
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card border-border p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-display font-bold mb-6">Send Inquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your full name"
                        className="bg-background border-border"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your.email@example.com"
                        className="bg-background border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="bg-background border-border"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us about your photography needs..."
                        className="bg-background border-border min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-gradient mb-4">VP CLICKZ</h2>
          <p className="text-muted-foreground mb-6">
            Professional Photography Studio · Chennai, Tamil Nadu
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 VP CLICKZ. All rights reserved. Crafted with passion by VEERAMANI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
