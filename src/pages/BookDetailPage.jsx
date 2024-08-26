import React from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { id } = useParams();
  return <div>BookDetailPage{id}</div>;
};

export default BookDetailPage;
