import { Console } from "@woowacourse/mission-utils";
import LottoGenerator from "./LottoGenerator.js";
import LottoValidator from "./utils/LottoValidator.js";

const lottoTickets = new LottoGenerator();
const lottoValidator = new LottoValidator();

class App {
  async getWinningNumbersFromUserInput() {
    Console.print(
      "당첨 번호 6개를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분합니다"
    );
    const rawWinningNumbers = await Console.readLineAsync("");
    const winningNumbers = rawWinningNumbers
      .split(",")
      .map((number) => parseInt(number.trim(), 10));

    lottoValidator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  async getBonusNumbersFromUserInput() {
    Console.print("보너스 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("");

    return parseInt(bonusNumber, 10);
  }

  async play() {
    try {
      await lottoTickets.getLottoTickets();
      const winningNumbers = await this.getWinningNumbersFromUserInput();
      const bonusNumber = await this.getBonusNumbersFromUserInput();
      lottoValidator.validateBonusNumbers(bonusNumber, winningNumbers);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
