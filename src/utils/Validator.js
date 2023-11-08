import ERROR_MESSAGE from "../constant/ErrorMessage";
import RangeTest from "./RangeTest";

const Validator = {
  InputPurchaseAmount(purchaseAmount) {
    if (purchaseAmount.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NUMBER);

    if (purchaseAmount < 1000)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNDER);

    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNIT);

    if (purchaseAmount.replace(/0/g, "").length === 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_ZERO);
  },

  lottoNumber(lottoNumbers) {
    const lottoNumber = lottoNumbers.join("");
    if (lottoNumber.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);

    if (lottoNumbers.length !== new Set(lottoNumbers).size)
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);

    if (lottoNumbers.length !== 6) throw new Error(ERROR_MESSAGE.LOTTO_COUNT);

    if (RangeTest(lottoNumbers)) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
  },

  InputWinningNumber(winningNumber) {
    const inputWinninNumbers = winningNumber.split(",");
    if (winningNumber.replace(/\d|\,/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER);

    if (inputWinninNumbers.length !== new Set(inputWinninNumbers).size)
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);

    if (inputWinninNumbers.length !== 6)
      throw new Error(ERROR_MESSAGE.WINNING_COUNT);

    if (RangeTest(inputWinninNumbers))
      throw new Error(ERROR_MESSAGE.WINNING_RANGE);
  },

  InputBonusNumber(bonusNumber, winningNumber) {
    const inputBonusNumberArray = [bonusNumber];
    if (bonusNumber.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER);

    if (winningNumber.includes(bonusNumber))
      throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE);

    if (RangeTest(inputBonusNumberArray))
      throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  },
};

export default Validator;
