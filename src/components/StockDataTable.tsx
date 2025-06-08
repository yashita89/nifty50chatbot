import React, { useEffect, useState } from 'react';
import { StockData } from '../types';

const StockDataTable: React.FC = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/nifty50-sample.csv');
        const text = await response.text();
        const parsedData = parseCSV(text);
        setData(parsedData);
      } catch (err) {
        setError('Failed to fetch stock data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const parseCSV = (text: string): StockData[] => {
    const rows = text.split('\n').slice(1);
    return rows
      .filter(row => row.trim() !== '')
      .map(row => {
        const columns = row.split(',');
        return {
          symbol: columns[0],
          companyName: columns[1] || '',
          lastPrice: parseFloat(columns[2]),
          change: parseFloat(columns[3]),
          percentChange: parseFloat(columns[4]),
          volume: parseInt(columns[5]),
          marketCap: parseFloat(columns[6]) || 0,
        };
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>Percent Change</th>
          <th>Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((stock, idx) => (
          <tr key={idx}>
            <td>{stock.symbol}</td>
            <td>{stock.companyName}</td>
            <td>{stock.lastPrice}</td>
            <td>{stock.change}</td>
            <td>{stock.percentChange}</td>
            <td>{stock.volume}</td>
            <td>{stock.marketCap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockDataTable;