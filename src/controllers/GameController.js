import { Console } from '@woowacourse/mission-utils';
import LottoMaker from '../utils/LottoMaker.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #lottoMaker;

  constructor() {
    this.#lottoMaker = new LottoMaker();
  }

  async startGame() {
    const publishCount = await this.getLottoPublishCount();
    OutputView.printLine();
    OutputView.printPublishCount(publishCount);

    this.#lottoMaker.publishLottos(publishCount);
    OutputView.printLottos(this.#lottoMaker.lottos);
    OutputView.printLine();

    await this.setWinningLotto();
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
}

export default GameController;
