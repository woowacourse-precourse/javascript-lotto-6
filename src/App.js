import { Console } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import WinningNumbers from "./WinningNumbers.js";
import BonusNumber from "./BonusNumber.js";
import { PROMPT_MESSAGE, ERROR_TYPE } from "./constants/messages.js";

class App {
  #lottos;
  #winningNumbers = [];
  #bonusNumber = 0;

  async play() {
    try {
      const cost = await Console.readLineAsync(PROMPT_MESSAGE.COST);

      this.#lottos = new Lottos(+cost);
      this.#lottos.printIssuedLottos();

      const winningNumbers = await Console.readLineAsync(
        PROMPT_MESSAGE.WINNING_NUMBERS
      );
      const winningNumbersArray = winningNumbers.split(",");

      this.#winningNumbers = new WinningNumbers(winningNumbersArray);

      const bonusNumber = await Console.readLineAsync(
        PROMPT_MESSAGE.BONUS_NUMBER
      );
      this.#bonusNumber = new BonusNumber(bonusNumber, winningNumbersArray);

      this.#lottos.printWinningStatus(
        this.#winningNumbers.numbers,
        this.#bonusNumber.numbers
      );

      this.#lottos.printRateOfReturn(cost, this.#lottos.winningPrice);
    } catch (error) {
      Console.print(error.message);
      this.play();
    }
  }
}

export default App;
