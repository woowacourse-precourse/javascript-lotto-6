import { STATIC_NUMBER, MESSAGE_ERROR } from "../../static/Static.js";
import { SEPARATOR } from "../../static/Static.js";

const regExLottoNum = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;

const Validator = {
  validatePurchasePrice(price) {
    this.validateEmptyString(price);
    this.validateMultiplePrice(price);
  },

  validateWinningNums(nums) {
    this.validateEmptyString(nums);
    const winningNumArr = nums.split(SEPARATOR.comma);
    this.validateLength(winningNumArr);
    this.validateDuplication(winningNumArr);
    winningNumArr.map((num) => {
      this.validateNumRange(num);
    });
    return winningNumArr;
  },

  valdiateBonusNum(num, winningNums) {
    this.validateEmptyString(num);
    this.validateNumRange(num);
    this.validateInWinningNums(num, winningNums);
  },

  // 공용 Validator
  validateEmptyString(input) {
    if (!input) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.blank}`);
    }
  },

  validateMultiplePrice(price) {
    if (price % STATIC_NUMBER.pricePerLotto != 0) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.purchasePrice}`);
    }
  },

  validateLength(numArr) {
    if (numArr.length != STATIC_NUMBER.LottoNumLen) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidLength}`);
    }
  },

  validateNumRange(num) {
    if (!regExLottoNum.test(num)) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.invalidNum}`);
    }
  },

  validateDuplication(numArr) {
    const numSet = new Set(numArr);
    if (numSet.size != STATIC_NUMBER.LottoNumLen) {
      throw new Error(
        `${MESSAGE_ERROR.header} ${MESSAGE_ERROR.duplicatedWinningNums}`
      );
    }
  },

  validateInWinningNums(bonusNum, winningNums) {
    if (winningNums.includes(Number(bonusNum))) {
      throw new Error(`${MESSAGE_ERROR.header} ${MESSAGE_ERROR.inWinningNums}`);
    }
  },
};

export default Validator;
