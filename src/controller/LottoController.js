import { Console, Console } from '@woowacourse/mission-utils';
import Lottos from '../model/Lottos.js';
import WinningLotto from '../model/WinningLotto.js';

class LottoController {
  #lottos;

  #winningLottos;

  async playLotto() {
    await this.inputMoney();
    await this.inputWinningLottoNumbers();
    await this.inputBonusLottoNumber();
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

  async inputWinningLottoNumbers() {
    const winningLottoNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('');

    this.#winningLottos = winningLottoNumbers.split(',').map(Number);
  }

  async inputBonusLottoNumber() {
    const winningBonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('');

    this.#winningLottos = new WinningLotto(
      this.#winningLottos,
      Number(winningBonusNumber),
    );
  }
}

export default LottoController;
