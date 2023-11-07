import { Errors } from "../constants/constant.js";
import { GameSetting } from "../constants/constant.js";

export const Validator = {
  isPrice(number) {
    if (isNaN(number) || !number || number % GameSetting.lotto_Price) {
      throw new Error(Errors.is_Price);
    }
  },

  isLotteryNumber(numbers) {
    let setNumbers = new Set(numbers);
    numbers.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(Errors.is_Number);
      }
      if (num < GameSetting.lotto_Min_Number) {
        throw new Error(Errors.min_Number);
      }
      if (num > GameSetting.lotto_Max_Number) {
        throw new Error(Errors.max_Number);
      }
    });
    if (numbers.length !== GameSetting.lotto_Length) {
      throw new Error(Errors.is_Length);
    }
    if (setNumbers.size !== GameSetting.lotto_Length) {
      throw new Error(Errors.duplication_Number);
    }
  },
};
