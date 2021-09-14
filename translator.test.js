import { translateWordToMorse } from "./translator.js";

describe("TranslateMorseCode() test", () => {
  
  test("Function test", () => {
    // 1. Arrange (set my test)
    const input = "a";

    // 2. Act (do something)
    const output = ".-";

    // 3. Assert (do something that will end up being truth)
    expect(translateWordToMorse(input)).toBe(output);
  })
});