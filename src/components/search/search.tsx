import { useQueryProducts } from "../../hooks/useFetchQuery";
import { SearchBar } from "./search-bar";
import styles from "./search.module.css";

export const Search = () => {
  const { fetchQuery, products, isLoading, error } = useQueryProducts();
  console.log(isLoading);
  console.log(products);
  console.log(error?.message);
  return (
    <section className={styles.container}>
      <SearchBar handleOnChange={fetchQuery} />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.id} - {p.title} - {p.description}
          </li>
        ))}
      </ul>
    </section>
  );
};
