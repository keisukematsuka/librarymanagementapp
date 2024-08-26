import React from "react";
import dummyBooks from "../data/dummyData";
import { Link } from "react-router-dom";

const BookListPage = () => {
  return (
    <div>
      <h1>書籍一覧ページ</h1>
      <ul>
        {dummyBooks.map((book) => (
          <li key={book.bookId}>
            <Link to={`/book/${book.bookId}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListPage;
