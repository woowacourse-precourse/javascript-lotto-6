const { ERROR_MESSAGE } = require("./Constant.js");

const validation = {
  checkNumberList(nums) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);

    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATE);

    if (!this.checkNumbersRange(nums)) throw new Error(ERROR_MESSAGE.RANGE);

    if (!this.checkNumbersType(nums)) throw new Error(ERROR_MESSAGE.NUMBER);
  },
};

function checkNumbersRange(nums) {
  return nums.every((num) => num <= 45 && num >= 1);
}

function checkNumbersType(nums) {
  return nums.every((num) => !isNaN(num));
}

module.exports = validation;
