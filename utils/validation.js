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

  isWinningLottoNumberOk(winningLottoNumber) {
    // 입력한 숫자가 6자리인지 검사
    // 중복되는 숫자가 없는지 검사
    // 입력한 숫자의 범위가 1~45사이인지 검사
    const isSixDigits = this.isSixDigits(winningLottoNumber);
    const isDuplicated = this.isDuplicated(winningLottoNumber);
    const isWithinRange = this.isWithinRange(winningLottoNumber);

    if (isSixDigits && isDuplicated && isWithinRange) {
      return true;
    }
    return false;
  },

  isSixDigits(userInput) {
    if (userInput.length !== 6) {
      Console.print('[ERROR] 숫자는 6자리를 입력해주세요');
      return false;
    }
    return true;
  },

  isDuplicated(userInput) {
    const uniqueNumbers = new Set(userInput);

    if (uniqueNumbers.size !== userInput.length) {
      Console.print('[ERROR] 중복된 숫자가 있습니다. 다시 입력해주세요');
      return false;
    }
    return true;
  },

  isWithinRange(userInput) {
    const isWithinRange = (number) => number >= 1 && number <= 45;

    if (!userInput.every(isWithinRange)) {
      Console.print('[ERROR] 배열의 모든 숫자는 1에서 45 사이에 있어야 합니다.');
      return false;
    }
    return true;
  },
};

export default Validation;
