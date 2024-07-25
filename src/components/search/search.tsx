import { useQueryProducts } from '../../hooks/useFetchQuery';
import { SearchInput } from './search-input';
import styles from './search.module.css';
import { HighlightText } from '../shared/highlight';

export const Search = () => {
  const { fetchQuery, query, products, error } = useQueryProducts();
  console.log(products);
  console.error(error?.message);
  return (
    <section className={styles.container}>
      <SearchInput handleOnChange={fetchQuery} />
      {products.length > 0 ? (
        <ul title="autocomplete options" role="listbox">
          {products.map((p) => {
            return (
              <li tabIndex={0} role="option" aria-atomic="true" aria-label={p.title} key={p.id}>
                <img alt={p.description} src={p.thumbnail} />
                <HighlightText query={query}>{`${p.title} - ${p.description}`}</HighlightText>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
};
