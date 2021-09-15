import morseCode from "./morse-code.js";

const morseCodeKeys = Object.keys(morseCode);
const morseCodeValues = Object.values(morseCode);

export const translateStringToMorse = (input) => {
  let translatedString = "";
  
  if (input === null ) {
    return undefined;
  }

  if (input.length === 0) {
    return undefined;
  }
  const inputToLowerCase = input.toLowerCase();

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
