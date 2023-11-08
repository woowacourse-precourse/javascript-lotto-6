import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "./Constants.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const money = await this.buyLotto(); // 입력받은 금액을 저장한다.
    const lotto = new Lotto(money); // 입력받은 금액으로 로또를 생성한다.

    lotto.showLottoNumbers();

    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();
    lotto.validateWinningNumbers(winningNumbers);
  }
  // 로또 구매 금액을 입력받는다.
  async buyLotto() {
    const money = await Console.readLineAsync(CONSOLE_MESSAGE.ANSWER_LOTTO_ACCONT);
    return money;
  }
  // 당첨 번호 6자리와 보너스 번호를 입력받는다.
  async getWinningNumbers() {
    const input = await Console.readLineAsync(CONSOLE_MESSAGE.ASK_WINNING_NUMBER);
    const winningNumbers = input.split(",");
    const bonusNumber = await Console.readLineAsync(CONSOLE_MESSAGE.ASK_BONUS_NUMBER);
    return { winningNumbers, bonusNumber };
  }
}

export default App;
