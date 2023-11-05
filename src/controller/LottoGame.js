import Lotto from '../model/Lotto.js';
import LottoList from '../model/LottoList.js';
import { inputMoney } from '../view/InputPrompt.js';
import { validateDivisible, validateNumber } from '../utils/validateFn.js';
import { printBuyLottery } from '../view/OutputPompt.js';
import WinningLotto from '../model/WinningLotto.js';

class LottoGame {
  #money = 0;
  #myLottos = new LottoList();
  #winningLotto = new WinningLotto();

  async buyLotto() {
    await this.#setMoney();
    this.#setMyLottoList();
    printBuyLottery(this.#myLottos.getLottoCount());
    this.#myLottos.printMyLottery();
  }

  async #setMoney() {
    const input = await inputMoney();
    validateNumber(input);
    validateDivisible(input);
    this.#money = parseInt(input);
  }

  #setMyLottoList() {
    const amount = this.#money / 1000;
    for (let i = 0; i < amount; i++) {
      this.#myLottos.add(Lotto.setLottery());
    }
  }

  async drawLotto() {
    await this.#winningLotto.setWinningNumber();
    await this.#winningLotto.setBonusNumber();
  }
}

export default LottoGame;
