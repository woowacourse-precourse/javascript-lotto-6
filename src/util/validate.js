import { ERROR_MESSAGE } from "../constant/message.js";

const validate = {
  validatePrice(price) {
    if (price % 1000 !== 0) throw ERROR_MESSAGE.NUMBER_PRICE;
    if (isNaN(price)) throw ERROR_MESSAGE.NUMBER_TYPE;

    return true;
  },

  validateBonusNumber(winNumber, bonusNumber) {
    if (isNaN(bonusNumber)) throw ERROR_MESSAGE.NUMBER_TYPE;
    if (bonusNumber > 45 || bonusNumber < 1) throw ERROR_MESSAGE.NUMBER_RANGE;

    if (winNumber.includes(bonusNumber))
      throw ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE;

    return true;
  },
};
export default validate;
