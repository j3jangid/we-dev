import reactDom from "react-dom";
import App from './app'
import img from "./img"
import "./index.css"

reactDom.render(App(), document.getElementById("qwerty"));
reactDom.render(img(), document.querySelector("body"));