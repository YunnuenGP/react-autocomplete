const BASE_API_URL = 'https://dummyjson.com/products/search';
const LIMIT = 5;

export type Product = {
  id: number;
  title: string;
  description: string;
  images: Array<string>;
  thumbnail: string;
};

export const fetchSearchProducts = async (query: string, controller?: AbortController) => {
  const url = `${BASE_API_URL}?q=${query}&limit=${LIMIT}&select=title,id,description,images,thumbnail`;
  const options = {
    ...(controller && { signal: controller.signal }),
  };

  const response = await fetch(url, options);

  if (!response.ok) throw new Error('Network response was not ok');

  const { products } = await response.json();
  console.log(products);
  return products satisfies Array<Product>;
};
