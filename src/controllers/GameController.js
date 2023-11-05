import { Console } from '@woowacourse/mission-utils';
import LottoMaker from '../utils/LottoMaker.js';
import InputView from '../views/InputView.js';

class GameController {
  #lottoMaker;

  constructor() {
    this.#lottoMaker = new LottoMaker();
  }

  async startGame() {
    const publishCount = await this.getLottoPublishCount();
    console.log(publishCount);
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
