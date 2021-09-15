import { translateWordToMorse } from "./translator.js";

// selectors
let userInput = document.getElementById("user-input");
let output = document.getElementById("output");
const translateButton = document.getElementById("translate-button");

// global vars
let stringToTranslate = "";

// functions
const displayOutput = (translatedWordParam) => {
  return (output.value = translatedWordParam);
};

// event listeners
translateButton.addEventListener("click", () => {
  output.value = "";
  displayOutput(translateWordToMorse(stringToTranslate));
  stringToTranslate = "";
  userInput.value = "";
});

userInput.addEventListener("input", (event) => {
  stringToTranslate += event.data;
});
