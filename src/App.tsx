import { useEffect, useState } from 'react'
import './App.css'
import ButtonCustom from './components/ButtonCustom'
import InputCustom from './components/InputCustom'
import QuoteList from './components/QuoteList'
import quotesData from './data/quote.json';
import type {Quote}  from "./types/quote";

function App() {

  const [quotes, setQuotes] = useState<Quote[]>(quotesData as Quote[])
  const [input, setInput] = useState<string>('')

  const handleSaveQuote = () => {
    console.log('this is the save quote function hit');
    const lastId = parseInt(quotes[quotes.length - 1].id);
    const newId = (lastId + 1).toString();
    const newQuote: Quote = {
      quote : input,
      id : newId
    }
    setQuotes([...quotes, newQuote]);
    setInput('');
  }

  return (
    <>
      <ButtonCustom input={input} handleSaveQuote={handleSaveQuote}/>
      <InputCustom input={input} setInput={setInput} />
      <QuoteList quoteList={quotes}/>
    </>
  )
}

export default App
