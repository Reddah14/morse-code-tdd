import morseCode from "./morse-code.js";

let translatedString = "";

const morseCodeKeys = Object.keys(morseCode);
const morseCodeValues = Object.values(morseCode);

export const translateWordToMorse = (input) => {
    for ( let index = 0; index < input.length; index++ ) {
        const element = input[index];

        for ( let index = 0; index < morseCodeKeys.length; index++ ) {
            if ( element === morseCodeKeys[index] ) {
                translatedString += morseCodeValues[index];
            }
        }
    }
    return translatedString;
};