import * as morseCodeTranslator from './translator.js'

test('returns full name', () => {
  expect(getFullName("salva", "martinez")).toBe("salva martinez");
});describe("translateVowelsIntoMorseCode() test", () => {

  test("Function Should return '.-' for 'a' vowel ", () => {

    // 1. Arrange (set my test)
    const input = "a";
    
    // 2. Act (do something)
    const output = ".-";
    
    // 3. Assert (do something that will end up being truth)
    expect(morseCodeTranslator.translateVowelsIntoMorseCode(input)).toBe(output);
  })
