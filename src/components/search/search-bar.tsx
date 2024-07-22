import styles from './search.module.css';

export const SearchBar = ({ handleOnChange }: { handleOnChange: (query: string) => void }) => {
  return (
    <div className={styles.wrapper}>
      <span>🔍</span>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};
