import ERROR from "../static/Error.js";
import NUMBER from "../static/Number.js";
import RangeFilter from "./RangeFilter.js";

const Validator = {
  lottoNumber(numbers) {
    const number = numbers.join("");
    if (number.replace(/\d/g, "").length > 0)
      throw new Error(ERROR.lottoNumber);
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR.lottoDuplicate);
    if (numbers.length !== NUMBER.lottoCount) throw new Error(ERROR.lottoCount);
    if (RangeFilter(numbers)) throw new Error(ERROR.lottoRange);
  },

  inputPurchaseAmount(input) {
    if (input.replace(/0/g, "").length === 0)
      throw new Error(ERROR.purchaseZero);
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ERROR.purchaseNumber);
    if (input % NUMBER.price !== 0) throw new Error(ERROR.purchaseUnit);
  },

  inputWinningNumber(input) {
    const inputNumbers = input.split(",");
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ERROR.winningNumber);
    if (inputNumbers.length !== NUMBER.lottoCount)
      throw new Error(ERROR.winningCount);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ERROR.winningDuplicate);
    if (RangeFilter(inputNumbers)) throw new Error(ERROR.winningRange);
  },

  inputBonusNumber(input, winningNumber) {
    const inputArray = [input];
    if (input.replace(/\d/g, "").length > 0) throw new Error(ERROR.bonusNumber);
    if (RangeFilter(inputArray)) throw new Error(ERROR.bonusRange);
    if (winningNumber.includes(input)) throw new Error(ERROR.bonusDuplicate);
  },
};

export default Validator;
