import { PRICE, NUMBERS } from '../util/constant.js';

class Calculate {
  countLottoAmounnt(money) {
    return parseInt(Number(money) / NUMBERS.unitOfMoney);
  }

  async countTotalRanking(lottoList, lotto, bonus) {
    this.countMatch = new Array(NUMBERS.rankLength).fill(0);

    await lottoList.forEach(eachLotto => {
      this.#countEachLotto(eachLotto, lotto, bonus);
    });
    return this.countMatch;
  }

  async #countEachLotto(eachLotto, lotto, bonus) {
    let matchLength = await eachLotto.filter(eachLottoNumber =>
      lotto.includes(eachLottoNumber),
    ).length;
    this.#rankCount(matchLength, eachLotto, bonus);
  }

  #rankCount(matchLength, eachLotto, bonus) {
    switch (matchLength) {
      case 6:
        this.countMatch[4] += NUMBERS.rankCountUp;
        break;
      case 5:
        this.countMatch[this.#chechBonusAndFive(eachLotto, bonus)] +=
          NUMBERS.rankCountUp;
        break;
      case 4:
        this.countMatch[1] += NUMBERS.rankCountUp;
        break;
      case 3:
        this.countMatch[0] += NUMBERS.rankCountUp;
        break;
    }
  }

  #chechBonusAndFive(eachLotto, bonus) {
    if (eachLotto.includes(Number(bonus))) return 3;
    return 2;
  }

  calculateBenefit(rank, price) {
    let eachPrice = 0;

    Array.from({ length: NUMBERS.rankLength }, (v, rankIdx) => {
      eachPrice += PRICE[rankIdx] * rank[rankIdx];
    });

    return ((eachPrice / price) * 100).toFixed(1);
  }
}

export default Calculate;
