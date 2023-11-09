import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Output from './Output.js';
import strings from './constants/strings.js';
import { result } from './constants/message.js';

class IssuedLotteryTicket {
  randomPick;

  constructor() {
    this.output = new Output();
    this.count = 0;
    this.lottoArray = [];
  }

  makeLotto(expense) {
    const lotteryTicketCount = IssuedLotteryTicket.buyLottoCount(expense);
    Output.buyLottoPrint(lotteryTicketCount, result.PURCHASE);

    const lotteryTicket = this.issuedLotto(lotteryTicketCount);

    return lotteryTicket;
  }

  static buyLottoCount(expense) {
    const lottoCount = expense / strings.LOTTO_PRICE;

    return lottoCount;
  }

  issuedLotto(lotteryTicketCount) {
    while (this.count < lotteryTicketCount) {
      this.randomNumber();

      const lotto = new Lotto(this.randomPick);
      this.lottoArray.push(lotto.getNumber());

      this.count += 1;
    }
    return this.lottoArray;
  }

  randomNumber() {
    this.randomPick = Random.pickUniqueNumbersInRange(
      strings.START_NUMBER,
      strings.END_NUMBER,
      strings.LOTTO_COUNT,
    );
    return this.randomPick;
  }
}
export default IssuedLotteryTicket;
