import React from "react";
import { Puff } from "react-loader-spinner";

export const Loader = () => {
  // changed name of this component to be more descriptive
  return (
    <>
      <h1 style={{ color: "#5193f6" }}> Loading </h1>
      <Puff type="Puff" color="#5193f6" height={200} width={200} />
    </>
  );
};
