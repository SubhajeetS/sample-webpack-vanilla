import "./styles.css";
import { log } from "./util";

function component() {
  log('inside the function', 'component');
  const element = document.createElement("div");
  element.innerHTML = "Hello";
  
  //css loader
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
