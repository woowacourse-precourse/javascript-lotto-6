import { Console } from '@woowacourse/mission-utils';

class LottoController {
  async playLotto() {
    await this.#inputMoney();
  }

  async #inputMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default LottoController;
