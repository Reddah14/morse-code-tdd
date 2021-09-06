import * as morseCodeTranslator from './translator.js'

test('returns full name', () => {
  expect(getFullName("salva", "martinez")).toBe("salva martinez");
});