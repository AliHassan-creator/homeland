import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './App.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Buy', path: '/buy' },
    { label: 'Rent', path: '/rent' },
    { label: 'Properties', path: '/properties' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        Homeland<span className="dot">.</span>
      </div>
      <ul className="nav-links">
        {navItems.map((item) =>
          item.label === 'Properties' ? (
            <li 
              key={item.label}
              className={location.pathname === item.path ? 'active' : ''}
              onMouseEnter={() => setShowPropertiesDropdown(true)}
              onMouseLeave={() => setShowPropertiesDropdown(false)}
              style={{ position: 'relative', userSelect: 'none' }}
            >
              <span>
                Properties <span className="dropdown">&#9662;</span>
              </span>
              {showPropertiesDropdown && (
                <div 
                  className="properties-dropdown"
                  onMouseEnter={() => setShowPropertiesDropdown(true)}
                  onMouseLeave={() => setShowPropertiesDropdown(false)}
                >
                  <div className="dropdown-item">Condo</div>
                  <div className="dropdown-item">Property Land</div>
                  <div className="dropdown-item">FOR RENT</div>
                  <div className="dropdown-item">Commercial Building</div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-submenu">
                    <div className="dropdown-item">Sub Menu</div>
                    <div className="dropdown-submenu-items">
                      <div className="dropdown-item">Menu One</div>
                      <div className="dropdown-item">Menu Two</div>
                      <div className="dropdown-item">Menu Three</div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ) : (
            <li
              key={item.label}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => navigate(item.path)}
              style={{ userSelect: 'none' }}
            >
              {item.label}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

// About Hero Section with single background image
function AboutHero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')` }}
    >
      <Navbar />
      <div className="hero-content">
        <h1 className="property-title">Contact US</h1>
      </div>
    </div>
  );
}

// Contact Form Section
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Say hello to us"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>CONTACT INFO</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+12323235324">+1 232 3235 324</a></p>
            </div>
            <div className="contact-item">
              <h3>Email Address</h3>
              <p><a href="mailto:youremail@domain.com">youremail@domain.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Our Agents Section Component
function OurAgents() {
  const agents = [
    {
      id: 1,
      name: "Megan Smith",
      title: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditis praesentium est. Totam atque corporis nisl, veniam non. Tempore cupiditate, vitae minus obcaccati provident bestael."
    },
    {
      id: 2,
      name: "Brooke Cagle",
      title: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptatea culpa euram similique corrupti laque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni."
    },
    {
      id: 3,
      name: "Philip Martin",
      title: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, lure dolorum officis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo."
    }
  ];

  return (
    <section className="our-agents-section">
      <div className="our-agents-container">
        <div className="our-agents-header">
          <h2>OUR AGENTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veto
            magnam efficis ipsa eum pariatur labore fugit amet eaque.
          </p>
        </div>
        <div className="agents-list">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <img src={agent.image} alt={agent.name} className="agent-image" />
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p className="agent-title">{agent.title}</p>
                <p className="agent-description">{agent.description}</p>

                {/* Social Media Icons */}
                <div className="agent-socials">
                  <button className="social-btn facebook">
                    <FaFacebookF />
                  </button>
                  <button className="social-btn twitter">
                    <FaTwitter />
                  </button>
                  <button className="social-btn linkedin">
                    <FaLinkedinIn />
                  </button>
                  <button className="social-btn instagram">
                    <FaInstagram />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>ABOUT HOMELAND</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, 
            consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, 
            minima minus odio!
          </p>
        </div>
        
        <div className="footer-section footer-navigation">
          <div className="footer-nav-column">
            <h4>NAVIGATIONS</h4>
            <ul className="footer-nav-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/buy">Buy</a></li>
              <li><a href="/rent">Rent</a></li>
              <li><a href="/properties">Properties</a></li>
            </ul>
          </div>
          
          <div className="footer-nav-column">
            <h4 style={{opacity: 0}}>.</h4>
            <ul className="footer-nav-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-section footer-follow">
          <h3>FOLLOW US</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Copyright ©2025 All rights reserved | This template is made with ♥ by <a href="https://colorlib.com">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Contact() {
  return (
    <>
      <AboutHero />
      <ContactForm />
      <OurAgents />
      <Footer />
    </>
  );
}

export default Contact;