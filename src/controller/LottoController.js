import { Console } from '@woowacourse/mission-utils';
import Lottos from '../model/Lottos.js';

class LottoController {
  #lottos;

  async playLotto() {
    await this.inputMoney();
  }

  async inputMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const getLottoCount = this.calculateLottoCount(money);
    this.#lottos = new Lottos(getLottoCount);
  }

  calculateLottoCount(money) {
    const price = Number(money);

    return Math.floor(price / 1000);
  }
}

export default LottoController;
