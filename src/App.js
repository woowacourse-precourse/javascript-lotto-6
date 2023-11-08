import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    await this.inputAmount();
    const [numbers, bonus] = await this.inputWinningNumber();
  }

  async inputAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (!this.validPurchase(amount))
      throw new Error('[ERROR] invalid input amount.');
    this.printMyLotto(Number(amount) / 1000);
  }

  validPurchase(amount) {
    if (isNaN(amount)) return false;
    if (Number(amount) % 1000 !== 0) return false;

    return true;
  }

  printMyLotto(volume) {
    Console.print('\n' + volume + '개를 구매했습니다.');
    this.createAndPrintRandomLotto(volume);
  }

  createAndPrintRandomLotto(volume) {
    while (volume--) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      const ascLotto = lotto.sort((n1, n2) => n1 - n2).join(', ');

      Console.print('[' + ascLotto + ']');
    }
  }

  async inputWinningNumber() {
    const inputMainNumber = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );

    const winning = inputMainNumber.split(',').map(Number);
    const winningLotto = new Lotto(winning);

    const inputSubNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    const bonus = Number(inputSubNumber);

    winningLotto.checkBonusNumber(Number(bonus));

    return [winning, bonus];
  }
}

export default App;
