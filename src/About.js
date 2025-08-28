import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './App.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Buy', path: '/buy' },
    { label: 'Rent', path: '/rent' },
    { label: 'Properties', path: '/properties' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          Homeland<span className="dot">.</span>
        </div>
        
        {/* Hamburger icon for mobile */}
        <div className={`hamburger-icon ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`nav-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item) =>
            item.label === 'Properties' ? (
              <li 
                key={item.label}
                className={location.pathname === item.path ? 'active' : ''}
                onMouseEnter={() => setShowPropertiesDropdown(true)}
                onMouseLeave={() => setShowPropertiesDropdown(false)}
                style={{ position: 'relative', userSelect: 'none' }}
              >
                <span onClick={() => handleNavItemClick(item.path)}>
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
                onClick={() => handleNavItemClick(item.path)}
                style={{ userSelect: 'none' }}
              >
                {item.label}
              </li>
            )
          )}
        </ul>
      </div>
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
        <h1 className="property-title">About Homeland</h1>
      </div>
    </div>
  );
}

// Our Company Section (from the image snippet)
function OurCompany() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container" style={{display: 'flex', alignItems: 'center', gap: '40px'}}>
        <div className="why-choose-us-image" style={{flex: 1}}>
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" 
            alt="Our Company" 
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div className="why-choose-us-header" style={{flex: 1, textAlign: 'left'}}>
          <h2 style={{textAlign: 'left', marginBottom: '15px'}}>OUR COMPANY</h2>
          <p style={{marginBottom: '15px', textAlign: 'left'}}>
            Homeland Real Estate is a premier property management and real estate services firm 
            dedicated to delivering exceptional value to our clients. With decades of combined 
            experience, our team provides expert guidance in all aspects of real estate.
          </p>
          <p style={{marginBottom: '20px', textAlign: 'left'}}>
            We pride ourselves on our innovative approach, market knowledge, and commitment to 
            excellence. Our comprehensive services include property sales, leasing, investment 
            consulting, and property management, tailored to meet the unique needs of each client.
          </p>
          <button className="feature-read-more" style={{alignSelf: 'flex-start'}}>READ MORE</button>
        </div>
      </div>
    </section>
  );
}

// Leadership Team Section (replicated from Our Agents)
function LeadershipTeam() {
  const leaders = [
    {
      id: 1,
      name: "Megan Smith",
      title: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditis praesentium est. Totam atque corporis nisl, veniam non. Tempore cupiditate, vitae minus obcaccati provident bestael."
    },
    {
      id: 2,
      name: "Brooke Cagle",
      title: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptatea culpa euram similique corrupti laque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni."
    },
    {
      id: 3,
      name: "Philip Martin",
      title: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, lure dolorum officis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo."
    }
  ];

  return (
    <section className="our-agents-section">
      <div className="our-agents-container">
        <div className="our-agents-header">
          <h2>LEADERSHIP TEAM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veto
            magnam efficis ipsa eum pariatur labore fugit amet eaque.
          </p>
        </div>
        <div className="agents-list">
          {leaders.map((leader) => (
            <div key={leader.id} className="agent-card">
              <img src={leader.image} alt={leader.name} className="agent-image" />
              <div className="agent-details">
                <h3>{leader.name}</h3>
                <p className="agent-title">{leader.title}</p>
                <p className="agent-description">{leader.description}</p>

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

// Frequently Asked Questions Section
function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqData = [
    {
      question: "What is the name of your company",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placent, tempore quasi aliquid eaque vel facilis culpa voluptate."
    },
    {
      question: "How much pay for 3 months?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum."
    },
    {
      question: "Do I need to register?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum."
    },
    {
      question: "Who should I contact in case of support.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>FREQUENTLY ASK QUESTIONS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.
          </p>
        </div>
        <div className="faq-content">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeQuestion === index ? 'active' : ''}`}>
              <div 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeQuestion === index ? '−' : '+'}</span>
              </div>
              {activeQuestion === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
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

function About() {
  return (
    <>
      <AboutHero />
      <OurCompany />
      <LeadershipTeam />
      <OurAgents />
      <FAQSection />
      <Footer />
    </>
  );
}

export default About;