import { PRICE, NUMBERS } from '../util/constant.js';

class Calculate {
  #lottoList;
  #lotto;
  #bonus;
  countMatch;

  constructor() {
    this.countMatch = new Array(NUMBERS.rankLength).fill(0);
  }

  countLottoAmounnt(money) {
    return parseInt(Number(money) / NUMBERS.unitOfMoney);
  }

  async countTotalRanking(lottoList, lotto, bonus) {
    this.#lottoList = lottoList;
    this.#lotto = lotto;
    this.#bonus = Number(bonus);

    await this.#lottoList.forEach(eachLotto => {
      this.#countEachLotto(eachLotto);
    });

    return this.countMatch;
  }

  async #countEachLotto(eachLotto) {
    let matchLength = await eachLotto.filter(eachLottoNumber => this.#lotto.includes(eachLottoNumber)).length;
    this.#rankCount(matchLength, eachLotto);
  }

  #rankCount(matchLength, eachLotto) {
    switch (matchLength) {
      case 6:
        return (this.countMatch[4] += NUMBERS.rankCountUp);
      case 5:
        return (this.countMatch[this.#chechBonusAndFive(eachLotto)] += NUMBERS.rankCountUp);
      case 4:
        return (this.countMatch[1] += NUMBERS.rankCountUp);
      case 3:
        return (this.countMatch[0] += NUMBERS.rankCountUp);
    }
  }

  #chechBonusAndFive(eachLotto) {
    if (eachLotto.includes(this.#bonus)) return 3;
    return 2;
  }

  calculateBenefit(price) {
    let eachPrice = 0;

    Array.from({ length: NUMBERS.rankLength }, (v, rankIdx) => {
      eachPrice += PRICE[rankIdx] * this.countMatch[rankIdx];
    });

    return ((eachPrice / price) * 100).toFixed(1);
  }
}

export default Calculate;
