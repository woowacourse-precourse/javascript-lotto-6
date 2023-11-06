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
  }

  async getLottoPublishCount() {
    const price = await InputView.inputPrice();
    const count = this.#lottoMaker.calcLottoPublishCount(price);
    try {
      this.#lottoMaker.validatePublishCount(count);
      return count;
    } catch (e) {
      Console.print(e.toString());
      return this.getLottoPublishCount();
    }
  }
}

export default GameController;
