export interface ChatMessage {
    id: string;
    user: string;
    message: string;
    timestamp: Date;
}

export interface StockData {
    symbol: string;
    companyName: string;
    lastPrice: number;
    change: number;
    percentChange: number;
    volume: number;
    marketCap: number;
}


export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}