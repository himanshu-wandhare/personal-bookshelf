import BookCard from "./BookCard";

import classes from "./BookList.module.css";

export default function BookList({ books }) {
  return (
    <div className={classes.list}>
      {books.map((book) => (
        <BookCard
          key={book.key}
          id={book.key}
          title={book.title}
          editionCount={book.edition_count}
        />
      ))}
    </div>
  );
}
