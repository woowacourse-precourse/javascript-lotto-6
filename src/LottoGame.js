import UserInput from "./UserInput.js";
import LottoStore from "./LottoStore.js";
import ProfitCalculator from "./ProfitCalculator.js";
import { LOTTO } from "./constants/Standard.js";
import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages.js";

class LottoGame {
  async start() {
    const user = new UserInput();

    const lottos = await this.#buyLotto();
    const winningNumber = await user.getWinningNumber();
    const bonusNumber = await user.getBonusNumber(winningNumber);

    this.#showResultAndProfit({ lottos, winningNumber, bonusNumber });
  }

  async #buyLotto() {
    const user = new UserInput();
    const store = new LottoStore();

    const price = await user.getPrice();
    const lottos = store.publishLotto(price / LOTTO.PRICE);

    return lottos;
  }

  #showResultAndProfit({ lottos, winningNumber, bonusNumber }) {
    const calculator = new ProfitCalculator({
      lottos,
      winningNumber,
      bonusNumber,
    });
    const [result, profit] = calculator.getResultAndProfit();
    Console.print(MESSAGES.SHOW_RESULTS(result));
    Console.print(MESSAGES.SHOW_PROFIT(profit));
  }
}

export default LottoGame;
