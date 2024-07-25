export const HighlightText: React.FC<{ query: string; children: string }> = ({
  query,
  children,
}) => {
  const decomposedString = children.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {decomposedString.map((part, i) =>
        part.toLocaleLowerCase() === query.toLocaleLowerCase() ? <mark key={i}>{part}</mark> : part,
      )}
    </span>
  );
};
