/* @refresh reload */
import { render } from 'solid-js/web';
import App from "./Index";

// base css
import "./css/Base.css";

render(
  () => (<App/>),
  document.querySelector("faith") as HTMLElement
);