import morseCode from "./morse-code.js";

const morseCodeKeys = Object.keys(morseCode);
const morseCodeValues = Object.values(morseCode);

export const translateStringToMorse = (inputParam) => {
  let translatedString = "";

  if (inputParam === null) {
    return undefined;
  }

  if (inputParam.length === 0) {
    return "There is no Output without an Input";
  }

  const inputToLowerCase = inputParam.toLowerCase();

  for (let index = 0; index < inputToLowerCase.length; index++) {
    const character = inputToLowerCase[index];

    for (let index = 0; index < morseCodeKeys.length; index++) {
      if (character === morseCodeKeys[index]) {
        translatedString += `${morseCodeValues[index]} `;
      }
    }
  }

  return translatedString;
};
