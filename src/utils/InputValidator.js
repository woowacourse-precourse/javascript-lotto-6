import ERROR from "../static/Error.js";
import NUMBER from "../static/Number.js";
import RangeFilter from "./RangeFilter.js";

const InputValidator = {
  purchaseAmount(input) {
    if (input === "0" || input === "") throw new Error(ERROR.purchaseZero);
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ERROR.purchaseNumber);
    if (input % NUMBER.price !== 0) throw new Error(ERROR.purchaseUnit);
  },

  winningNumber(input) {
    const inputNumbers = input.split(",");
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ERROR.winningNumber);
    if (inputNumbers.length !== NUMBER.lottoCount)
      throw new Error(ERROR.winningCount);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ERROR.winningDuplicate);
    if (RangeFilter(inputNumbers)) throw new Error(ERROR.winningRange);
  },

  bonusNumber(input, winningNumbers) {
    const inputArray = [input];
    if (input.replace(/\d/g, "").length > 0) throw new Error(ERROR.bonusNumber);
    if (inputArray.length !== 1) throw new Error(ERROR.bonusCount);
    if (RangeFilter(inputArray)) throw new Error(ERROR.bonusRange);
    if (winningNumbers.includes(input)) throw new Error(ERROR.bonusDuplicate);
  },
};

export default InputValidator;
