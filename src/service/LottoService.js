import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO } from '../utils/Define.js';
import WinningLotto from '../domain/WinningLotto.js';
import InputValidator from "../utils/InputValidator.js";

class LottoService {
  sellLotto(purchaseAmount) {
    InputValidator.purchaseAmount(purchaseAmount);
    const quantitiy = Math.floor(purchaseAmount / LOTTO.price);
    return [this.#generateLotto(quantitiy), quantitiy];
  }

  #generateLotto(quantitiy) {
    const lottoNumbers = this.#generateLottoNumbers(quantitiy);
    return lottoNumbers.map((number) => new Lotto(number));
  }

  // 추후 중복을 확인하는 부분을 분리할 수 있을 것 같음
  #generateLottoNumbers(quantitiy) {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < quantitiy) {
      const newLottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.numberMin,
        LOTTO.numberMax,
        LOTTO.numberCount,
      );
      newLottoNumbers.sort((a, b) => a - b);
      lottoNumbers.add(JSON.stringify(newLottoNumbers));
    }
    return Array.from(lottoNumbers).map(JSON.parse);
  }

  getWinningLotto(winningNumbers, bonusNumber) {
    InputValidator.lottoNumbers(winningNumbers);
    InputValidator.bonusNumber(bonusNumber);
    return this.#generateWinningLotto(winningNumbers, bonusNumber);
  }

  #generateWinningLotto(winningNumbers, bonusNumber) {
    return new WinningLotto({ numbers: winningNumbers, bonusNumber });
  }
}

export default LottoService;
