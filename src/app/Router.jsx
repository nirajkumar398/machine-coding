import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import InfiniteScroll from "./pages/infinite-scroll";
import Home from "./pages/home";
import TicTacToe from "./pages/tic-tac-toe";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/machine-coding" element={<Home />} />
        <Route path="/machine-coding/pagination" element={<Pagination />} />
        <Route
          path="/machine-coding/infinite-scroll"
          element={<InfiniteScroll />}
        />
        <Route path="/machine-coding/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
