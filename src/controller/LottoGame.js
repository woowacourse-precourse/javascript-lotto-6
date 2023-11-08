import Screen from '../view/Screen';
import Lotto from '../model/Lotto';
import generateLottoNumbers from '../utils/LottoUtil';
import { MONEY_UNIT, MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH } from '../Constants';

class LottoGame {
  #lottos = [];
  #count;
  #winningLotto;
  #bonusNumber;

  async start() {
    await this.#inputPurchaseCount();

    this.#issueLottos();
    this.#printLottos();

    await this.#inputWinningLotto();
    await this.#inputBonusNumber();
  }

  async #inputPurchaseCount() {
    try {
      this.#count = (await Screen.inputPurchaseMoney()) / MONEY_UNIT;
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputPurchaseCount();
    }
  }

  async #issueLottos() {
    while (this.#count) {
      this.#lottos.push(
        new Lotto(generateLottoNumbers(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH)),
      );
      this.#count -= 1;
    }
  }

  #printLottos() {
    Screen.printLottoNumbers(this.#lottos);
  }

  async #inputWinningLotto() {
    try {
      this.#winningLotto = new Lotto(await Screen.inputWinningLotto());
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputWinningLotto();
    }
  }

  async #inputBonusNumber() {
    try {
      this.#bonusNumber = await Screen.inputBonusNumber(this.#winningLotto);
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputBonusNumber();
    }
  }
}

export default LottoGame;
