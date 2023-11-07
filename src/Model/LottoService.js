import { Random } from '@woowacourse/mission-utils';

class LottoService {
  createLotto() {
    let randomList;
    do {
      randomList = Random.pickUniqueNumbersInRange(1, 45, 6);
    } while (randomList.some((num, index, arr) => arr.indexOf(num) !== index));

    return randomList;
  }

  sortAscending(numList) {
    const result = [...numList];
    return result.sort((a, b) => {
      return a - b;
    });
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
