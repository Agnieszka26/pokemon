import React from "react";
import {useParams} from "react-router-dom";
import {useState} from "react/cjs/react.development";
import {CardDetail, CardSmall} from "./Detail.style";
import {useEffect} from "react";
import DropMenu from "./DropDown/DropMenu";

const Detail = () => {
  const {userId} = useParams();
  const [detail, setDetail] = useState({});
  const [abilities, setAbilities] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getDetail();
    //setAbilities(detail.abilities);
    //console.log(abilities);
  }, []); //<- tutaj ma być pusta array bo inaczej będzie infinite loop, poza funkcjami się dużo razy renderują rzeczy, może wszystko popwkładać do funkcji ?

  let url = `https://pokeapi.co/api/v2/pokemon/${userId}`;

  // console.log(url);
  //console.log(abilities);
  const getDetail = async () => {
    const response = await fetch(url);
    const data = await response.json();
    await setDetail(data);
    //console.log(url);
    // await setUpdate(true);
  };

  // console.log(detail.abilities);
  useEffect(() => {
    setAbilities(detail.abilities);
    //console.log(abilities);
  });

  // const ability = abilities.forEach((a) => {
  //   console.log(a);
  // });

  // console.log(detail);

  //console.log(abilities);

  return (
    <>
      <CardDetail>
        <CardSmall>
          <DropMenu itemsDropdown={abilities} />
        </CardSmall>
        <CardSmall> IMAGE </CardSmall>
        <CardSmall> Holy items </CardSmall>
        <CardSmall> Moves </CardSmall>
        <CardSmall> states </CardSmall>
        <CardSmall> galery </CardSmall>
      </CardDetail>
    </>
  );
};

export default Detail;
