import { COMMON_ERROR_MESSAGE, PURCHASE_AMOUNT_ERROR_MESSAGE, UNIT } from "../constants/constants";

class Validator {
  isMoneyValid(input){
    const NUMERIC_MONEY = Number(input)

    if (input === 0) {
      return COMMON_ERROR_MESSAGE.emptyString
    }
    if (isNaN(NUMERIC_MONEY)) {
      return COMMON_ERROR_MESSAGE.onlyNumber
    }
    if (NUMERIC_MONEY % UNIT) {
      return PURCHASE_AMOUNT_ERROR_MESSAGE.wrongUnit
    }
    if (NUMERIC_MONEY < UNIT) {
      return PURCHASE_AMOUNT_ERROR_MESSAGE.underThousan
    }

    return undefined
  }
}

export default Validator;