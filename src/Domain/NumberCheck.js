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

  sameResult(matchResult) {
    const matched = { ...MATCHED.NUMBER_RESULT };

    matchResult.forEach((sameCount) => {
      if (sameCount) matched[sameCount] += 1;
    });

    const result = Object.keys(matched).map((el) => `${el} - ${matched[el]}개`);

    return result;
  }

  getMargin(total) {
    const { randomNum } = this.#numbers;

    const paid = randomNum.length * 1000;
    const result = parseFloat(((total / paid) * 100).toFixed(2));

    return result;
  }

  totalAmount(matchData) {
    const numberRegex = /\(([^)]+)\)/;

    let total = 0;

    matchData.forEach((result) => {
      const [moneyInfo, countInfo] = result.split(' - ');

      const money = moneyInfo.match(/(\d+,\d+)/)[0].replace(/,/g, '');
      const count = parseInt(countInfo, 10);

      total += money * count;
    });

    return total;
  }
}

export default CheckNumber;
