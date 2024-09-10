import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookListPage from "./pages/BookListPage";
import AddBookPage from "./pages/AddBookPage";
import BookDetailPage from "./pages/BookDetailPage";
import EditBookPage from "./pages/EditBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookListPage />}></Route>
          <Route path="/add" element={<AddBookPage />}></Route>
          <Route path="/book/:id" element={<BookDetailPage />}></Route>
          <Route path="/edit/:id" element={<EditBookPage />}></Route>
          <Route path="/delete/:id" element={<DeleteBookPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
