import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';

class App {
  async play() {
    try {
      const purchaseAmount = await this.inputPurchaseAmount();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play();
    }
  }

  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력해 주세요.'
    );
    const amount = Number(input);
    if (Number.isNaN(amount) || amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.'
      );
    }
    return amount;
  }
}

export default App;
