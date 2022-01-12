import React from "react";
import {useParams} from "react-router-dom";
import {CardDetail} from "./Detail.style";

const Detail = () => {
  const {userId, name} = useParams();

  return (
    <>
      <CardDetail>
        {/* <img src={image} /> */}
        <div> name: {name}</div>
        <div> id: {userId} </div>
      </CardDetail>
    </>
  );
};

export default Detail;
