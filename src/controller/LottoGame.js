import Lotto from '../model/Lotto.js';
import LottoList from '../model/LottoList.js';
import { inputMoney } from '../view/InputPrompt.js';
import { validateDivisible, validateNumber } from '../utils/validateFn.js';

class LottoGame {
  #money = 0;
  #myLottos = new LottoList();

  async buyLotto() {
    await this.#setMoney();
    this.#setMyLottoList();
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
}

export default LottoGame;
