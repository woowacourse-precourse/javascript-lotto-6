import { ERROR_MESSAGE } from "../constant/ErrorMessage";
import { CONSTANT } from '../constant/Constant.js';
import { PRIZE } from '../constant/Prize.js';

export default class LottoCalculator {
  constructor(money, win, bonus) {
    this.#validate(money, win, bonus);
    this.money = money;
    this.win = win;
    this.bonus = bonus;
  }

  #validate(money, win, bonus) {
    if (typeof money !== "number") {
      throw new Error(ERROR_MESSAGE.PARAMETER_MONEY_NOT_NUMBER);
    }

    if (typeof win !== "object") {
      throw new Error(ERROR_MESSAGE.PARAMETER_WIN_NOT_OBJECT);
    }

    win.forEach(number => {
      if (typeof number !== "number") {
        throw new Error(ERROR_MESSAGE.PARAMETER_WIN_ELEMENT_NOT_NUMBER);
      }
    });

    if (typeof bonus !== "number") {
      throw new Error(ERROR_MESSAGE.PARAMETER_BONUS_NOT_NUMBER);
    }
  }

  countMatches(lotto) {
    const lottoNumbers = lotto.numbers();
    let count = 0;

    lottoNumbers.forEach(number => {
      if (this.win.includes(number)) {
        count += 1;
      }
    });

    return count;
  }

  countMatchingLottos(lottos, numberOfMatches) {
    let count = 0;

    lottos.forEach(lotto => {
      if (this.countMatches(lotto) === numberOfMatches) {
        count += 1;
      }
    });

    return count;
  }

  countMatchingLottos3To6(lottos) {
    const data = {};

    for (let i = CONSTANT.LAST_WIN; i <= CONSTANT.FIRST_WIN; i++) {
      data[`match${i}`] = this.countMatchingLottos(lottos, i);
    }

    return data;
  }

  countBonusMatchingLottos(lottos) {
    const lottosIncludesBonus = lottos.filter(lotto =>
      lotto.numbers().includes(this.bonus)
    );
    let count = 0;

    lottosIncludesBonus.forEach(lotto => {
      if (this.countMatches(lotto) === CONSTANT.MATCHES_TO_BONUS) {
        count += 1;
      }
    });

    return count;
  }

  getPrize(data) {
    let sum = 0;

    sum += data.bonus * PRIZE.BONUS;
    for (let i = CONSTANT.LAST_WIN; i <= CONSTANT.FIRST_WIN; i++) {
      sum += data[`match${i}`] * PRIZE[`MATCH_${i}`];
    }

    return sum;
  }

  getRatio(data) {
    const ratio = (data.prize * 100 / this.money).toFixed(2);
    const formattedRatio = parseFloat(ratio).toLocaleString();

    return formattedRatio;
  }
}
