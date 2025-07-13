import { useState } from "react"

function AISuggestion() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I am your fashion AI. Ask me anything or upload a photo for suggestions.' }
  ]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [latestProducts, setLatestProducts] = useState([]);

  const handleSend = async () => {
    if (!input && !image) return;
    const userMsg = { from: 'user', text: input, image };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setImage(null);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('message', input);
      if (image) formData.append('image', image);
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'ai', text: data.reply, products: data.products || [] }]);
      setLatestProducts(data.products || []);
    } catch (e) {
      setMessages(msgs => [...msgs, { from: 'ai', text: 'Sorry, there was an error.' }]);
      setLatestProducts([]);
    }
    setLoading(false);
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      <div className="ai-suggestion-container" style={{ flex: 1, maxWidth: 480 }}>
        <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>AI Fashion Suggestion</h2>
        <div className="chat-box" style={{ minHeight: 320 }}>
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
          <input type="file" accept="image/*" onChange={handleImage} style={{ display: 'none' }} id="img-upload" />
          <label htmlFor="img-upload" className="img-upload-btn">📷</label>
          <button onClick={handleSend} className="send-btn" disabled={loading || (!input && !image)}>Send</button>
        </div>
      </div>

      <div className="ai-product-suggestions" style={{ flex: 1, minWidth: 320 }}>
        <h3 style={{ marginBottom: '1rem' }}>AI Recommendations</h3>
        {latestProducts.length === 0 && (
          <div style={{ color: '#888' }}>No suggestions yet. Ask the AI for outfit ideas!</div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {latestProducts.map((product, idx) => (
            <div key={product._id || idx} className="ai-product-card" style={{ width: 120, marginBottom: 16 }}>
              <img
                src={
                  typeof product.images === 'string'
                    ? product.images.split('~')[0].trim()
                    : Array.isArray(product.images)
                      ? product.images[0]
                      : ''
                }
                alt={product.title || product.name}
                className="ai-product-img"
                style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8, marginBottom: 4 }}
              />
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>
                {product.title || product.name}
              </div>
              <div style={{ fontSize: 12, color: '#666' }}>
                ₹{product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AISuggestion;
