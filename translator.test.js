import { translateStringToMorse } from "./translator.js";

describe("TranslateMorseCode() function", () => {
  test("With a null parameter returns undefined", () => {
    // arrange
    const methodParam = null;
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(undefined);
  });

  test("With an empty parameter returns undefined", () => {
    // arrange
    const methodParam = "";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(undefined);
  });

  test("Returns '.-' with 'a' parameter", () => {
    // arrange
    const methodParam = "a";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(".- ");
  });

  test("Returns correct translation with upperCase parameter", () => {
    // arrange
    const methodParam = "SOS";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe("... --- ... ");
  });

  test("Returns correct translation with upperCase parameter", () => {
    // arrange
    const methodParam = "SOS";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe("... --- ... ");
  });

  test("Returns a defined string when can't find a translation for the input", () => {
    // arrange
    const methodParam = "_";
    const definedString = "(Can't find this one😬)";
    // act
    const result = translateStringToMorse(methodParam);
    // assert
    expect(result).toBe(definedString);
  });


});
