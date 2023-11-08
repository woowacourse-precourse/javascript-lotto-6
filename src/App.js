import { Console } from "@woowacourse/mission-utils";
import { View } from "./View/view.js";
import { ERROR_MESSAGE } from "./constants/message.js";
import { setPurchaseLotto } from "./module/setting.js";
import { Validator } from "./utils/validator.js";

class App {
  async play() {
    const { amount, lottoTickets } = await this.configureLotto();
    View.displayPurchaseLotto(amount, lottoTickets);

    const winnerNumber = await View.getWinnerNumber();

    const bonusNumber = await View.getBonusNumber(winnerNumber);

    const statistics = View.displayWinningStatistics(
      lottoTickets,
      winnerNumber,
      bonusNumber.number
    );

    View.displayProfit(statistics, amount);
  }

  async configureLotto() {
    while (true) {
      try {
        const amount = await View.getAmount();

        if (!Validator.isValidPurchaseAmount(amount)) {
          throw new Error(ERROR_MESSAGE.PURCHASE_ERROR);
        }

        const lottoTickets = setPurchaseLotto(amount);
        return { amount, lottoTickets };
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
