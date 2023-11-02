import { Console, Random } from '@woowacourse/mission-utils';

class App {
  getLottoTicket(lottoPurchaseAmount) {
    return Number(lottoPurchaseAmount / 1000);
  }

  checkLottoPrice(lottoPrice) {
    if (lottoPrice < 1000)
      throw new Error('[ERROR] 로또 최소 구입 금액은 1000원입니다.');
  }

  async play() {
    const lottoPrice =
      await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    this.checkLottoPrice(lottoPrice);
    const lottoTicket = this.getLottoTicket(lottoPrice);
    Console.print(`${lottoTicket}개를 구매했습니다.`);
  }
}

export default App;
