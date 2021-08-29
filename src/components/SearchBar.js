const SearchBar = ({ value, handleChange }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="filter posts..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
