import { useState, useEffect } from 'react';

function Men({ cart, setCart }) {
  const [likes, setLikes] = useState({});
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/products/men?page=${page}&limit=50`)
      .then(res => res.json())
      .then(data => {
        setMenProducts(data.products);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  const toggleLike = (id) => {
    setLikes(likes => ({ ...likes, [id]: !likes[id] }));
  };

  const addToCart = (product) => {
    setCart(cart => [...cart, product]);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Men’s Collection</h2>
      <div className="product-grid">
        {menProducts.map(product => (
          <div className="product-card" key={product._id}>
            <button className="like-btn" onClick={() => toggleLike(product._id)}>
              {likes[product._id] ? '❤️' : '🤍'}
            </button>
            <img src={product.images} alt={product.title} className="product-img" />
            <div className="product-info">
              <div className="product-name">{product.title}</div>
              <div className="product-price">₹{product.price}</div>
              <div className="product-rating">
                {'★'.repeat(Math.round(product.rating?.rate || 0))}
                <span className="product-reviews">
                  ({product.rating?.count || 0})
                </span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span style={{ margin: '0 1rem' }}>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Men;
