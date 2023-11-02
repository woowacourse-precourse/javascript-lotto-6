import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const lottoPurchaseAmount =
      await Console.print('구입 금액을 입력해 주세요.\n');
  }
}

export default App;
