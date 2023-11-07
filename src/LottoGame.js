import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoGame {
  #purchaseAmount;
  #lottoList;

  async play() {
    await this.inputPurchaseAmount();
    OutputView.printNewLine();
    this.purchaseLotto();
  }

  async inputPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  purchaseLotto() {
    const lottoCount = this.#purchaseAmount / LOTTO_INFO.purchase.unit;
    OutputView.printPurchaseLottoCount(lottoCount);

    this.#lottoList = Array.from(
      { length: lottoCount },
      () => new Lotto(LottoGame.getRandomLottoNumbers()),
    );
  }

  static getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.lottoNumber.min,
      LOTTO_INFO.lottoNumber.max,
      LOTTO_INFO.lottoNumber.count,
    );
  }
}

export default LottoGame;
