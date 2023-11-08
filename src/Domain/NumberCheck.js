import { MATCHED, NUMBER } from '../Constant/stats.js';
import { MONEY_REGEX } from '../Utils/Regex.js';

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
      matchedNumber.push(this.matchingNumber(num, { user, bonus }));
    });

    return matchedNumber.filter(Boolean);
  }

  matchingNumber(num, { user, bonus }) {
    const sameNum = num.filter((cur) => user.includes(cur));

    if (sameNum.length === 5 && num.includes(this.#bonusNumber(bonus))) {
      return MATCHED.NUMBER_COUNT['2nd'];
    }
    if (sameNum.length === 5 || sameNum.length > 2) {
      return MATCHED.NUMBER_COUNT[sameNum.length];
    }

    return null;
  }

  #bonusNumber(number) {
    return Number(number);
  }

  getSameResult(matchResult) {
    const matched = { ...MATCHED.NUMBER_RESULT };

    matchResult.forEach((sameResult) => {
      if (sameResult) matched[sameResult] += 1;
    });

    return this.#returnWinningCount(matched);
  }

  #returnWinningCount(matched) {
    const result = Object.keys(matched).map((el) => `${el} - ${matched[el]}개`);

    return result;
  }

  getMargin(total) {
    const paid = this.#PaidAmount();
    const result = parseFloat(
      ((total / paid) * NUMBER.PERCENTAGE).toFixed(NUMBER.TWO_DECIMAL_POINT)
    );

    return result;
  }

  #PaidAmount() {
    const { randomNum } = this.#numbers;
    const amount = randomNum.length * 1000; // 지불 금액값

    return amount;
  }

  totalAmount(matchData) {
    let total = 0;

    matchData.forEach((result) => {
      const { money, count } = this.#winningPrize(result);

      total += money * count;
    });

    return total;
  }

  #winningPrize(result) {
    const [moneyInfo, countInfo] = result.split(' - ');

    const money = moneyInfo.match(MONEY_REGEX)[0].replace(/,/g, '');
    const count = parseInt(countInfo, NUMBER.DECIMAL);

    return { money, count };
  }
}

export default CheckNumber;
