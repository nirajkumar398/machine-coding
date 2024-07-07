import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pagination from "./pages/pagination";
import InfiniteScroll from "./pages/infinite-scroll";

const App = () => {
  return (
    <BrowserRouter basename="/machine-coding">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
