import { translateStringToMorse } from "./translator.js";

describe("TranslateMorseCode() function", () => {
  
  test("Returns '.-' with 'a' parameter", () => {
    // arrange
    const methodParam = "a";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(".- ");
  })

  test("With a null parameter returns undefined", () => {
    // arrange
    const methodParam = null;
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(undefined);
  })
});