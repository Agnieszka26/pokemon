import "./App.css";
import Home from "../components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from "../components/Detail/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:userId/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
