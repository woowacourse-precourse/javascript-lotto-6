import LOTTO from "../constant/lottoData.js";

const pattern = {
  whitespace: /\s/,
  specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  emoticon: /[\uD83C-\uDBFF\uDC00-\uDFFF\uD800-\uDBFF\u2700-\u27BF]/,
};

export const isBlank = (input) => input.trim() === "";

export const isNumber = (input) => Number.isNaN(Number(input));

const containsWhiteSpace = (input) => pattern.whitespace.test(input);

const containsSpecialCharacter = (input) =>
  pattern.specialCharacter.test(input);

const containsEmoticon = (input) => pattern.emoticon.test(input);

export function isInvalidType(input) {
  return (
    containsWhiteSpace(input) ||
    containsSpecialCharacter(input) ||
    containsEmoticon(input)
  );
}

export const isOutRange = (input) => {
  return (
    Number(input) < LOTTO.MINIMUM_NUMBER || Number(input) > LOTTO.MAXIMUM_NUMBER
  );
};
