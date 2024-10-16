
function Search({ handleChange }) {
  return (
    <input
      className="search"
      placeholder="Search for an island"
      onChange={handleChange}
    />
  )
}

export default Search