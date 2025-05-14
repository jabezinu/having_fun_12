import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [menuItems, setMenuItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get('/api/menu')
        setMenuItems(res.data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch menu items')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMenuItems()
  }, [])

  // Filter menu items by category
  const filteredMenuItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="restaurant-container">
      <header className="restaurant-header">
        <h1>Delicious Bites</h1>
        <p className="restaurant-tagline">Experience the finest cuisine in town</p>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Delicious Bites</h2>
          <p>Serving exceptional dishes made with love since 2010</p>
          <button className="cta-button">Reserve a Table</button>
        </div>
      </section>
      
      <section className="menu-section">
        <h2>Our Menu</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="category-filters">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={activeCategory === 'appetizer' ? 'active' : ''} 
            onClick={() => setActiveCategory('appetizer')}
          >
            Appetizers
          </button>
          <button 
            className={activeCategory === 'main' ? 'active' : ''} 
            onClick={() => setActiveCategory('main')}
          >
            Main Courses
          </button>
          <button 
            className={activeCategory === 'dessert' ? 'active' : ''} 
            onClick={() => setActiveCategory('dessert')}
          >
            Desserts
          </button>
          <button 
            className={activeCategory === 'beverage' ? 'active' : ''} 
            onClick={() => setActiveCategory('beverage')}
          >
            Beverages
          </button>
        </div>
        
        {isLoading ? (
          <p className="loading-text">Loading menu items...</p>
        ) : (
          <div className="menu-grid">
            {filteredMenuItems.length === 0 ? (
              <p>No menu items found for this category.</p>
            ) : (
              filteredMenuItems.map(item => (
                <div key={item._id} className="menu-item">
                  <div className="menu-item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="menu-item-image" 
                      onError={(e) => {
                        e.target.src = '/default-food.jpg'; 
                        e.target.onerror = null;
                      }}
                    />
                    {item.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="menu-item-details">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <p className="menu-item-price">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>At Delicious Bites, we believe in serving quality food made with the freshest ingredients. 
               Our chefs combine traditional techniques with modern innovation to create memorable dining experiences.</p>
            <p>Established in 2010, we have been serving the community with passion and dedication.</p>
          </div>
          <div className="about-image">
            <img src="/restaurant-interior.jpg" alt="Restaurant interior" onError={(e) => {e.target.style.display = 'none'}} />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p><strong>Address:</strong> 123 Gourmet Street, Foodville</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@deliciousbites.com</p>
            <p><strong>Hours:</strong> Mon-Sat: 11am-10pm, Sun: 12pm-9pm</p>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button className="form-button">Send Message</button>
          </div>
        </div>
      </section>

      <footer className="restaurant-footer">
        <p>&copy; 2023 Delicious Bites. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
