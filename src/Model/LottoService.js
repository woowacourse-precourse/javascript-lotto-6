import { Random } from '@woowacourse/mission-utils';

class LottoService {
  createLotto() {
    const lottoNumberList = [];
    while (lottoNumberList.length < 6) {
      const pick = Random.pickUniqueNumbersInRange(1, 45);
      if (!lottoNumberList.includes(pick)) lottoNumberList.push(pick);
    }
    return lottoNumberList;
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
