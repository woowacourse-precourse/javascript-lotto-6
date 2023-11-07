import CONDITION from "../constants/condition.js";
import MESSAGE from "../constants/message.js";

const validationUtils = {
  // 구입 금액 예외 처리
  inputPriceValidate(price) {
    // 숫자가 아닌 경우
    if (isNaN(price)) {
      throw new Error(MESSAGE.error.notNumber);
    }
    // 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우
    if (price % CONDITION.unit.price !== 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
    return Number(price);
  },
};

export default validationUtils;
