import { Console } from "@woowacourse/mission-utils";
import LottoGenerator from "./LottoGenerator.js";
import Lotto from "./Lotto.js";

const lottoTickets = new LottoGenerator();

class App {
  async getWinningNumbersFromUserInput() {
    Console.print(
      "당첨 번호 6개를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분합니다"
    );
    const rawWinningNumbers = await Console.readLineAsync("");
    const winningNumbers = rawWinningNumbers
      .split(",")
      .map((number) => parseInt(number.trim(), 10));

    this.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  validateWinningNumbers(winningNumbers) {
    new Lotto(winningNumbers); // 생성 과정에서 유효성 검사가 수행됨
  }

  async getBonusNumbersFromUserInput() {
    Console.print("보너스 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("");

    return parseInt(bonusNumber, 10);
  }

  async play() {
    try {
      await lottoTickets.getLottoTickets();
      await this.getWinningNumbersFromUserInput();
      await this.getBonusNumbersFromUserInput();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
