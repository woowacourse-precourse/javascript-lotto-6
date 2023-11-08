import LottoGenerator from '../LottoGenerator.js';
import Lotto from '../Lotto.js';
import { condition } from '../consts.js';

class LottoGameService {
  publishLotto() {
    const newLotto = new LottoGenerator().generateLotto();
    return new Lotto(newLotto).sortAscending();
  }

  getPurchaseCount(purchaseAmount) {
    const count = purchaseAmount / condition.oneLottoPrice;
    return count;
  }

  getPublishedLottos(purchaseCount) {
    let publishedLottos = [];
    let count = purchaseCount;
    while (count !== 0) {
      const newLotto = new Lotto(this.publishLotto()).sortAscending();
      publishedLottos = [...publishedLottos, newLotto];
      count -= 1;
    }
    return publishedLottos;
  }

  getMatchingNumbers(publishedLotto, winningNumbers, bonusNumber) {
    let matchingNumbers = publishedLotto.filter((num) =>
      winningNumbers.includes(num),
    );
    // 2등의 경우, 숫자 7 반환
    if (
      matchingNumbers.length === condition.bonusNumberChance &&
      publishedLotto.includes(bonusNumber)
    ) {
      matchingNumbers = [...matchingNumbers, bonusNumber];
      return 7;
    }
    // 나머진 일치하는 숫자 반환
    return matchingNumbers ? matchingNumbers.length : 0;
  }
}

export default LottoGameService;
