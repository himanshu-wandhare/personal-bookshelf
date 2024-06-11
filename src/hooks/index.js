import axios from "axios";
import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export const useSearchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        console.log(data);
        setBooks(data.docs);
      } catch (error) {
        setError("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    query.length > 1 && fetchBooks();
  }, [query]);

  return { books, isLoading, error };
};

export const useFetchSavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("BOOKSHELF")) || [];
    setSavedBooks(savedBooks);
  }, []);

  return { savedBooks };
};
