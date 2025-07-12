import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Women from './components/Women'
import Men from './components/Men'
import Accessories from './components/Accessories'
import AISuggestion from './components/AISuggestion'
import Cart from './components/Cart'
import Login from './components/Login'
import './App.css'


const products = [
  {
    id: 1,
    name: 'Black Hoodie',
    price: 432,
    rating: 4.8,
    reviews: 122,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Black T-Shirt',
    price: 432,
    rating: 4.7,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Black Wallet',
    price: 432,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Black Shoes',
    price: 432,
    rating: 4.9,
    reviews: 321,
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Black Sunglasses',
    price: 432,
    rating: 4.5,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
]

function App() {
  // Global cart state
  const [cart, setCart] = useState([])

  return (
    <div>
      <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', borderBottom: '1px solid #eee'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>drAIpe</div>
        <nav>
          <ul style={{display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/ai-suggestion">AI Suggestion</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/login">Login/Sign In</Link></li>
          </ul>
        </nav>
      </header>
      <main style={{padding: '2rem'}}>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/women" element={<Women cart={cart} setCart={setCart} />} />
          <Route path="/men" element={<Men cart={cart} setCart={setCart} />} />
          <Route path="/accessories" element={<Accessories cart={cart} setCart={setCart} />} />
          <Route path="/ai-suggestion" element={<AISuggestion />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
