import { Console, MissionUtils } from '@woowacourse/mission-utils';
// eslint-disable-next-line import/extensions
import Lotto from './Lotto.js';

class App {
  async play() {
    const MONEY = await this.inputMoney();
    const INPUT_NUMBERS = await this.getLottoNumber();
    const LOTTO_NUMBERS = new Lotto(INPUT_NUMBERS);
    const BONUS_NUMBERS = LOTTO_NUMBERS.getBonusNumber(LOTTO_NUMBERS);
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

  // eslint-disable-next-line class-methods-use-this
  async getLottoNumber() {
    const INPUT = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const INPUT_ARRAY = INPUT.split(',');
    for (let i = 0; i < INPUT_ARRAY.length; i += 1) {
      INPUT_ARRAY[i] = Number(INPUT_ARRAY[i]);
    }
    return INPUT_ARRAY;
  }
}

export default App;
