import { Console } from '@woowacourse/mission-utils';

const Validation = {
  isUserMoneyOk(userMoney) {
    const isMinimumValid = this.isMinimumOneThousand(userMoney);
    const isDivisibleValid = this.isDivisibleByOneThousand(userMoney);

    if (isMinimumValid && isDivisibleValid) {
      return true;
    }
    return false;
  },

  isMinimumOneThousand(userInput) {
    if (userInput < 1000) {
      Console.print('[ERROR] 최소 1000원 이상 입력해주세요');
      return false;
    }
    return true;
  },

  isDivisibleByOneThousand(userInput) {
    if (userInput % 1000 !== 0) {
      Console.print('[ERROR] 1000원으로 나누어떨어지는 구매금액을 입력해주세요');
      return false;
    }
    return true;
  },
};

export default Validation;
