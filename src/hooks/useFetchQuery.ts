import { useEffect, useState, useRef } from 'react';
const LIMIT = 5;
export const useFetchQuery = () => {
  const queryMap = useRef(new Map());
  const [query, setQuery] = useState<string>();
  const [data, setData] = useState<Array<unknown>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDataFromQuery = async (_query: string, controller: AbortController) => {
      try {
        console.log('Fetching data');
        const { signal } = controller;
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${_query}&limit=${LIMIT}`,
          {
            signal,
          },
        );
        const { products } = await response.json();

        queryMap.current.set(_query, products);
        setData(products);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    let controller: AbortController | null = null;
    let timeoutId = 0;

    if (!query?.trim()) {
      setData([]);
    } else if (queryMap.current.has(query)) {
      console.log('Getting data from cache');
      setData(queryMap.current.get(query));
    } else {
      setIsLoading(true);
      controller = new AbortController();
      timeoutId = setTimeout(getDataFromQuery.bind(null, query, controller), 250); // debounce
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

  return { data, isLoading, fetchQuery: setQuery };
};
