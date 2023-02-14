import { addBytes, removeBytes } from "/javascript/data-config.js";

let hackButton = document.getElementById("clicker");


hackButton.addEventListener("click", function(){
    addBytes(1)
});