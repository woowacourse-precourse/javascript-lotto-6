const { ERROR_MESSAGE } = require("./Constant.js");

const validation = {
  checkNumberList(nums) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);

    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATE);

    if (!this.checkNumbersRange(nums)) throw new Error(ERROR_MESSAGE.RANGE);

    if (!this.checkNumbersType(nums)) throw new Error(ERROR_MESSAGE.NUMBER);
  },

  checkBonusNum(num, winningNums) {
    if (winningNums.includes(num))
      throw new Error(ERROR_MESSAGE.ALREADY_INCLUDE);

    if (isNaN(num)) throw new Error(ERROR_MESSAGE.BONUS_NUMBER);

    if (num > 45 || num < 1) throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  },
};

function checkNumbersRange(nums) {
  return nums.every((num) => num <= 45 && num >= 1);
}

function checkNumbersType(nums) {
  return nums.every((num) => !isNaN(num));
}

module.exports = validation;
