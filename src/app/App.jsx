import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./pages/pagination";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/machine-coding" element={<Home />} />
        <Route path="/machine-coding/pagination" element={<Pagination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
