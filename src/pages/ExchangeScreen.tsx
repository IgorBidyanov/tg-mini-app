import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import '@/styles/Exchangescreen.css'

interface CurrencyData {
  [key: string]: number;
}

const ExchangeScreen: React.FC = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);

  const today = useMemo((): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}.${month}.${year}`;
  }, []);

  const usdCurrency = useMemo((): string | null => {
    return currencyData ? currencyData['usd-rub'].toFixed(2) : null;
  }, [currencyData]);

  const eurCurrency = useMemo((): string | null => {
    return currencyData ? currencyData['eur-rub'].toFixed(2) : null;
  }, [currencyData]);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get<CurrencyData>('https://status.neuralgeneration.com/api/currency');
        setCurrencyData(response.data);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyData();
  }, []);

  return (
    <section className='exchange'>
      <h1>Курс валют</h1>
      {currencyData ? (
        <div>
          <p>Дата: { today }</p>
          <p>USD: { usdCurrency } RUB</p>
          <p>EUR: { eurCurrency } RUB</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </section>
  );
};

export default ExchangeScreen;