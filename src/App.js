import { Console, MissionUtils } from '@woowacourse/mission-utils';
class App {
  async play() {
    const amount = await this.getAmount();
    this.getLottoNumbers(amount);
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
}

export default App;
