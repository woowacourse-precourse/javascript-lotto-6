import { Console, MissionUtils } from '@woowacourse/mission-utils';
class App {
  async play() {
    await this.getAmount();
  }

  async getAmount() {
     const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
     this.validateAmount(amount);
  }

  validateAmount(amount) {
    if (isNaN(amount) || amount < 1000 || amount % 1000 !== 0) {
      throw new Error('[ERROR] 입력 값이 잘못 되었습니다.');
    }
    return amount;
  }
}

export default App;
