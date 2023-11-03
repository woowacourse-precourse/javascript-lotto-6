import { Console } from '@woowacourse/mission-utils';
import Lottos from '../model/Lottos.js';

class LottoController {
  #lottos;

  async playLotto() {
    await this.inputMoney();
    await this.inputLottoNumbers();
  }

  async inputMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const getLottoCount = this.calculateLottoCount(money);
    this.#lottos = new Lottos(getLottoCount);
    this.showLottos();
  }

  calculateLottoCount(money) {
    const price = Number(money);

    return Math.floor(price / 1000);
  }

  showLottos() {
    Console.print(' ');
    const lottos = this.#lottos.getLottos();
    this.printLottosCount(lottos.length);
    this.printLottoNumbers(lottos);
  }

  printLottosCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printLottoNumbers(lottos) {
    lottos.map(lotto => {
      Console.print(lotto.getNumbers());
    });
    Console.print('');
  }

  async inputLottoNumbers() {
    const userLottoNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('');
    const userBonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('');
  }
}

export default LottoController;
