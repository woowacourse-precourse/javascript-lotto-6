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

  InputWinningNumber(input) {
    const inputWinninNumbers = input.split(",");
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error("[ERROR] 로또 번호는 숫자만 가능합니다.");

    if (inputWinninNumbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    if (inputWinninNumbers.length !== new Set(inputWinninNumbers).size)
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다."
      );
    if (RangeTest(inputWinninNumbers))
      throw new Error("[ERROR] 당첨 번호는 1과 45 사이의 값이어야 합니다.");
  },
};

export default Validator;
