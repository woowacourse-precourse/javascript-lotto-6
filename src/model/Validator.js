import { ERROR } from "../util/constant.js";
import { Console } from "@woowacourse/mission-utils";

const Validator = {
  moneyCheck: (inputValue) => {
    notInputValue(inputValue);
    notNumber(inputValue);
    moneyRangeOver(inputValue);
    notDivisibleByThousand(inputValue);
  },
};

// 값을 입력하지 않았는지 검사
const notInputValue = (inputValue) => {
  if (inputValue.trim().length === 0) {
    throw new Error(ERROR.emptyValue);
  }
};

//숫자 아닌것이 있는지 검사 (?) -> isNaN(Number(inputValue))하면 실수표현 못잡음
const notNumber = (inputValue) => {
  if (/[^0-9]/g.test(inputValue)) {
    throw new Error(ERROR.notNumberic);
  }
};

// 1000단위인지 검사 -> 이거하면 문자있는지, 정수형인지 같이 되는 것 같은데..
const notDivisibleByThousand = (inputValue) => {
  if (Number(inputValue) % 1000 !== 0) {
    throw new Error(ERROR.notDivisibleMoney);
  }
};

const moneyRangeOver = (inputValue) => {
  if (Number(inputValue) < 1000) {
    throw new Error(ERROR.underThousandMoney);
  }
};

export default Validator;
