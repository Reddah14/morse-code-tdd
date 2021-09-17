import { translateStringToMorse } from "./translator.js";

// selectors
let userInput = document.getElementById("user-input");
let output = document.getElementById("output");
const clearButton = document.getElementById("translate-button");

// functions
const refreshOutput = (toDisplayParam) => {
  output.value = toDisplayParam;

  return output.value;
};

const displayOutput = (translatedWordParam) => {
  return (output.value += translatedWordParam);
};

// event listeners
clearButton.addEventListener("click", () => {
  output.value = "";
  userInput.value = "";
});

userInput.addEventListener("input", (event) => {
  if (event.inputType === "deleteContentBackward") {
    refreshOutput( translateStringToMorse(userInput.value) );
  } else {
    displayOutput( translateStringToMorse( event.data ) );
  }
  /* 
  try {
  } catch (error) {
    console.log(error);
  } */
});
