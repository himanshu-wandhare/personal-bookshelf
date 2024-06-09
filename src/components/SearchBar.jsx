import classes from "./SearchBar.module.css";

export default function SearchBar({ onChange }) {
  return (
    <div className={classes.searchBar} style={{ flexGrow: "1" }}>
      <label htmlFor="search-bar">Search book by name</label>
      <input
        type="text"
        placeholder="Start searching books"
        id="search-bar"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
