// import ERROR from "../static/Error.js";
// import NUMBER from "../static/Number.js";
import RangeFilter from './RangeFilter.js';

const Validator = {
  lottoNumber(numbers) {
    const number = numbers.join('');
    if (number.replace(/\d/g, '').length > 0) throw new Error('[ERROR] 문자가 포함됨.');
    if (numbers.length !== new Set(numbers).size) throw new Error('[ERROR] 중복됨.');
    if (numbers.length !== 6) throw new Error('[ERROR] 6자리가 아님.');
    if (RangeFilter(numbers)) throw new Error('[ERROR] 범위 벗어남.');
  },

  inputPurchaseAmount(input) {
    if (input.replace(/0/g, '').length === 0) throw new Error('[ERROR] 0임.');
    if (input.replace(/\d/g, '').length > 0) throw new Error('[ERROR] 문자가 포함됨.');
    if (input % 1000 !== 0) throw new Error('[ERROR] 천원 단위로.');
  },

  inputWinningNumber(input) {
    const inputNumbers = input.split(',');
    if (input.replace(/\d|\,/g, '').length > 0) throw new Error('[ERROR] 문자가 포함됨.');
    if (inputNumbers.length !== 6) throw new Error('[ERROR] 6자리가 아님.');
    if (inputNumbers.length !== new Set(inputNumbers).size) throw new Error('[ERROR] 중복됨.');
    if (RangeFilter(inputNumbers)) throw new Error('[ERROR] 범위 벗어남.');
  },

  inputBonusNumber(input, winningNumber) {
    const inputArray = [input];
    if (input.replace(/\d/g, '').length > 0) throw new Error('[ERROR] 문자가 포함됨.');
    if (RangeFilter(inputArray)) throw new Error('[ERROR] 범위 벗어남.');
    if (winningNumber.includes(input)) throw new Error('[ERROR] 중복됨.');
  },
};

export default Validator;

