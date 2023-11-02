const ERROR = {
  MONEY_UNIT: '구입 금액은 1,000원 단위여야 합니다.',
  TYPE_NUMBER: '숫자 형식으로 입력하세요.',
  SIX_FIGURES: '당첨 번호는 6개여야 합니다.',
  DIFFERENT_NUMBERS: '각 번호는 다른 숫자여야 합니다.',
  DIFFERENT_WINNING_NUMBERS: '당첨 번호에 있는 숫자들과 달라야 합니다.',
};

export const Validate = Object.freeze({
  purchasingMoney(money) {
    this.isNumberType(money);

    if (!Number.isInteger(money / 1000)) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  },

  isNumberType(string) {
    if (isNaN(string)) {
      throw new Error(ERROR.TYPE_NUMBER);
    }
  },

  winningLottery(numbers) {
    numbers.forEach((number) => {
      this.isNumberType(number);
    });

    this.isNotSixFigures(numbers);
    this.isDuplicated(numbers);
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

    if (winningLotteryNumbers.includes(number)) {
      throw new Error(ERROR.DIFFERENT_WINNING_NUMBERS);
    }
  },
});
