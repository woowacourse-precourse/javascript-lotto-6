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

  lottoNumber(numbers) {
    const number = numbers.join("");
    if (number.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.LOTTO_COUNT);
    if (RangeTest(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
  },
};

export default Validator;
