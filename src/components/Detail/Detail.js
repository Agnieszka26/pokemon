import React from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
  const {userId} = useParams();
  console.log({userId});
  return (
    <>
      name
      {/* <div> name: {props.name}</div> */}
      <div> id: {userId} </div>
    </>
  );
};

export default Detail;
