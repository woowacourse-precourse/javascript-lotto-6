import ERROR_MESSAGE from "../Constant/ErrorMessage";
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
        throw new Error("[ERROR] 로또 번호는 숫자로만 구성되어야 합니다.");
      if (numbers.length !== new Set(numbers).size)
        throw new Error("[ERROR] 로또 번호는 서로 중복될 수 없습니다.");
      if (numbers.length !== 6)
        throw new Error("[ERROR] 로또 번호는 6개로 구성되어야 합니다.");
      if (RangeTest(numbers))
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 값이어야 합니다.");
    },
  };
  
  export default Validator;