import axios from 'axios';

const API_URL = 'https://your-ai-model-api-endpoint.com'; // Replace with your actual API endpoint

export const sendMessageToAI = async (message: string) => {
    try {
        const response = await axios.post(`${API_URL}/chat`, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message to AI:', error);
        throw error;
    }
};

export const fetchStockData = async () => {
    try {
        const response = await axios.get(`${API_URL}/stocks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};