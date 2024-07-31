import React from "react";
import reactDom from "react-dom"
import App from "./App";
import TestForHoverDD from "./TestForHoverDD";
reactDom.render(
  <>
    <App />
    <TestForHoverDD/>
  </>
  ,

  document.querySelector(".root"))
