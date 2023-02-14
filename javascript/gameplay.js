import { addBytes, removeBytes } from "/javascript/data-config.js";

let hackButton = document.getElementById("code-holder");

hackButton.addEventListener("click", addBytes(5));