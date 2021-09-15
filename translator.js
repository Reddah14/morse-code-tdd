import morseCode from "./morse-code.js";

let translatedString = "";

const morseCodeKeys = Object.keys(morseCode);
const morseCodeValues = Object.values(morseCode);

export const translateStringToMorse = (input) => {
  translatedString = "";
  const inputToLowerCase = input.toLowerCase();
  for (let index = 0; index < inputToLowerCase.length; index++) {
    const element = inputToLowerCase[index];

    for (let index = 0; index < morseCodeKeys.length; index++) {
      if (element === morseCodeKeys[index]) {
        translatedString += `${morseCodeValues[index]} `;
      }
    }
  }
  
  return translatedString;
};
