import { useState } from 'react'


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

export default Women;