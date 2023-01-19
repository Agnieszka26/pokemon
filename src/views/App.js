import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardList } from "../components/CardList.js/CardList";
import { ContextProvider } from "../components/Context/ContextProvider";
import Detail from "../components/Detail/Detail";
import Gallery from "../components/Detail/Gallery/Gallery";
import Home from "../components/Home/Home";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <>
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
