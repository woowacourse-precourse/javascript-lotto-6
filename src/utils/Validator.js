import { Errors } from "../constants/constant.js";
import { GameSetting } from "../constants/constant.js";

export const Validator = {
  isPrice(number) {
    if (isNaN(number) || !number || number % GameSetting.lotto_Price) {
      throw new Error(Errors.is_Price);
    }
  },
};
