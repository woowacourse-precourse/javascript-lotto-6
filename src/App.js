import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  amount;
  lottos = [];
  lottosCount;
  winningNumbers;

  async play() {
    await this.start();
    this.getLottos();
    this.printLottos();
    await this.getWinningNumbers();
  }

  async start() {
    await this.enterAmount();
    this.validateAmount();
    MissionUtils.Console.print('');
  }

  async getWinningNumbers() {
    await this.enterWinningNumbers();
    this.validateWinningNumbers();
  }

  async enterAmount() {
    this.amount = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
  }

  validateAmount() {
    if (/\D/.test(this.amount)) {
      throw new Error('[ERROR] 로또 구입 금액은 숫자형태로만 입력해야 합니다.');
    } else if (this.amount < 1000) {
      throw new Error('[ERROR] 로또 구입은 1000원부터 가능합니다.');
    } else if (this.amount % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입은 1000원 단위로 가능합니다.');
    }
  }

  getLottos() {
    this.lottosCount = this.amount / 1000;
    let i = 0;
    while (i < this.lottosCount) {
      const lotto = new Lotto(this.getLottoASCNumbers());
      this.lottos.push(lotto.numbers);
      i++;
    }
  }

  getLottoASCNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  printLottos() {
    MissionUtils.Console.print(`${this.lottosCount}개를 구매했습니다.`);
    let i = 0;
    while (i < this.lottosCount) {
      MissionUtils.Console.print(this.lottos[i]);
      i++;
    }
    MissionUtils.Console.print('');
  }

  async enterWinningNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    this.winningNumbers = numbers.split(',').map(Number);
  }

  validateWinningNumbers() {
    if (!this.checkNumbersRange(this.winningNumbers)) {
      throw new Error(
        '[ERROR] 당첨 번호는 1부터 45까지의 숫자형태로 입력해야 합니다. '
      );
    } else if (this.winningNumbers.length !== 6) {
      throw new Error(
        '[ERROR] 당첨 번호는 쉼표로 구분해 6자리로 입력해야 합니다.'
      );
    } else if (this.isDuplicateNumbers(this.winningNumbers)) {
      throw new Error(
        '[ERROR] 당첨 번호는 중복되지 않는 숫자 6개로 입력해야 합니다.'
      );
    }
  }

  checkNumbersRange(numbers) {
    return numbers.every((item) => /^([1-9]|[1-3][0-9]|4[0-5])$/.test(item));
  }

  isDuplicateNumbers(numbers) {
    return numbers.some((number) => {
      return numbers.indexOf(number) !== numbers.lastIndexOf(number);
    });
  }
}

export default App;
