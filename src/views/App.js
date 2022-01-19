import Home from "../components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from "../components/Detail/Detail";
import {GlobalStyle} from "./globalStyles";
import Gallery from "../components/Detail/Gallery/Gallery";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:userId/:name" element={<Detail />} />
          <Route path="/Detail/:userId/:name/Gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
