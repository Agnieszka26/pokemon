// import React, {useState, useEffect, useContext, createContext} from "react";
// import {HomeStyle, Input, InputNumber} from "./Home.style";
// import {useNavigate} from "react-router-dom";
// import GlobalDataPokemonContextProvider from "../Context/ContextHome";

// const Home = () => {
//   const [validationFailed, setValidationFailed] = useState("");
//   const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);
//   // const { unicornTypes, setUnicornTypes } = useContext(ReferenceDataContext);
//   const [loading, setLoading] = useState(false);
//   const [pokemonData, setPokemonData] = useContext(
//     GlobalDataPokemonContextProvider
//   );

//   const validationStyles = {
//     validationText: {
//       padding: 0,
//     },
//   };

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   //const navigate = useNavigate();
//   const handleSubmit = () => {
//     if (numberOfPokemonsToFetch <= 0) {
//       setValidationFailed(true);
//     } else if (numberOfPokemonsToFetch > 1118) {
//       setNumberOfPokemonsToFetch(1118);
//       // navigate(`/${numberOfPokemonsToFetch}/Pokemonlist`);
//     } else {
//       //setNumberOfPokemonsToFetch(1118);
//       // navigate(`/${numberOfPokemonsToFetch}/Pokemonlist`);
//     }
//   };

//   const handleEnterPress = (e) => {
//     if (e.which === 13) {
//       handleSubmit();
//     }
//   };

//   const handleChange = (e) => {
//     setNumberOfPokemonsToFetch(e.target.value);
//     validationFailed && setValidationFailed(false);
//   };

//   //----------------------------------------

//   const url = `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemonsToFetch}`;

//   const getAllPokemons = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setPokemonData(data.results);
//     } catch (error) {
//       console.log("error getting all pokemons data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {
//         <HomeStyle>
//           <form>
//             {/* <label>
//               How many pokemons do you want to see?
//               <InputNumber
//                 validationFailed={validationFailed}
//                 type="number"
//                 placeholder="set numbers of pokemons"
//                 value={undefined}
//                 onChange={handleChange}
//                 onKeyPress={handleEnterPress}
//               />
//             </label>
//             {validationFailed && (
//               <div style={validationStyles.validationText}>
//                 the number must be higher than 0
//               </div>
//             )}
//             <Input
//               type="button" //sprawdzic submit
//               onClick={handleSubmit}
//               value="Load pokemons!"
//             ></Input> */}
//           </form>
//         </HomeStyle>
//       }
//     </>
//   );
// };

// export default Home;
