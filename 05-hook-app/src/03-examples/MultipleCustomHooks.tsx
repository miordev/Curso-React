import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote }: any = !!data && data[0];

  console.log({ data, hasError, isLoading });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
        Next Quote
      </button>
    </>
  );
};
