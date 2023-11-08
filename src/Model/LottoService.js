import { Console, Random } from '@woowacourse/mission-utils';

class LottoService {
  #MIN_NUM = 1;
  #MAX_NUM = 45;
  #CNT = 6;
  #winningList = [0, 0, 0, 0, 0];

  createLotto() {
    const randomList = Random.pickUniqueNumbersInRange(
      this.#MIN_NUM,
      this.#MAX_NUM,
      this.#CNT,
    );
    const sortRandomList = randomList.sort((a, b) => {
      return a - b;
    });
    return sortRandomList;
  }

  getRateReturn(purchase) {
    let revenue = 0;
    const money = [5000, 50000, 1500000, 30000000, 2000000000];
    for (let i = 0; i < this.#winningList.length; i++) {
      revenue += money[i] * this.#winningList[i];
    }
    return parseFloat((revenue / purchase) * 100).toFixed(1);
  }

  getWinningList(userNumList, winningNumList, bonus) {
    for (const lotto of userNumList) {
      let match = this.matchNums(lotto, winningNumList);
      const hasBonus = lotto.includes(bonus - '0');
      if (match === 6 || (match === 5 && hasBonus)) {
        match++;
      }
      this.#winningList[match - 3]++;
    }
    return this.#winningList;
  }

  matchNums(numList, winningNumList) {
    const result = numList.filter((num) => winningNumList.includes(`${num}`));
    return result.length;
  }
}

export default LottoService;
