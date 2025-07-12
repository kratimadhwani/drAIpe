import { useState } from 'react'

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

export default Home;