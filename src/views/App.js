import "./App.css";
import Home from "../components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemondetails{id}" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
