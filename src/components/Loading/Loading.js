import React from "react";
import {Puff} from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <h1 style={{color: "#5193f6"}}> Loading </h1>
      <Puff type="Puff" color="#5193f6" height={200} width={200} />
    </div>
  );
};

export default Loading;
