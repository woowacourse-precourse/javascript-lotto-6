import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.inputAmount();
  }

  async inputAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (!this.validPurchase(amount))
      throw new Error('[ERROR] invalid input amount.');
  }

  validPurchase(amount) {
    if (isNaN(amount)) return false;
    if (Number(amount) % 1000 !== 0) return false;

    return true;
  }
}

export default App;
