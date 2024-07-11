import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import InfiniteScroll from "./pages/infinite-scroll";
import Home from "./pages/home";
import TicTacToe from "./pages/tic-tac-toe";

const Router = () => {
  return (
    <BrowserRouter basename="/machine-coding">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
