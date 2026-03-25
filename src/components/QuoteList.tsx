import { useState } from "react";
import quotesData from '../data/quote.json';

interface Quote {
  id: string,
  quote: string
}
const QuoteList = () => {
  const [quotes, setQuotes] = useState<Quote[]>(quotesData as Quote[])
  return (<>{quotes.map((quote: Quote) => 

    <p key={quote.id}>{quote.quote}</p>
  )}</>)
}

export default QuoteList;