import { translateWordToMorse } from "./translator.js";

describe("TranslateMorseCode() test", () => {
  
  test("Function test", () => {
    expect(translateWordToMorse("a")).toBe(".- ");
  })

  test("Function test1", () => {
    expect(translateWordToMorse("sos")).toBe("... --- ... ");
  })  
});