import CardCustom from "./CardCustom";
import type {Quote}  from "../types/quote";

interface QuoteListProps {
  quoteList: Quote[]
}
const QuoteList = (props: QuoteListProps) => {
  const {quoteList} = props;
  return (
    <>{quoteList.map((quote: Quote) => 
      <CardCustom key={quote.id} quote={quote.quote}/>
    )}
    </>
  )
}

export default QuoteList;