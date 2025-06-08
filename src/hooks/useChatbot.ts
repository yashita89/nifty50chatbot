import { useState } from 'react';

const useChatbot = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (userMessage: string) => {
        setMessages((prev) => [...prev, { user: userMessage, bot: '' }]);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5002/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].bot = data.reply;
                return newMessages;
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].bot = 'Sorry, something went wrong.';
                return newMessages;
            });
        } finally {
            setLoading(false);
        }
    };

    return { messages, loading, sendMessage };
};

export default useChatbot;