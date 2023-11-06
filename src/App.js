import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    let purchaseAmount;
    while (1) {
      try {
        purchaseAmount = parseInt( await Console.readLineAsync("구입금액을 입력해 주세요."));
        if (purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount)) {
          throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
