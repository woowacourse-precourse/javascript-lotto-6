import Money from '../model/Money.js';
import BonusNumber from '../model/BonusNumber.js';
import Lotto from '../model/Lotto.js';

import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';

class Controller {
  #lotto;

  #bonus;

  #money;

  async lottoStart() {
    await this.#init();
  }

  // 입력 값에 따른 초기화 작업 진행
  async #init() {
    await this.#initMoney();
    await this.#initlotto();
    await this.#initBonus();
  }

  async #initMoney() {
    const input = await InputView.writePurchaseAmount();
    this.#money = new Money(input);
    OutputView.printPurchacingLotto(this.#money.getCount(), this.#money.getLottoList());
  }

  async #initlotto() {
    const input = await InputView.writeWinningNumbers();
    this.#lotto = new Lotto(input);
  }

  async #initBonus() {
    const input = await InputView.writeBonunsNumber();
    this.#bonus = new BonusNumber(input, this.#lotto.getLotto());
  }
}

export default Controller;
