import Home from "../components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from "../components/Detail/Detail";
import {GlobalStyle} from "./globalStyles";
import Gallery from "../components/Detail/Gallery/Gallery";
import {CardList} from "../components/CardList.js/CardList";
import {ContextProvider} from "../components/Context/ContextProvider";

function App() {
  return (
    <>
      {" "}
      <ContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:number/Pokemonlist" element={<CardList />} />
            <Route
              path="/Pokemonlist/Detail/:userId/:name"
              element={<Detail />}
            />
            <Route path="/Pokemonlist/Detail/Gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
