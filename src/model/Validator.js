import { ERROR } from '../util/constant.js';
import { Console } from '@woowacourse/mission-utils';

const Validator = {
  moneyCheck: inputValue => {
    notInputValue(inputValue);
    notNumber(inputValue);
    moneyRangeOver(inputValue);
    notDivisibleByThousand(inputValue);
    return inputValue;
  },

  lottoNumberList: numberList => {
    notNumberElement(numberList);
    notSixNumber(numberList);
    notRangeNumber(numberList);
    sameNumber(numberList);
  },
};

// 값을 입력하지 않았는지 검사
const notInputValue = inputValue => {
  if (inputValue.trim().length === 0) {
    // Console.print(ERROR.emptyValue);
    throw ERROR.emptyValue;
  }
};

//숫자 아닌것이 있는지 검사 (?) -> isNaN(Number(inputValue))하면 실수표현 못잡음
const notNumber = inputValue => {
  if (/[^0-9]/g.test(inputValue)) {
    throw ERROR.notNumberic;
  }
};

const moneyRangeOver = inputValue => {
  if (Number(inputValue) < 1000) {
    throw ERROR.underThousandMoney;
  }
};

// 1000단위인지 검사 -> 이거하면 문자있는지, 정수형인지 같이 되는 것 같은데..
const notDivisibleByThousand = inputValue => {
  if (Number(inputValue) % 1000 !== 0) {
    throw ERROR.notDivisibleMoney;
  }
};

// 쉼표 외의 문자가 들어간 경우
const notNumberElement = numberList => {
  numberList.forEach(number => {
    return notNumber(number);
  });
};

// 6개가 아닌 경우
const notSixNumber = numberList => {
  if (numberList.length !== 6) {
    throw ERROR.notSixNumber;
  }
};

// 1~45사이의 정수가 아닌 경우
const notRangeNumber = numberList => {
  numberList.forEach(number => {
    return numberListRangeCheck(number);
  });
};

const numberListRangeCheck = number => {
  if (Number(number) < 1 || Number(number) > 45) {
    throw ERROR.rangeOverInput;
  }
};

// 중복되는 숫자가 있는 경우
const sameNumber = numberList => {
  const deleteSameNumber = new Set(numberList).size;

  if (numberList.length !== deleteSameNumber) {
    throw ERROR.sameNumber;
  }
};

export default Validator;
