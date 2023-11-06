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

  async makeLottoShop() {
    while (true) {
      try {
        // 당첨번호 보너스번호 분리필요
        this.#lottoShop = new LottoShop(
          await InputView.askWinningNumber(),
          await InputView.askBonusNumber()
        );
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
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
