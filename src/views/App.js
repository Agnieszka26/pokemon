import Home from "../components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from "../components/Detail/Detail";
import {GlobalStyle} from "./globalStyles";
import Gallery from "../components/Detail/Gallery/Gallery";
import {CardList} from "../components/CardList.js/CardList";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Pokemonlist/Detail/:userId/:name"
            element={<Detail />}
          />
          <Route
            path="/Pokemonlist/Detail/:userId/:name/Gallery"
            element={<Gallery />}
          />
          <Route path="/:number/Pokemonlist" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
