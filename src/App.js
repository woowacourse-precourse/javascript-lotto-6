import { Console, Random } from '@woowacourse/mission-utils';

class App {
  getLottoTicket(lottoPurchaseAmount) {
    return Number(lottoPurchaseAmount / 1000);
  }

  async play() {
    const lottoPrice =
      await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    const lottoTicket = this.getLottoTicket(lottoPurchaseAmount);
  }
}

export default App;
