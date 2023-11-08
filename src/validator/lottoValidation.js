import { RULES } from "../constants/index.js";

export const lottoValidation = Object.freeze({
  isOverflow: Object.freeze({
    errorMessage: `로또 번호의 개수가 ${RULES.lottoLength}이 아닙니다.`,
    isInvalid: (numbers) => {
      return numbers.length !== RULES.lottoLength;
    }
  }),
  isDuplication: Object.freeze({
    errorMessage: `로또 번호에 중복된 숫자가 존재합니다.`,
    isInvalid: (numbers) => {
      const set = new Set(numbers);
      return (numbers.length !== set.size);
    }
  }),
});
