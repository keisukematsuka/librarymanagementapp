import React from "react";
import { useParams } from "react-router-dom";
import dummyBooks from "../data/dummyData";

const BookDetailPage = () => {
  const { id } = useParams();
  const BookDetailList = dummyBooks.find(
    (book) => parseInt(id) === book.bookId
  );
  return (
    <>
      <h1>{BookDetailList.title}</h1>
      <p>
        <strong>著者:</strong> {BookDetailList.author}
      </p>
      <p>
        <strong>ISBN:</strong> {BookDetailList.isbn}
      </p>
      <p>
        <strong>出版年:</strong> {BookDetailList.publishedYear}
      </p>
      <p>
        <strong>ジャンル:</strong> {BookDetailList.genre}
      </p>
      <p>{BookDetailList.description}</p>
    </>
  );
};

export default BookDetailPage;

// ダミーデータからインポート
// bookidをuseParamsで受け取る
// find関数で配列を指定
