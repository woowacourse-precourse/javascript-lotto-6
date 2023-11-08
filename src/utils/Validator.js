import ERROR from '../constants/Error.js';
import RangeFilter from './RangeFilter.js';

const Validator = {
  lottoNumber(numbers) {
    const number = numbers.join('');
    if (number.replace(/\d/g, '').length > 0) throw new Error(ERROR.lottoNumber);
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.lottoDuplicate);
    if (numbers.length !== 6) throw new Error(ERROR.lottoLength);
    if (RangeFilter(numbers)) throw new Error(ERROR.lottoRange);
  },

  inputPurchaseAmount(input) {
    if (Number(input) < 0) throw new Error(ERROR.purchaseMinus);
    if (input.replace(/0/g, '').length === 0) throw new Error(ERROR.purchaseZero);
    if (input.replace(/\d/g, '').length > 0) throw new Error(ERROR.purchaseNumber);
    if (input % 1000 !== 0) throw new Error(ERROR.purchaseUnit);
  },

  inputWinningNumber(input) {
    const inputNumbers = input.split(',');
    if (input.replace(/\d|\,/g, '').length > 0) throw new Error(ERROR.winningNumber);
    if (inputNumbers.length !== 6) throw new Error(ERROR.lottoLength);
    if (inputNumbers.length !== new Set(inputNumbers).size) throw new Error(ERROR.lottoLength);
    if (RangeFilter(inputNumbers)) throw new Error(ERROR.lottoLength);
  },

  inputBonusNumber(input, winningNumber) {
    const inputArray = [input];
    if (input.replace(/\d/g, '').length > 0) throw new Error(ERROR.bonusNumber);
    if (RangeFilter(inputArray)) throw new Error(ERROR.bonusNumberRange);
    if (winningNumber.includes(input)) throw new Error(ERROR.bonusNumberDuplicate);
  },
};

export default Validator;

