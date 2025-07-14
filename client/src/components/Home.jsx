import { useState } from 'react'
import fashionGroupImg from '../assets/main pge.jpg';
import { MdDeviceHub } from "react-icons/md"; // Example: connected nodes
import { Link } from 'react-router-dom'


const products = [
  {
    id: 1,
    name: 'Black Hoodie',
    price: 432,
    rating: 4.8,
    reviews: 122,
    image: 'https://m.media-amazon.com/images/I/51M6utSrO8L._SY679_.jpg',
  },
  {
    id: 2,
    name: 'Black T-Shirt',
    price: 432,
    rating: 4.7,
    reviews: 112,
    image: 'https://chriscross.in/cdn/shop/files/ChrisCrossBlackCottonT-Shirt.jpg?v=1740994605',
  },
  {
    id: 3,
    name: 'Black Wallet',
    price: 432,
    rating: 4.6,
    reviews: 98,
    image: 'https://m.media-amazon.com/images/I/71i4TQF10cL._UY1100_.jpg',
  },
  {
    id: 4,
    name: 'Black Shoes',
    price: 432,
    rating: 4.9,
    reviews: 321,
    image: 'https://www.shutterstock.com/image-photo/black-shoes-isolated-on-white-600nw-2241492009.jpg',
  },
]

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
          <h1>Not Sure What You Need? Let AI Nudge You Right.</h1>
          <Link to="/ai-suggestion"><button className="shop-now">DR<span style={{ color: "#ec5a0d", fontWeight: "bold" }}>AI</span>PE ME</button></Link>
        </div>
        <div className="banner-illustration">
          <span
  aria-label="technology icon"
  style={{
    fontSize: '6rem', color: '#ffffffff', verticalAlign: 'middle'
  }}
>
    <MdDeviceHub />
</span>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 480px) 1fr',
          alignItems: 'center',
          gap: '3rem',
          marginTop: 32,
          justifyContent: 'center',
        }}
      >
        {/* 2x2 grid of product cards (left) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: 480,
          }}
        >
          {products.map(product => (
  <div className="product-card" key={product.id}>
    <button className="like-btn" onClick={() => toggleLike(product.id)}>
      {likes[product.id] ? '❤️' : '🤍'}
    </button>
    <img src={product.image} alt={product.name} className="product-img" />
    <div className="product-info">
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <button
        className="add-cart-btn"
        onClick={() => addToCart(product)}
        style={{
          width: '100%',
          marginTop: 12,
          padding: '10px 0',
          border: 'none',
          backgroundColor: '#000000ff',
          color: '#fff',
          borderRadius: 4,
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'background-color 0.3s ease',
          boxSizing: 'border-box',
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
))}

        </div>
        {/* Big image and heading (right) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={fashionGroupImg} alt="Fashion Group" style={{ width: '100%', maxWidth: 480, marginBottom: 24 }} />
          <div style={{ fontWeight: 900, fontSize: '2.5rem', textAlign: 'center', marginTop: 12, letterSpacing: '0.02em' }}>
            LET <span style={{ color: '#ec5a0d' }}>AI</span> HANDLE THE<br />FASHION FOMO.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
