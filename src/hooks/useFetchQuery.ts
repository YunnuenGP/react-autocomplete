import { useEffect, useState, useRef } from 'react';
import { fetchSearchProducts, Product } from '../api/products';

export const useQueryProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState('');
  const queryMap = useRef(new Map());

  useEffect(() => {
    const getDataFromQuery = async (_query: string, controller: AbortController) => {
      try {
        console.log('Fetching data');

        const products = await fetchSearchProducts(_query, controller);

        queryMap.current.set(_query, products);
        setProducts(products);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          setProducts([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    const _query = query.toLocaleLowerCase();
    let controller: AbortController | null = null;
    let timeoutId = 0;

    if (!_query) {
      setProducts([]);
    } else if (queryMap.current.has(_query)) {
      console.log('Getting data from cache');
      setProducts(queryMap.current.get(_query));
    } else {
      setIsLoading(true);
      controller = new AbortController();
      timeoutId = setTimeout(getDataFromQuery.bind(null, _query, controller), 250); // debounce
    }

    return () => {
      if (isLoading) {
        console.log('- - - - ABORTING - - - -');
        clearTimeout(timeoutId);
        controller?.abort();
        setIsLoading(false);
      }
    };
  }, [query]);

  return { products, query, fetchQuery: setQuery, isLoading, error };
};
