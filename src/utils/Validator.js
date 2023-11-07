// import ERROR from "../static/Error.js";
// import NUMBER from "../static/Number.js";
// import RangeFilter from "./RangeFilter.js";

const Validator = {
  // lottoNumber(numbers) {
  //   const number = numbers.join("");
  //   if (number.replace(/\d/g, "").length > 0)
  //     throw new Error(ERROR.lottoNumber);
  //   if (numbers.length !== new Set(numbers).size)
  //     throw new Error(ERROR.lottoDuplicate);
  //   if (numbers.length !== NUMBER.lottoCount) throw new Error(ERROR.lottoCount);
  //   if (RangeFilter(numbers)) throw new Error(ERROR.lottoRange);
  // },

  inputPurchaseAmount(input) {
    if (input.replace(/0/g, '').length === 0) throw new Error('[ERROR] 0임.');
    if (input.replace(/\d/g, '').length > 0) throw new Error('[ERROR] 문자가 포함됨.');
    if (input % 1000 !== 0) throw new Error('[ERROR] 천원 단위로.');
  },

  // inputWinningNumber(input) {
  //   const inputNumbers = input.split(",");
  //   if (input.replace(/\d|\,/g, "").length > 0)
  //     throw new Error(ERROR.winningNumber);
  //   if (inputNumbers.length !== NUMBER.lottoCount)
  //     throw new Error(ERROR.winningCount);
  //   if (inputNumbers.length !== new Set(inputNumbers).size)
  //     throw new Error(ERROR.winningDuplicate);
  //   if (RangeFilter(inputNumbers)) throw new Error(ERROR.winningRange);
  // },

  // inputBonusNumber(input, winningNumber) {
  //   const inputArray = [input];
  //   if (input.replace(/\d/g, "").length > 0) throw new Error(ERROR.bonusNumber);
  //   if (RangeFilter(inputArray)) throw new Error(ERROR.bonusRange);
  //   if (winningNumber.includes(input)) throw new Error(ERROR.bonusDuplicate);
  // },
};

export default Validator;

