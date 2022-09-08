/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import App from "./Index";

// base css
import "./css/Base.css";

render(
  () => (<Router><App/></Router>),
  document.querySelector("faith") as HTMLElement
);