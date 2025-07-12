import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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

function Home({ cart, setCart }) {
  const [likes, setLikes] = useState({})

  const toggleLike = (id) => {
    setLikes(likes => ({ ...likes, [id]: !likes[id] }))
  }
  const addToCart = (product) => {
    setCart(cart => [...cart, product])
  }

  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h1>Get Ready for the Ultimate Black Friday Fashion Extravaganza</h1>
          <button className="shop-now">Shop Now</button>
        </div>
        <div className="banner-illustration">
          <span role="img" aria-label="fashion person" style={{fontSize: '6rem'}}>🧑‍🎤</span>
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <button className="like-btn" onClick={() => toggleLike(product.id)}>
              {likes[product.id] ? '❤️' : '🤍'}
            </button>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {'★'.repeat(Math.round(product.rating))}
                <span className="product-reviews">({product.reviews})</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Women({ cart, setCart }) {
  const [likes, setLikes] = useState({})

  const womenProducts = [
    {
      id: 101,
      name: 'Elegant Black Dress',
      price: 599,
      rating: 4.9,
      reviews: 210,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 102,
      name: 'Classic Handbag',
      price: 349,
      rating: 4.8,
      reviews: 180,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 103,
      name: 'Stylish Heels',
      price: 289,
      rating: 4.7,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 104,
      name: 'Chic Sunglasses',
      price: 199,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 105,
      name: 'Cozy Scarf',
      price: 99,
      rating: 4.5,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const toggleLike = (id) => {
    setLikes(likes => ({ ...likes, [id]: !likes[id] }))
  }
  const addToCart = (product) => {
    setCart(cart => [...cart, product])
  }

  return (
    <div>
      <h2 style={{textAlign: 'left', marginBottom: '1.5rem'}}>Women’s Collection</h2>
      <div className="product-grid">
        {womenProducts.map(product => (
          <div className="product-card" key={product.id}>
            <button className="like-btn" onClick={() => toggleLike(product.id)}>
              {likes[product.id] ? '❤️' : '🤍'}
            </button>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {'★'.repeat(Math.round(product.rating))}
                <span className="product-reviews">({product.reviews})</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Men({ cart, setCart }) {
  const [likes, setLikes] = useState({})

  const menProducts = [
    {
      id: 201,
      name: 'Classic Black Suit',
      price: 799,
      rating: 4.9,
      reviews: 180,
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 202,
      name: 'Leather Wallet',
      price: 249,
      rating: 4.8,
      reviews: 140,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 203,
      name: 'Black Sneakers',
      price: 299,
      rating: 4.7,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 204,
      name: 'Stylish Sunglasses',
      price: 199,
      rating: 4.6,
      reviews: 90,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 205,
      name: 'Casual T-Shirt',
      price: 129,
      rating: 4.5,
      reviews: 70,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const toggleLike = (id) => {
    setLikes(likes => ({ ...likes, [id]: !likes[id] }))
  }
  const addToCart = (product) => {
    setCart(cart => [...cart, product])
  }

  return (
    <div>
      <h2 style={{textAlign: 'left', marginBottom: '1.5rem'}}>Men’s Collection</h2>
      <div className="product-grid">
        {menProducts.map(product => (
          <div className="product-card" key={product.id}>
            <button className="like-btn" onClick={() => toggleLike(product.id)}>
              {likes[product.id] ? '❤️' : '🤍'}
            </button>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {'★'.repeat(Math.round(product.rating))}
                <span className="product-reviews">({product.reviews})</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Accessories({ cart, setCart }) {
  const [likes, setLikes] = useState({})

  const accessoriesProducts = [
    {
      id: 301,
      name: 'Leather Belt',
      price: 89,
      rating: 4.8,
      reviews: 110,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 302,
      name: 'Wrist Watch',
      price: 299,
      rating: 4.9,
      reviews: 150,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 303,
      name: 'Silk Tie',
      price: 59,
      rating: 4.7,
      reviews: 80,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 304,
      name: 'Sunglasses',
      price: 129,
      rating: 4.6,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 305,
      name: 'Woolen Cap',
      price: 49,
      rating: 4.5,
      reviews: 60,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const toggleLike = (id) => {
    setLikes(likes => ({ ...likes, [id]: !likes[id] }))
  }
  const addToCart = (product) => {
    setCart(cart => [...cart, product])
  }

  return (
    <div>
      <h2 style={{textAlign: 'left', marginBottom: '1.5rem'}}>Accessories Collection</h2>
      <div className="product-grid">
        {accessoriesProducts.map(product => (
          <div className="product-card" key={product.id}>
            <button className="like-btn" onClick={() => toggleLike(product.id)}>
              {likes[product.id] ? '❤️' : '🤍'}
            </button>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {'★'.repeat(Math.round(product.rating))}
                <span className="product-reviews">({product.reviews})</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function AISuggestion() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I am your fashion AI. Ask me anything or upload a photo for suggestions.' }
  ])
  const [input, setInput] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input && !image) return
    const userMsg = { from: 'user', text: input, image }
    setMessages(msgs => [...msgs, userMsg])
    setInput('')
    setImage(null)
    setLoading(true)
    // Placeholder: send to /api/chat (implement backend as needed)
    try {
      const formData = new FormData()
      formData.append('message', input)
      if (image) formData.append('image', image)
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      setMessages(msgs => [...msgs, { from: 'ai', text: data.reply }])
    } catch (e) {
      setMessages(msgs => [...msgs, { from: 'ai', text: 'Sorry, there was an error.' }])
    }
    setLoading(false)
  }

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <div className="ai-suggestion-container">
      <h2 style={{textAlign: 'left', marginBottom: '1.5rem'}}>AI Fashion Suggestion</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.from}`}> 
            {msg.image && <img src={URL.createObjectURL(msg.image)} alt="upload" className="chat-img" />}
            <span>{msg.text}</span>
          </div>
        ))}
        {loading && <div className="chat-msg ai"><span>...</span></div>}
      </div>
      <div className="chat-input-row">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <input type="file" accept="image/*" onChange={handleImage} style={{display: 'none'}} id="img-upload" />
        <label htmlFor="img-upload" className="img-upload-btn">📷</label>
        <button onClick={handleSend} className="send-btn" disabled={loading || (!input && !image)}>Send</button>
      </div>
    </div>
  )
}
function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    setCart(cart => cart.filter((_, i) => i !== index))
  }
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0)
  return (
    <div>
      <h2 style={{textAlign: 'left', marginBottom: '1.5rem'}}>Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div>
          <div className="cart-list">
            {cart.map((item, i) => (
              <div className="cart-item" key={i}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(i)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total-row">
            <span>Total:</span>
            <span className="cart-total">${total}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  )
}
function Login() {
  const [tab, setTab] = useState('login')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (!loginEmail || !loginPassword) {
      setMessage('Please enter email and password.')
      return
    }
    setMessage('Logged in! (Demo only)')
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (!signupName || !signupEmail || !signupPassword) {
      setMessage('Please fill all fields.')
      return
    }
    setMessage('Account created! (Demo only)')
  }

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button className={tab === 'login' ? 'active' : ''} onClick={() => { setTab('login'); setMessage('') }}>Login</button>
        <button className={tab === 'signup' ? 'active' : ''} onClick={() => { setTab('signup'); setMessage('') }}>Sign Up</button>
      </div>
      {tab === 'login' ? (
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={signupName}
            onChange={e => setSignupName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={e => setSignupEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
      {message && <div className="auth-message">{message}</div>}
    </div>
  )
}

export default App
