import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  amount;

  async play() {
    await this.start();
  }

  async start() {
    await this.enterAmount();
    this.validateAmount();
    MissionUtils.Console.print('');
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
}

export default App;
