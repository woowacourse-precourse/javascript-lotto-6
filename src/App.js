import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';
import { LOTTO_MESSAGE } from "./Messages.js";

class App {
  constructor() {
    this.lotto = new Lotto([]);
  }
  async play() {
    const purchasePrice = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGE.ENTER_PURCHASE_PRICE_MESSAGE
    );
    const lottoCnt = this.lotto.repeatLottoNumber(purchasePrice);
    MissionUtils.Console.print(lottoCnt + LOTTO_MESSAGE.LOTTO_CNT_MESSAGE);
    const lottoArr = this.lotto.generateRandomNumber(lottoCnt);
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGE.ENTER_WINNING_NUMBER_MESSAGE
    );
    this.lotto.isValidWinningNumbers(winningNumbers);
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGE.ENTER_BONUS_NUMBER_MESSAGE
    );
    MissionUtils.Console.print(LOTTO_MESSAGE.WINNING_RESULT);
    const winningCnt = this.lotto.checkWinningNumbers(lottoArr, winningNumbers.split(',').map(Number), bonusNumber)
    const totalPrizeMoney = this.lotto.returnWinningDetails(winningCnt);
    this.lotto.returnRevenuePercent(purchasePrice, totalPrizeMoney);
  }
}

export default App;
