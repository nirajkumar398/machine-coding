import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter basename="/machine-coding">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
