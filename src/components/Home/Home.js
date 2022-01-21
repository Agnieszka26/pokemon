import React, {useState} from "react";
import {HomeStyle, Input, InputNumber} from "./Home.style";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const [validationWarning, setValidateWarning] = useState("");
  const [validationStyle, setValidationStyle] = useState({outline: `none`});
  const [number, setNumber] = useState(null);

  const validationStyles = {
    validationText: {
      color: "red",
      fontSize: "10px",
      margin: 0,
      padding: 0,
    },
  };
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (number < 0) {
      setValidateWarning("the number must be higher than 0");
      setValidationStyle({
        outline: `2px solid red`,
        backgroundColor: "#ff206391",
      });
    } else if (number > 1118) {
      setNumber(1118);
      navigate(`/${number}/Pokemonlist`);
    } else {
      navigate(`/${number}/Pokemonlist`);
    }
  };

  const handleEnter = (e) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
    setValidateWarning("");
    setValidationStyle({outline: `none`});
  };

  return (
    <>
      {
        <HomeStyle>
          <form>
            <label>
              How many pokemons do you want to see?
              <InputNumber
                style={validationStyle}
                type="number"
                placeholder="set numbers of pokemons"
                value={undefined}
                onChange={handleChange}
                onKeyPress={handleEnter}
              />
            </label>
            <div style={validationStyles.validationText}>
              {validationWarning}
            </div>
            <Input
              type="button" //sprawdzic submit
              onClick={handleSubmit}
              value="Load pokemons!"
            ></Input>
          </form>
        </HomeStyle>
      }
    </>
  );
};

export default Home;
