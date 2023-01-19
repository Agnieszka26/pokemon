import React from "react";
import { Item } from "./ListItem.styles";

export default function ListItem({ item }) {
  return (
    <>
      <Item>{item}</Item>
    </>
  );
}
