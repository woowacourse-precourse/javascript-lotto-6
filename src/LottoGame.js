import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoGame {
  #purchaseAmount;
  #lottoList;
  #winningNumbers;
  #bonusNumber;

  async play() {
    await this.inputPurchaseAmount();
    OutputView.printNewLine();

    this.purchaseLotto();
    OutputView.printNewLine();

    await this.inputWinningNumbers();
    OutputView.printNewLine();

    await this.inputBonusNumber();
    OutputView.printNewLine();
  }

  async inputPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  purchaseLotto() {
    const lottoCount = this.#purchaseAmount / LOTTO_INFO.purchase.unit;
    OutputView.printPurchaseLottoCount(lottoCount);

    this.#lottoList = Array.from({ length: lottoCount }, () => {
      const randomLottoNumbers = LottoGame.getRandomLottoNumbers();
      OutputView.printLottoNumbers(randomLottoNumbers);

      return new Lotto(randomLottoNumbers);
    });
  }

  static getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.lottoNumber.min,
      LOTTO_INFO.lottoNumber.max,
      LOTTO_INFO.lottoNumber.count,
    );
  }

  async inputWinningNumbers() {
    this.#winningNumbers = await InputView.readWinningNumbers();
  }

  async inputBonusNumber() {
    this.#bonusNumber = await InputView.readBonusNumber();
  }
}

export default LottoGame;
