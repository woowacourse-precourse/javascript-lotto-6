import Lotto from './Lotto.js';
import { MissionUtils, Random, Console } from '@woowacourse/mission-utils';
import readline from 'readline';

class App {
  async play() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        '구입금액을 입력해 주세요: '
      );

      if (isNaN(purchaseAmount) || purchaseAmount < 1000) {
        throw new Error('[ERROR] 로또 구매 금액은 1,000원 이상이어야 합니다.');
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;

const app = new App();
app.play();
