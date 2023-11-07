import { Random } from '@woowacourse/mission-utils';

class LottoService {
  #MIN_NUM = 1;
  #MAX_NUM = 45;
  #CNT = 6;
  #winningList = {
    '3개 일치': 0,
    '4개 일치': 0,
    '5개 일치': 0,
    '보너스 일치': 0,
    '6개 일치': 0,
  };
  #revenue = 0;

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

  getrateReturn(purchase) {
    for (const result in this.#winningList) {
      this.#revenue += this.#winningList[result];
    }
    return parseFloat((this.#revenue / purchase) * 100).toFixed(1);
  }

  getWinningList(userNumList, winningNumList, bonus) {
    for (let i = 0; i < userNumList.length; i += 1) {
      const matchNums = userNumList.filter((num) =>
        winningNumList.includes(num),
      );
      if (userNumList[i].includes(bonus) && matchNums.length === 5)
        this.#winningList[`보너스 일치`] += 1;
      else this.#winningList[`${matchNums.length}개 일치`] += 1;
    }
    return this.#winningList;
  }
}

export default LottoService;
