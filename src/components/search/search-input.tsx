import styles from './search.module.css';

export const SearchInput: React.FC<{ handleOnChange: (query: string) => void }> = ({
  handleOnChange,
}) => {
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
