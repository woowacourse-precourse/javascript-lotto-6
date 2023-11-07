export default class LottoCalculator {
  constructor(win, bonus) {
    this.win = win;
    this.bonus = bonus;
  }

  countMatches(lotto) {
    const lottoClone = lotto.numbers();
    let count = 0;

    lottoClone.forEach(number => {
      if (this.win.includes(number)) {
        count += 1;
      }
    });

    return count;
  }

  countMatchingLottos(lottos, numberOfMatches) {
    const lottosClone = lottos;
    let count = 0;

    lottosClone.forEach(lotto => {
      if (this.countMatches(lotto) === numberOfMatches) {
        count += 1;
      }
    });

    return count;
  }

  countBonusMatchingLottos(lottos) {
    const lottosClone = lottos;
    const lottosIncludesBonus = lottosClone.filter(lotto =>
      lotto.numbers().includes(this.bonus)
    );
    let count = 0;

    lottosIncludesBonus.forEach(lotto => {
      if (this.countMatches(lotto, 5) === 5) {
        count += 1;
      }
    });

    return count;
  }
}
