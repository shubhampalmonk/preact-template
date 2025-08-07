import { h, render } from "preact";

import App from "./App";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<App />, rootElement);
} 