import Home from "../components/Context/ContextHome";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from "../components/Detail/Detail";
import {GlobalStyle} from "./globalStyles";
import Gallery from "../components/Detail/Gallery/Gallery";
import {CardList} from "../components/CardList.js/CardList";
import {HomeContextProvider} from "../components/Context/HomeContextProvider";
import {ContextCardListProvider} from "../components/CardList.js/ContextCardListProvider";
import {CardProvider} from "../components/Card/CardContextProvider"
// import GlobalDataPokemonContextProvider from "../components/Home/GlobalDataPokemon/ContextData";
// import GlobalDataPokemon from './components/GlobalSpinner/GlobalSpinner'
// import GlobalDataPokemonContext from './context/GlobalSpinnerContext';

function App() {
  return (
    <>
      {" "}
      <HomeContextProvider>
        <ContextCardListProvider>
          <CardProvider >
          <GlobalStyle />
          <BrowserRouter>
            <Routes>

              {/* <Route path="/" element={<HomeContextProvider><Home /></HomeContextProvider>} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/:number/Pokemonlist" element={<CardList />} />
              {/* <Route
            path="/Pokemonlist/Detail/:userId/:name"
            element={<Detail />}
          />
          <Route
            path="/Pokemonlist/Detail/:userId/:name/Gallery"
            element={<Gallery />}
          /> */}


            </Routes>
          </BrowserRouter>
          </CardProvider>
        </ContextCardListProvider>
      </HomeContextProvider>
    </>
  );
}

export default App;
