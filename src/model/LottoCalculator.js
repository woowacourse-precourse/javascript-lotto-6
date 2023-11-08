import { CONSTANT } from '../constant/Constant.js';
import { PRIZE } from '../constant/Prize.js';

export default class LottoCalculator {
  constructor(money, win, bonus) {
    this.money = money;
    this.win = win;
    this.bonus = bonus;
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

    for (let i = CONSTANT.LAST_WIN; i <= CONSTANT.FIRST_WIN; i++) {
      sum += data[`match${i}`] * PRIZE[`match${i}`];
    }

    sum += data.bonus * PRIZE.bonus;

    return sum;
  }

  getRatio(data) {
    const ratio = (data.prize / this.money).toFixed(2);
    const formattedRatio = parseFloat(ratio).toLocaleString();

    return formattedRatio;
  }
}
