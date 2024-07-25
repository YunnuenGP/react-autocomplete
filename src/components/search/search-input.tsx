import styles from './search.module.css';

export const SearchInput = ({ handleOnChange }: { handleOnChange: (query: string) => void }) => {
  return (
    <div role="presentation" className={styles.wrapper}>
      <span>🔍</span>
      <input
        type="text"
        placeholder="Type to search..."
        aria-autocomplete="list"
        onChange={(e) => handleOnChange(e.target.value.trim())}
      />
    </div>
  );
};
