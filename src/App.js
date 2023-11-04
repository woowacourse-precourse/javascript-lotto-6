import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "../src/Lotto.js";

class App {
  async play() {
    const amount = await this.getAmount();
    this.getLottoNumbers(amount);

    await this.getWinningNumbers();
  }

  async getAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.validateAmount(amount);

    return amount;
  }

  validateAmount(amount) {
    if (isNaN(amount) || amount < 1000 || amount % 1000 !== 0) {
      throw new Error('[ERROR] 입력 값이 잘못 되었습니다.');
    }
  }

  getLottoNumbers(count) {
    const playCount = count / 1000;

    for(let i = 0; i < playCount; i++) {
      this.printRandomLottoNumbers();
    }
  }

  printRandomLottoNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(randomNumbers);
  }

  async getWinningNumbers() {
    const inputString = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = inputString.split(',').map(Number);
    new Lotto(numbers);
  }
}

export default App;
