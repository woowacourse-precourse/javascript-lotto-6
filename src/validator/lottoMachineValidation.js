import { RULES } from "../constants/index.js";

export const lottoMachineValidation = {};

lottoMachineValidation.correctNumbers = Object.freeze({
  sidesOfSyntaxComma: Object.freeze({
    errorMessage: '문법오류가 존재합니다.',
    isInvalid(numbers) {
      if (numbers.at(0) === ',') return true;
      if (numbers.at(numbers.length - 1) === ',') return true;
      return false;
    },
  }),
  isOverflow: Object.freeze({
    errorMessage: `당첨 번호의 개수가 ${RULES.lottoLength}이 아닙니다.`,
    isInvalid: (numbers) => {
      const splitedNumbers = numbers.split(',').map(Number);
      return splitedNumbers.length !== RULES.lottoLength;
    }
  }),
  isDuplication: Object.freeze({
    errorMessage: `당첨 번호에 중복된 숫자가 존재합니다.`,
    isInvalid: (numbers) => {
      const splitedNumbers = numbers.split(',').map(Number);
      const set = new Set(splitedNumbers);
      return (splitedNumbers.length !== set.size);
    }
  }),
});

lottoMachineValidation.bounusNumber = Object.freeze({
  isDuplicationWithCorrectNumbers: Object.freeze({
    errorMessage: '당첨번호와 중복된 값이 존재합니다.',
    isInvalid: (correctNumbers, bonusNumber) => {
      const totalNumbers = [...correctNumbers.split(',').map(Number), Number(bonusNumber)];
      const set = new Set(totalNumbers);
      return totalNumbers.length !== set.size;
    }
  })
});
