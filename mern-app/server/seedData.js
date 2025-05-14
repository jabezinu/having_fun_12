const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Define Menu Item Schema (same as in index.js)
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['appetizer', 'main', 'dessert', 'beverage']
  },
  image: {
    type: String,
    default: 'default-food.jpg'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Sample menu items data
const menuItems = [
  {
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: 4.99,
    category: 'appetizer',
    image: 'https://source.unsplash.com/500x400/?garlic,bread',
    featured: false
  },
  {
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomatoes, basil, and balsamic glaze',
    price: 6.99,
    category: 'appetizer',
    image: 'https://source.unsplash.com/500x400/?bruschetta',
    featured: true
  },
  {
    name: 'Mozzarella Sticks',
    description: 'Deep-fried mozzarella sticks with marinara sauce',
    price: 7.99,
    category: 'appetizer',
    image: 'https://source.unsplash.com/500x400/?mozzarella,sticks',
    featured: false
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Homemade pasta with rich meat sauce and Parmesan cheese',
    price: 12.99,
    category: 'main',
    image: 'https://source.unsplash.com/500x400/?spaghetti',
    featured: true
  },
  {
    name: 'Grilled Salmon',
    description: 'Fresh salmon fillet grilled to perfection with lemon butter sauce',
    price: 16.99,
    category: 'main',
    image: 'https://source.unsplash.com/500x400/?salmon',
    featured: true
  },
  {
    name: 'Vegetable Stir Fry',
    description: 'Fresh seasonal vegetables stir-fried with tofu and teriyaki sauce',
    price: 10.99,
    category: 'main',
    image: 'https://source.unsplash.com/500x400/?stirfry',
    featured: false
  },
  {
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
    price: 11.99,
    category: 'main',
    image: 'https://source.unsplash.com/500x400/?pizza',
    featured: false
  },
  {
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with layers of chocolate ganache',
    price: 6.99,
    category: 'dessert',
    image: 'https://source.unsplash.com/500x400/?chocolate,cake',
    featured: false
  },
  {
    name: 'Tiramisu',
    description: 'Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 7.99,
    category: 'dessert',
    image: 'https://source.unsplash.com/500x400/?tiramisu',
    featured: true
  },
  {
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce, whipped cream, and a cherry on top',
    price: 5.99,
    category: 'dessert',
    image: 'https://source.unsplash.com/500x400/?icecream',
    featured: false
  },
  {
    name: 'Soda',
    description: 'Your choice of refreshing carbonated beverage',
    price: 2.49,
    category: 'beverage',
    image: 'https://source.unsplash.com/500x400/?soda',
    featured: false
  },
  {
    name: 'House Wine',
    description: 'Glass of our premium house wine, red or white',
    price: 6.99,
    category: 'beverage',
    image: 'https://source.unsplash.com/500x400/?wine',
    featured: false
  },
  {
    name: 'Freshly Brewed Coffee',
    description: 'Hot coffee made from locally roasted beans',
    price: 2.99,
    category: 'beverage',
    image: 'https://source.unsplash.com/500x400/?coffee',
    featured: false
  }
];

// Function to seed data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Delete existing menu items
    await MenuItem.deleteMany({});
    console.log('Deleted existing menu items');

    // Insert new menu items
    const createdMenuItems = await MenuItem.insertMany(menuItems);
    console.log(`Inserted ${createdMenuItems.length} menu items`);

    console.log('Data seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

// Run the seed function
seedData(); 