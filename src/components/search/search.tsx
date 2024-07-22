import { useFetchQuery } from '../../hooks/useFetchQuery';
import { SearchBar } from './search-bar';
import styles from './search.module.css';

export const Search = () => {
  const { fetchQuery, data, isLoading } = useFetchQuery();
  console.log(data);
  return (
    <section className={styles.container}>
      <SearchBar
        handleOnChange={(query: string) => {
          fetchQuery(query);
        }}
      />
      <ul>
        {data.map((p) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </section>
  );
};
