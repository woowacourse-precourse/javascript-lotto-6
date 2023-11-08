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
    while (count > 0) {
      const newLotto = this.publishLotto();
      publishedLottos = [...publishedLottos, newLotto];
      count -= 1;
    }
    return publishedLottos;
  }

  getMatchingNumbers(publishedLotto, winningNumbers, bonusNumber) {
    const matchingNumbers = publishedLotto.filter((num) =>
      winningNumbers.includes(num),
    );
    // 2등의 경우, 숫자 7 반환
    if (
      matchingNumbers.length === condition.bonusNumberChance &&
      publishedLotto.includes(bonusNumber)
    ) {
      return 7;
    }
    // 나머진 일치하는 숫자 반환
    return matchingNumbers ? matchingNumbers.length : 0;
  }

  getRanksArray(publishedLottos, winningNumbers, bonusNumber) {
    const ranks = Array.from({ length: condition.maxRankNumber }, () => 0);
    publishedLottos.forEach((lotto) => {
      const matchingNumbers = this.getMatchingNumbers(
        lotto,
        winningNumbers,
        bonusNumber,
      );
      // (5 - 인덱스)가 등수
      if (matchingNumbers === 3) ranks[0] += 1;
      else if (matchingNumbers === 4) ranks[1] += 1;
      else if (matchingNumbers === 5) ranks[2] += 1;
      else if (matchingNumbers === 6) ranks[4] += 1;
      else if (matchingNumbers === 7) ranks[3] += 1;
    });
    return ranks;
  }
}

export default LottoGameService;
