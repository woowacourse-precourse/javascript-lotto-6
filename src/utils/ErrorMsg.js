import Constant from "./Constant.js";

const ERROR_TAG = "[ERROR]";

const ErrorMsg = {
  IS_NAN: `${ERROR_TAG} 숫자를 입력해 주세요.`,
  NUM_OUT_OF_RANGE: `${ERROR_TAG} ${Constant.MIN}이상 ${Constant.MAX}이하의 숫자를 입력해주세요`,
  BUDGET: {
    MIN_IS_UNIT_PRICE: `${ERROR_TAG} 구입 금액은 최소 ${Constant.UNIT_PRICE}원 이상 입력해주세요`,
    DIVISBLE_BY_UNIT_PRICE: `${ERROR_TAG} 구입 금액은 ${Constant.UNIT_PRICE}원으로 나눠 떨어져야 합니다`,
  },
  LOTTO_NUM: {
    IS_NOT_SEPERATED_BY_COMMA: `${ERROR_TAG} 당첨번호는 , 로 구분해주세요`,
    IS_REDUNDANCY: `${ERROR_TAG} 중복되지 않는 숫자를 입력해주세요`,
    WRONG_COUNT: `${ERROR_TAG} 로또 번호는 ${Constant.NUM_COUNT}개여야 합니다.`,
  },
  BONUS_NUM: {
    IS_NOT_A_NUM: `${ERROR_TAG} 보너스 번호는 1개의 숫자만 입력해주세요`,
  },
};

export default ErrorMsg;
