import { Random } from '@woowacourse/mission-utils';

class LottoService {
  createLotto() {
    let randomList;
    do {
      randomList = Random.pickUniqueNumbersInRange(1, 45, 6);
    } while (randomList.some((num, index, arr) => arr.indexOf(num) !== index));
    const sortRandomList = randomList.sort((a, b) => {
      return a - b;
    });
    return sortRandomList;
  }

  rateReturn(purchase, revenue) {
    return parseFloat((revenue / purchase) * 100).toFixed(1);
  }

  winningRate(userNumList, winningNumList) {
    const same = userNumList.filter((num) =>
      winningNumList.includes(num),
    ).length;
    return same;
  }
}

export default LottoService;
