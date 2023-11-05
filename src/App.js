import { Console } from "@woowacourse/mission-utils";
import LottoGenerator from "./LottoGenerator.js";
import LottoValidator from "./utils/LottoValidator.js";

const lottoTickets = new LottoGenerator();
const lottoValidator = new LottoValidator();

class App {
  async requestWinningNumbersInput() {
    Console.print(
      "당첨 번호 6개를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분합니다"
    );
    const rawWinningNumbers = await Console.readLineAsync("");
    const winningNumbers = rawWinningNumbers
      .split(",")
      .map((number) => parseInt(number.trim(), 10));

    return winningNumbers;
  }

  async getWinningNumbersFromUserInput() {
    while (true) {
      try {
        const winningNumbers = await this.requestWinningNumbersInput();
        lottoValidator.validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async requestBonusNumberInput() {
    Console.print("보너스 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("");

    return parseInt(bonusNumber, 10);
  }

  async getBonusNumberFromUserInput(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.requestBonusNumberInput();
        lottoValidator.validateBonusNumbers(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async play() {
    await lottoTickets.getLottoTickets();
    const winningNumbers = await this.getWinningNumbersFromUserInput();
    await this.getBonusNumberFromUserInput(winningNumbers);
  }
}

export default App;
