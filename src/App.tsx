import React, { useState } from 'react';
import StockDataTable from './components/StockDataTable';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, input]);
    setInput('');
    // Add logic to send the message to your AI backend and handle the response here
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      padding: 0,
      margin: 0
    }}>
      <header style={{
        background: '#1976d2',
        color: '#fff',
        padding: '24px 0',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{ margin: 0, fontSize: 36, letterSpacing: 1 }}>Nifty50 AI Chatbot</h1>
        <p style={{ margin: 0, fontSize: 18, opacity: 0.9 }}>Ask anything about Nifty50 stocks!</p>
      </header>
      <main style={{
        maxWidth: 800,
        margin: '40px auto',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 4px 24px rgba(25, 118, 210, 0.08)',
        padding: 32
      }}>
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, color: '#1976d2', marginBottom: 16 }}>Nifty50 Stocks</h2>
          <StockDataTable />
        </section>
        <section>
          <h2 style={{ fontSize: 22, color: '#1976d2', marginBottom: 16 }}>Chat</h2>
          <div style={{
            background: '#f5f5f5',
            borderRadius: 8,
            padding: 16,
            minHeight: 180,
            marginBottom: 16,
            maxHeight: 250,
            overflowY: 'auto'
          }}>
            {messages.length === 0 ? (
              <div style={{ color: '#888' }}>Ask something about Nifty50 stocks...</div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} style={{
                  margin: '8px 0',
                  padding: 10,
                  background: '#e3f2fd',
                  borderRadius: 6,
                  textAlign: 'left'
                }}>
                  <b style={{ color: '#1976d2' }}>You:</b> {msg}
                </div>
              ))
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 6,
                border: '1px solid #bdbdbd',
                fontSize: 16
              }}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: '12px 24px',
                borderRadius: 6,
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;