import { Console } from "@woowacourse/mission-utils";
import LottoGenerator from "./LottoGenerator.js";

const lottoTickets = new LottoGenerator();

class App {
  async getWinningNumbersFromUserInput() {
    Console.print(
      "당첨 번호 6개를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분합니다"
    );
    const winningNumbers = await Console.readLineAsync("");

    return winningNumbers.split(",");
  }

  async getBonusNumbersFromUserInput() {
    Console.print("보너스 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("");

    return parseInt(bonusNumber, 10);
  }

  async play() {
    await lottoTickets.getLottoTickets();

    await this.getWinningNumbersFromUserInput();
    await this.getBonusNumbersFromUserInput();
  }
}

export default App;
