import React from "react";
import dummyBooks from "../data/dummyData";
import { Link } from "react-router-dom";

const BookListPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-brown-800 mb-8 text-center">
          書籍一覧
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyBooks.map((book) => (
            <li
              key={book.bookId}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/book/${book.bookId}`} className="block p-6 h-full">
                <div className="flex items-center">
                  <div className="w-16 h-24 bg-amber-200 rounded-md mr-4 flex-shrink-0"></div>
                  <div>
                    <h2 className="text-xl font-semibold text-brown-900 mb-2">
                      {book.title}
                    </h2>
                    <p className="text-brown-600 text-sm">{book.author}</p>
                    <p className="text-amber-700 text-xs mt-2">
                      {book.publishedYear}年出版
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookListPage;
