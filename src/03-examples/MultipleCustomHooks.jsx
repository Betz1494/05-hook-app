import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment, reset } =  useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const {author, quote } = !!data && data[0]; //Si data no viene null,entonces desestructurar data[0]

  //console.log({ data, counter, hasError });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        isLoading ?  <LoadingQuote/> : <Quote quote={quote} author={author}/> 
      }

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}>
        Next quote
      </button>

      <button
        className="btn btn-info"
        onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

{/* <LoadingQuote></LoadingQuote> */}
{/* <Quote></Quote> */}