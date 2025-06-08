import React, { useState } from 'react';
import useChatbot from '../hooks/useChatbot';
const Chatbot: React.FC = () => {
    const { messages, sendMessage } = useChatbot();
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <React.Fragment key={index}>
                        <div className="chatbot-message user">{msg.user}</div>
                        {msg.bot && <div className="chatbot-message ai">{msg.bot}</div>}
                    </React.Fragment>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;