import { Console } from '@woowacourse/mission-utils';
import LottoMaker from '../utils/LottoMaker.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #lottoMaker;

  constructor() {
    this.#lottoMaker = new LottoMaker();
  }

  async lottoPublishCount() {
    const publishCount = await this.getLottoPublishCount();
    this.#lottoMaker.publishCount = publishCount;
    OutputView.printLine();
    OutputView.printPublishCount(publishCount);
  }

  publishLotto() {
    this.#lottoMaker.publishLottos(this.#lottoMaker.publishCount);
    OutputView.printLottos(this.#lottoMaker.lottos);
    OutputView.printLine();
  }

  async winningLotto() {
    await this.setWinningLotto();
    OutputView.printLine();
  }

  async bonusNumber() {
    await this.setBounusNumber();
    OutputView.printLine();
  }

  async getLottoPublishCount() {
    const price = await InputView.inputPrice();
    const count = this.#lottoMaker.calcLottoPublishCount(price);
    try {
      this.#lottoMaker.validateLottoPublishCount(count);
      return count;
    } catch (e) {
      Console.print(e.toString());
      return this.getLottoPublishCount();
    }
  }

  async setWinningLotto() {
    const numbers = await InputView.inputWinningNumbers();
    const convertNumbersArray = numbers
      .split(',')
      .map(number => Number(number));
    try {
      this.#lottoMaker.winningLotto = convertNumbersArray;
      return null;
    } catch (e) {
      Console.print(e.toString());
      return this.setWinningLotto();
    }
  }

  async setBounusNumber() {
    const number = await InputView.inputBounusNumber();
    try {
      this.#lottoMaker.validateBonusNumber(Number(number));
      this.#lottoMaker.bonusNumber = number;
      return null;
    } catch (e) {
      Console.print(e.toString());
      return this.setBounusNumber();
    }
  }
}

export default GameController;
