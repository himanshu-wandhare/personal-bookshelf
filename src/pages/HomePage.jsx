import { useState } from "react";
import { useDebounce, useSearchBooks } from "../hooks";

import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Button from "../components/Button";

import { Link } from "react-router-dom";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);
  const { books, isLoading, error } = useSearchBooks(debounceSearch);

  return (
    <>
      <div className="header">
        <div className="search-bar">
          <SearchBar onChange={setSearch} />
        </div>
        <Link to="/my-bookshelf">
          <Button>My Bookshelf</Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <BookList books={books} />
      )}
      {error && <div className="error">{error}</div>}
    </>
  );
}
