import MATCHED from '../Constant/stats.js';

class CheckNumber {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  sameCount() {
    const { randomNum } = this.#numbers;
    const { user, bonus } = this.#numbers.userNum;
    const matchedNumber = [];

    randomNum.forEach((num) => {
      const sameNum = num.filter((cur) => user.includes(cur));

      if (sameNum.length === 5 && num.includes(Number(bonus))) {
        matchedNumber.push(MATCHED.NUMBER_COUNT['2nd']);
      }
      if (sameNum.length > 2)
        matchedNumber.push(MATCHED.NUMBER_COUNT[sameNum.length]);
    });

    return matchedNumber;
  }

  static sameResult(matchResult) {
    const matched = { ...MATCHED.NUMBER_RESULT };

    matchResult.forEach((sameCount) => {
      if (sameCount) matched[sameCount] += 1;
    });

    return matched;
  }

  static calculateMargin(matchData) {
    const numberRegex = /\(([^)]+)\)/;

    let totalAmount = 0;

    matchData.forEach((el) => {
      const amountString = el.match(numberRegex)[1];
      const amount = amountString.replace(/[^0-9]/g, '');

      totalAmount += Number(amount);
    });

    console.log(`총 수익금 ${totalAmount}`);
  }
}

export default CheckNumber;
