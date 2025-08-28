import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHome, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: '625 S. Berendo St',
    address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
    price: '$2,265,500',
    status: ['SALE', 'RENT'],
    beds: 2,
    baths: 2,
    sqft: 5500,
    liked: false,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    title: '871 Crenshaw Blvd',
    address: '1 New York Ave, Warners Bay, NSW 2282',
    price: '$2,265,500',
    status: ['SALE', 'RENT'],
    beds: 2,
    baths: 2,
    sqft: 1620,
    liked: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    title: '853 S Lucerne Blvd',
    address: '853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005',
    price: '$2,265,500',
    status: ['LEASE'],
    beds: 2,
    baths: 2,
    sqft: 5500,
    liked: true,
  },

  // Added dummy entries
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    title: '905 Market St Apt 12',
    address: '905 Market St Apt 12, San Francisco, CA 94103',
    price: '$3,150 / month',
    status: ['RENT'],
    beds: 1,
    baths: 1,
    sqft: 750,
    liked: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    title: '4020 S. Congress Ave',
    address: '4020 S Congress Ave, Austin, TX 78704',
    price: '$725,000',
    status: ['SALE'],
    beds: 3,
    baths: 2,
    sqft: 1850,
    liked: false,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    title: '22 Ocean Dr',
    address: '22 Ocean Dr, Miami Beach, FL 33139',
    price: '$4,200,000',
    status: ['SALE'],
    beds: 5,
    baths: 4,
    sqft: 4500,
    liked: false,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
    title: '71 NW 26th Ave',
    address: '71 NW 26th Ave, Portland, OR 97210',
    price: '$420,000',
    status: ['SALE', 'RENT'],
    beds: 2,
    baths: 1,
    sqft: 950,
    liked: false,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    title: '100 Manhattan Ave Penthouse',
    address: '100 Manhattan Ave, New York, NY 10001',
    price: '$8,500,000',
    status: ['SALE'],
    beds: 4,
    baths: 4,
    sqft: 3200,
    liked: false,
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    title: '12 Baker St',
    address: '12 Baker St, London, W1U 3BW, UK',
    price: '£1,250,000',
    status: ['SALE'],
    beds: 4,
    baths: 3,
    sqft: 2100,
    liked: false,
  },
];

// Slides for hero section
const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80',
    status: 'FOR RENT',
    statusColor: '#7ed957',
    title: '871 CRENSHAW BLVD',
    price: '$2,250,500',
    priceColor: '#7ed957',
  },
  {
    bg: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1500&q=80',
    status: 'FOR SALE',
    statusColor: '#ff4d4d',
    title: '625 S. BERENDO ST',
    price: '$1,000,500',
    priceColor: '#7ed957',
  },
];

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


function HomeSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 350);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 350);
  };

  const slide = slides[index];

  return (
    <div
      className={`hero-section${fade ? ' fade' : ''}`}
      style={{ backgroundImage: `url('${slide.bg}')` }}
    >
      <Navbar />
      <div className="hero-content">
        <button
          className="for-rent-btn"
          style={{ background: slide.statusColor }}
        >
          {slide.status}
        </button>
        <h1 className="property-title">{slide.title}</h1>
        <h2 className="property-price" style={{ color: slide.priceColor }}>
          {slide.price}
        </h2>
        <button className="see-details-btn">SEE DETAILS</button>
      </div>
      <button className="arrow-btn left" onClick={prevSlide}>&#8592;</button>
      <button className="arrow-btn right" onClick={nextSlide}>&#8594;</button>
    </div>
  );
}

// Property Card for grid/list
function PropertyCard({ property, grid }) {
  return grid ? (
    <div className="property-card-grid">
      <div className="property-img-wrap">
        <img src={property.image} alt={property.title} className="property-img" />
        <div className="property-status-wrap">
          {property.status.map((s) => (
            <span
              key={s}
              className={`property-status property-status-${s.toLowerCase()}`}
            >
              {s}
            </span>
          ))}
        </div>
        <button className="property-like-btn">
          <span role="img" aria-label="like" className="property-like-icon">&#9825;</span>
        </button>
      </div>
      <div className="property-card-body">
        <div className="property-title-grid">{property.title}</div>
        <div className="property-address-grid">
          <span role="img" aria-label="location">📍</span> {property.address}
        </div>
        <div className="property-price-grid">{property.price}</div>
        <div className="property-info-grid">
          <span>BEDS<br /><b>{property.beds}</b></span>
          <span>BATHS<br /><b>{property.baths}</b></span>
          <span>SQ FT<br /><b>{property.sqft.toLocaleString()}</b></span>
        </div>
      </div>
    </div>
  ) : (
    <div className="property-card-list">
      <div className="property-img-wrap-list">
        <img src={property.image} alt={property.title} className="property-img-list" />
        <div className="property-status-wrap-list">
          {property.status.map((s) => (
            <span
              key={s}
              className={`property-status property-status-${s.toLowerCase()}`}
            >
              {s}
            </span>
          ))}
        </div>
        <button className="property-like-btn-list">
          <span role="img" aria-label="like" className="property-like-icon-list">&#9825;</span>
        </button>
      </div>
      <div className="property-card-body-list">
        <div className="property-title-list">{property.title}</div>
        <div className="property-address-list">
          <span role="img" aria-label="location">📍</span> {property.address}
        </div>
        <div className="property-price-list">{property.price}</div>
        <div className="property-desc-list">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse.
        </div>
        <div className="property-info-list">
          <span>BEDS<br /><b>{property.beds}</b></span>
          <span>BATHS<br /><b>{property.baths}</b></span>
          <span>SQ FT<br /><b>{property.sqft.toLocaleString()}</b></span>
        </div>
      </div>
    </div>
  );
}

// Filter/Search Bar (now functional)
function PropertyFilterBar() {
  const [filters, setFilters] = useState({
    listingType: 'Condo',
    offerType: 'For Sale',
    city: 'New York'
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // You would implement actual filtering logic here
  };

  return (
    <div className="property-filter-bar">
      <div className="property-filter-group">
        <label>LISTING TYPES</label>
        <select 
          value={filters.listingType} 
          onChange={(e) => handleFilterChange('listingType', e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            cursor: 'pointer',
            appearance: 'menulist',
            MozAppearance: 'menulist',
            WebkitAppearance: 'menulist'
          }}
        >
          <option>Condo</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Commercial</option>
        </select>
      </div>
      <div className="property-filter-group">
        <label>OFFER TYPE</label>
        <select 
          value={filters.offerType} 
          onChange={(e) => handleFilterChange('offerType', e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            cursor: 'pointer',
            appearance: 'menulist',
            MozAppearance: 'menulist',
            WebkitAppearance: 'menulist'
          }}
        >
          <option>For Sale</option>
          <option>For Rent</option>
          <option>For Lease</option>
        </select>
      </div>
      <div className="property-filter-group">
        <label>SELECT CITY</label>
        <select 
          value={filters.city} 
          onChange={(e) => handleFilterChange('city', e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            cursor: 'pointer',
            appearance: 'menulist',
            MozAppearance: 'menulist',
            WebkitAppearance: 'menulist'
          }}
        >
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>Miami</option>
          <option>San Francisco</option>
          <option>Boston</option>
        </select>
      </div>
      <button className="property-search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
}
// Grid/List Toggle and Sort Bar
function PropertyGridBar({ grid, setGrid }) {
  const [sortBy, setSortBy] = useState('default');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const handleSortChange = (value) => {
    setSortBy(value);
    setShowSortDropdown(false);
    // You would implement actual sorting logic here
    console.log('Sorting by:', value);
  };

  return (
    <div className="property-grid-bar">
      <span
        className={`property-grid-icon${grid ? ' active' : ''}`}
        onClick={() => setGrid(true)}
        title="Grid"
      >
        <svg width="22" height="22" viewBox="0 0 22 22"><rect x="2" y="2" width="7" height="7" fill="#444"/><rect x="13" y="2" width="7" height="7" fill="#444"/><rect x="2" y="13" width="7" height="7" fill="#444"/><rect x="13" y="13" width="7" height="7" fill="#444"/></svg>
      </span>
      <span
        className={`property-grid-icon${!grid ? ' active' : ''}`}
        onClick={() => setGrid(false)}
        title="List"
      >
        <svg width="22" height="22" viewBox="0 0 22 22"><rect x="2" y="2" width="18" height="4" fill="#444"/><rect x="2" y="9" width="18" height="4" fill="#444"/><rect x="2" y="16" width="18" height="4" fill="#444"/></svg>
      </span>
      <div className="property-sort-bar">
        <span className="property-sort-option active">All</span>
        <span className="property-sort-option">Rent</span>
        <span className="property-sort-option">Sale</span>
        <div 
          className="property-sort-option" 
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => setShowSortDropdown(!showSortDropdown)}
        >
          Sort by <span style={{fontSize:'1.1em'}}>&#9662;</span>
          
          {showSortDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '10px 0',
              minWidth: '150px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 100
            }}>
              <div 
                style={{
                  padding: '8px 15px',
                  cursor: 'pointer',
                  backgroundColor: sortBy === 'price-low' ? '#f5f5f5' : 'transparent'
                }}
                onClick={() => handleSortChange('price-low')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = sortBy === 'price-low' ? '#f5f5f5' : 'transparent'}
              >
                Price: Low to High
              </div>
              <div 
                style={{
                  padding: '8px 15px',
                  cursor: 'pointer',
                  backgroundColor: sortBy === 'price-high' ? '#f5f5f5' : 'transparent'
                }}
                onClick={() => handleSortChange('price-high')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = sortBy === 'price-high' ? '#f5f5f5' : 'transparent'}
              >
                Price: High to Low
              </div>
              <div 
                style={{
                  padding: '8px 15px',
                  cursor: 'pointer',
                  backgroundColor: sortBy === 'newest' ? '#f5f5f5' : 'transparent'
                }}
                onClick={() => handleSortChange('newest')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = sortBy === 'newest' ? '#f5f5f5' : 'transparent'}
              >
                Newest
              </div>
              <div 
                style={{
                  padding: '8px 15px',
                  cursor: 'pointer',
                  backgroundColor: sortBy === 'oldest' ? '#f5f5f5' : 'transparent'
                }}
                onClick={() => handleSortChange('oldest')}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = sortBy === 'oldest' ? '#f5f5f5' : 'transparent'}
              >
                Oldest
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
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

// Why Choose Us Section
function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2>WHY CHOOSE US?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.
          </p>
        </div>
        <div className="why-choose-us-features">
          <div className="feature-card">
            <div className="feature-icon">
              <FaHome size={40} color="#7ed957" />
            </div>
            <h3>Research Suburbs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
            <button className="feature-read-more">READ MORE</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine size={40} color="#7ed957" />
            </div>
            <h3>Sold Houses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
            <button className="feature-read-more">READ MORE</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt size={40} color="#7ed957" />
            </div>
            <h3>Security Priority</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
            <button className="feature-read-more">READ MORE</button>
          </div>
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

// Main property section
function PropertySection() {
  const [grid, setGrid] = useState(true);

  return (
    <div className="property-section">
      <PropertyFilterBar />
      <PropertyGridBar grid={grid} setGrid={setGrid} />
      <div className={grid ? "property-listings-grid" : "property-listings-list"}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} grid={grid} />
        ))}
      </div>
      <Pagination />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

function Buy() {
  return (
    <>
      <HomeSlider />
      <PropertySection />
    </>
  );
}

export default Buy;