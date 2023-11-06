import Constant from "./Constant.js";

const ERROR_TAG = "[ERROR]";
const ErrorMsg = {
  Budget: {
    MUST_BE_NUM: `${ERROR_TAG} 구입 금액은 숫자를 입력해주세요`,
    MIN_IS_UNIT_PRICE: `${ERROR_TAG} 구입 금액은 최소 ${Constant.UNIT_PRICE}원 이상 입력해주세요`,
    DIVISBLE_BY_UNIT_PRICE: `${ERROR_TAG} 구입 금액은 ${Constant.UNIT_PRICE}원으로 나눠 떨어져야 합니다`,
  },
};

export default ErrorMsg;
