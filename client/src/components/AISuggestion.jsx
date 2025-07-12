import { useState } from "react"

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

export default AISuggestion;