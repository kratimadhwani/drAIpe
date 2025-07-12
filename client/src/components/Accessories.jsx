import { useState } from 'react'

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

export default Accessories;