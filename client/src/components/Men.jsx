
import { useState } from 'react'

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

export default Men;