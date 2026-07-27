import { useMemo, useState } from "react"

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR');

  const exchangeRates = {
    USD: 1,
    EUR: 0.5,
    GBP: 0.92,
    JPY: 120,
    IDR: 16000, // Indonesia
    AUD: 1.55,  // Australia
    CAD: 1.40   // Kanada
  }

  const amountInUSD = useMemo(() => {
    return amount / exchangeRates[fromCurrency]
  }, [amount, fromCurrency])

  const filteredResult = amountInUSD * exchangeRates[toCurrency];

  const finalAnswer = `${filteredResult.toFixed(2)} ${toCurrency}`

  return (
    <div id="container">
      <h1>Currency Converter</h1>
      <h4>{fromCurrency} to {toCurrency} Conversion</h4>
      <input type="number" name="" id="" value={amount} onChange={(e) => setAmount(Number(e.target.value))} /> <br />

      <label htmlFor="">Start Currency</label> <br />
      <select name="" id="" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD (United States)</option>
        <option value="EUR">EUR (Eurozone)</option>
        <option value="GBP">GBP (United Kingdom)</option>
        <option value="JPY">JPY (Japan)</option>
        <option value="IDR">IDR (Indonesia)</option>
        <option value="AUD">AUD (Australia)</option>
        <option value="CAD">CAD (Kanada)</option>
      </select> <br />

      <label htmlFor="">From Currency</label> <br />
      <select name="" id="" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD (United States)</option>
        <option value="EUR">EUR (Eurozone)</option>
        <option value="GBP">GBP (United Kingdom)</option>
        <option value="JPY">JPY (Japan)</option>
        <option value="IDR">IDR (Indonesia)</option>
        <option value="AUD">AUD (Australia)</option>
        <option value="CAD">CAD (Kanada)</option>
      </select>

      <p>{finalAnswer}</p>
    </div>
  )
}