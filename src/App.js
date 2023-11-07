import { Console, MissionUtils } from '@woowacourse/mission-utils';
// eslint-disable-next-line import/extensions
import Lotto from './Lotto.js';

class App {
  async play() {
    const MONEY = await this.inputMoney();
  }

  async inputMoney() {
    const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.checkMoney(MONEY);
    return Math.floor(Number(MONEY) / 1000);
  }

  // eslint-disable-next-line class-methods-use-this
  checkMoney(money) {
    if (!Number.isInteger(Number(money))) {
      throw new Error('[ERROR] 로또 금액은 정수여야 합니다.');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액은 1000원 단위어야 합니다.');
    }
  }
}

export default App;
