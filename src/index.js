import React, { Fragment } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import CardList from "./card-list";

const Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

render(
  <Fragment>
    <Global />
    <CardList />
  </Fragment>,
  document.getElementById("root")
);
