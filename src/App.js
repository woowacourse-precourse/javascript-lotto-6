import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    const purchaseCount = purchaseAmount / 1000;
  }
}

export default App;
