import classes from "./BookCard.module.css";

import Button from "./Button";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BookCard = ({ id: key, title, editionCount }) => {
  const [showButton, setShowButton] = useState(true);
  const { pathname } = useLocation();

  const didBookInBookShelf = () =>
    (JSON.parse(localStorage.getItem("BOOKSHELF")) || []).some(
      (book) => key === book.key
    );

  const handleClick = () => {
    const books = JSON.parse(localStorage.getItem("BOOKSHELF")) || [];
    books.push({ key, title, edition_count: editionCount });
    localStorage.setItem("BOOKSHELF", JSON.stringify(books));
    setShowButton(false);
  };

  useEffect(() => {
    if (pathname.startsWith("/my-bookshelf")) {
      setShowButton(false);
    } else {
      setShowButton(!didBookInBookShelf());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${classes.card} ${classes.book}`}>
      <div>
        <h3>Title:</h3>
        <h3 className={classes.title}>{title}</h3>
        <p>Edition Count: {editionCount}</p>
      </div>
      {showButton && (
        <div className="center">
          <Button onClick={handleClick}>Add to Bookshelf</Button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
