import { ERROR_MESSAGE } from "../constants/Constant";

class ValidLotto {
  validPrice(price) {
    if (isNaN(price) || price === null)
      throw new Error(ERROR_MESSAGE.PRICE_NUMBER);
    else if (Number(price) % 1000 !== 0 || Number(price) <= 0)
      throw new Error(ERROR_MESSAGE.PRICE_UNIT);
  }

  validLottoUnit(winningNum) {
    if (winningNum.length !== new Set(winningNum).size) {
      throw new Error(ERROR_MESSAGE.LOTTO_INPUT);
    }
    if (winningNum.some((num) => num < 0 || num >= 45)) {
      throw new Error(ERROR_MESSAGE.LOTTO_UNIT);
    }
  }
}

export default ValidLotto;
