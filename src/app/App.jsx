import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import Home from "./pages/home";
import InfiniteScroll from "./pages/infinite-scroll";

const App = () => {
  return (
    <BrowserRouter basename="/machine-coding">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" component={InfiniteScroll} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
