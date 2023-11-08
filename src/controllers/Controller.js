import { Console } from '@woowacourse/mission-utils';
import Person from '../models/Person.js';
import LottoMachine from '../models/LottoMachine.js';
import Lotto from '../Lotto.js';
import LottoShop from '../models/LottoShop.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #person;

  #lottos;

  #lottoShop;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  async makePerson() {
    while (true) {
      try {
        this.#person = new Person(await InputView.askPurchaseAmount());
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  makeLottos() {
    this.#lottos = Array.from(
      { length: this.#person.purchasedLottoNumber() },
      () => new Lotto(LottoMachine.createLotto()).getLotto()
    );
    this.#person.purchasedLottoInformation(this.#lottos);
  }

  async getLottoShopWinningNumber() {
    while (true) {
      try {
        const winningNumber = await InputView.askWinningNumber();
        this.#lottoShop = new LottoShop(winningNumber);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getLottoShopBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await InputView.askBonusNumber();
        this.#lottoShop.setBonusNumber(bonusNumber);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async makeLottoShop() {
    await this.getLottoShopWinningNumber();
    await this.getLottoShopBonusNumber();
  }

  async run() {
    await this.makePerson();
    this.makeLottos();
    OutputView.printPurchaseNumber(
      this.#person.purchasedLottoNumber(),
      this.#lottos
    );
    await this.makeLottoShop();
    OutputView.printWinningLog(
      this.#lottoShop.checkingTotalResult(this.#person.goToLottoShop())
    );
    OutputView.printTotalReturn(
      this.#lottoShop.returnProfitRate(this.#person.getMoney())
    );
  }
}

export default Controller;
