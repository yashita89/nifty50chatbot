<<<<<<< HEAD
# nifty50chatbot
=======
# Nifty50 AI Chatbot

This project is a React application that utilizes the Nifty50 stock market dataset to develop an AI chatbot powered by a large language model. The chatbot provides improved assistance for stock market inquiries and displays relevant stock data.

## Project Structure

```
nifty50-ai-chatbot
├── public
│   └── index.html          # Main HTML file serving the React app
├── src
│   ├── components
│   │   ├── Chatbot.tsx     # Chatbot interface and logic
│   │   └── StockDataTable.tsx # Displays stock market data
│   ├── data
│   │   └── nifty50-sample.csv # Sample dataset for Nifty50 stocks
│   ├── hooks
│   │   └── useChatbot.ts    # Custom hook for chatbot logic
│   ├── utils
│   │   └── api.ts           # API functions for AI model interaction
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point for the React application
│   └── types
│       └── index.ts         # TypeScript interfaces and types
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nifty50-ai-chatbot
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The Chatbot component allows users to interact with the AI model by asking questions related to the Nifty50 stock market.
- The StockDataTable component displays the stock data from the Nifty50 dataset in a user-friendly format.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
>>>>>>> e6dad657 (first commit)
