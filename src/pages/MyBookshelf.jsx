import BookList from "../components/BookList";

import { useFetchSavedBooks } from "../hooks";

export default function MyBookshelfPage() {
  const { savedBooks } = useFetchSavedBooks();
  return (
    <div className="shelf-header">
      <h1>My Bookshelf</h1>
      <BookList books={savedBooks} showButton={false} />
    </div>
  );
}
