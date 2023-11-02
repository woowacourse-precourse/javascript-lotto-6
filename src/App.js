import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.lottoRandomNumber = [];
    this.lottoTicket;
    this.countNumber = 0;
  }

  getLottoTicket(lottoPurchaseAmount) {
    return Number(lottoPurchaseAmount / 1000);
  }

  checkLottoPrice(lottoPrice) {
    if (lottoPrice < 1000)
      throw new Error('[ERROR] 로또 최소 구입 금액은 1000원입니다.');
    if (isNaN(lottoPrice)) throw new Error('[ERROR] 숫자만 입력하세요.');
  }

  makeRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async play() {
    const lottoPrice =
      await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    this.checkLottoPrice(lottoPrice);
    this.lottoTicket = this.getLottoTicket(lottoPrice);
    Console.print(`${lottoTicket}개를 구매했습니다.`);

    while (this.countNumber < this.lottoTicket) {
      randomNumberArray = this.makeRandomNumber();
      this.countNumber += 1;
    }
  }
}

export default App;
