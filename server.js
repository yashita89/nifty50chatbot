const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    // Dummy response for testing
    res.json({ reply: `You said: ${userMessage}` });
});

app.listen(5002, () => {
    console.log('Server running on http://localhost:5002');
});