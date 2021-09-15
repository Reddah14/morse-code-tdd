import { translateStringToMorse } from "./translator.js";

// selectors
let userInput = document.getElementById("user-input");
let output = document.getElementById("output");
const clearButton = document.getElementById("translate-button");

// functions
const displayOutput = (translatedWordParam) => {
  return (output.value += translatedWordParam);
};

// event listeners
clearButton.addEventListener("click", () => {
  output.value = "";
  userInput.value = "";
});

userInput.addEventListener("input", (event) => {
  displayOutput(translateStringToMorse(event.data))
});
