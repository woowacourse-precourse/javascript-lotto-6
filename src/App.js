import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
  }
  
  async getPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return input;
  }
}

export default App;
