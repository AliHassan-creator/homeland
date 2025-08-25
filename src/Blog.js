import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const blogPosts = [
  // First row
  {
    id: 1,
    title: "Real Estate Market Trends 2025",
    date: "August 20, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content: "Discover the latest real estate trends and how the market is shifting in 2025.",
  },
  {
    id: 2,
    title: "First-Time Home Buyer Tips",
    date: "August 15, 2025",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    content: "Top 5 tips for first-time home buyers to make the best investment decisions.",
  },
  {
    id: 3,
    title: "Smart Homes Revolution",
    date: "August 10, 2025",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    content: "How smart homes are shaping the future of modern living and real estate.",
  },
  
  // Second row
  {
    id: 4,
    title: "Interest Rates Impact 2025",
    date: "August 5, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    content: "The impact of interest rates on the housing market in 2025.",
  },
  {
    id: 5,
    title: "Sustainable Building Materials",
    date: "July 30, 2025",
    author: "Robert Johnson",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    content: "Sustainable building materials that are revolutionizing construction.",
  },
  {
    id: 6,
    title: "High Appreciation Neighborhoods",
    date: "July 25, 2025",
    author: "Sarah Wilson",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
    content: "Neighborhoods with the highest property value appreciation this year.",
  },
  
  // Third row
  {
    id: 7,
    title: "Home Staging Guide",
    date: "July 20, 2025",
    author: "Michael Brown",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    content: "How to stage your home for a quick sale in any market condition.",
  },
  {
    id: 8,
    title: "Commercial Real Estate Opportunities",
    date: "July 15, 2025",
    author: "Emily Davis",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    content: "Commercial real estate investment opportunities in emerging markets.",
  },
  {
    id: 9,
    title: "Urban Planning Future",
    date: "July 10, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    content: "The future of urban planning and its effect on property values.",
  },
];

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

// Blog Hero Section with single background image
function BlogHero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')` }}
    >
      <Navbar />
      <div className="hero-content">
        <h1 className="property-title">OUR BLOG</h1>
      </div>
    </div>
  );
}

// Recent Blog Section
function RecentBlog() {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    // Navigate to individual blog page or show details
    navigate(`/blog/${blogId}`);
  };

  return (
    <section className="recent-blog-section">
      <div className="recent-blog-container">
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.image} alt="Blog" className="blog-post-image" />
              <h3 
                className="blog-post-title"
                onClick={() => handleBlogClick(post.id)}
                style={{
                  cursor: 'pointer',
                  color: '#2c3e50',
                  margin: '15px 0 10px 0',
                  fontSize: '18px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#7ed957';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#2c3e50';
                }}
              >
                {post.title}
              </h3>
              <div className="blog-post-meta">
                <div className="blog-post-date">{post.date}</div>
                <div className="blog-post-author">{post.author}</div>
              </div>
              <p className="blog-post-content">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '40px',
      marginBottom: '60px',
      gap: '10px'
    }}>
      {[1, 2, 3, 4, 5, '...', 10].map((item, index) => (
        <div
          key={index}
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            backgroundColor: item === 1 ? '#7ed957' : 'transparent',
            color: item === 1 ? 'white' : '#666',
            fontWeight: item === 1 ? '600' : '400',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: item === 1 ? 'none' : '1px solid #ddd'
          }}
          onMouseEnter={(e) => {
            if (item !== 1 && item !== '...') {
              e.target.style.backgroundColor = '#f5f5f5';
            }
          }}
          onMouseLeave={(e) => {
            if (item !== 1 && item !== '...') {
              e.target.style.backgroundColor = 'transparent';
            }
          }}
        >
          {item}
        </div>
      ))}
    </div>
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

function Blog() {
  return (
    <>
      <BlogHero />
      <RecentBlog />
      <Pagination />
      <Footer />
    </>
  );
}

export default Blog;