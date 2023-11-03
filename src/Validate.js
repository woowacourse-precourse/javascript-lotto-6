import { PURCHASE_UNIT } from './constant.js';

const ERROR = {
  MONEY_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  TYPE_NUMBER: '[ERROR] 숫자 형식으로 입력하세요.',
  SHOULD_BE_INTEGER: '[ERROR] 입력하신 숫자가 정수여야 합니다.',
  RANGE_LOTTERY_NUMBER: '[ERROR] 1에서 45 사이의 숫자여야 합니다.',
  SIX_FIGURES: '[ERROR] 당첨 번호는 6개여야 합니다.',
  DIFFERENT_NUMBERS: '[ERROR] 각 번호는 다른 숫자여야 합니다.',
  DIFFERENT_WINNING_NUMBERS: '[ERROR] 당첨 번호에 있는 숫자들과 달라야 합니다.',
};

export const Validate = Object.freeze({
  purchasingLottos(money) {
    this.isNumberType(money);

    if (!Number.isInteger(money / PURCHASE_UNIT)) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  },

  isNumberType(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.TYPE_NUMBER);
    }
  },

  LotteryNumbers(numbers) {
    numbers.forEach((number) => {
      this.isNumberType(number);
      this.isInteger(number);
      this.rangeOfLottery(number);
    });

    this.isNotSixFigures(numbers);
    this.isDuplicated(numbers);
  },

  rangeOfLottery(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR.RANGE_LOTTERY_NUMBER);
    }
  },

  isInteger(num) {
    if (!Number.isInteger(Number(num))) {
      throw new Error(ERROR.SHOULD_BE_INTEGER);
    }
  },

  isNotSixFigures(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.SIX_FIGURES);
    }
  },

  isDuplicated(numbers) {
    const set = new Set([...numbers]);

    if (numbers.length !== set.size) {
      throw new Error(ERROR.DIFFERENT_NUMBERS);
    }
  },

  bonusNumber(number, winningLotteryNumbers) {
    this.isNumberType(number);
    this.rangeOfLottery(number);
    this.isInteger(number);

    if (winningLotteryNumbers.includes(number)) {
      throw new Error(ERROR.DIFFERENT_WINNING_NUMBERS);
    }
  },
});
