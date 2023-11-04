import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.lotto = new Lotto([]);
  }
  async play() {
    const purchasePrice = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const lottoCnt = this.lotto.repeatLottoNumber(purchasePrice);
    MissionUtils.Console.print("\n" + lottoCnt + "개를 구매했습니다.");
    const lottoArr = this.lotto.generateRandomNumber(lottoCnt);
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    this.lotto.isValidWinningNumbers(winningNumbers);
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    MissionUtils.Console.print("\n당첨 통계\n---\n");
  }
}

export default App;
