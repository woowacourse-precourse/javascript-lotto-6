import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MESSAGE_BONUS_NUMBER,
  MESSAGE_PURCHASING_AMOUNT,
  MESSAGE_PURCHASING_NUMBER,
  MESSAGE_WINNING_NUMBER,
} from "./constants/message";
import Purchase from "./Purchase";
import Issuance from "./Issuance";
import Lotto from "./Lotto";
import Bonus from "./Bonus";

class App {
  async play() {
    const purchasingAmount = await MissionUtils.Console.readLineAsync(
      MESSAGE_PURCHASING_AMOUNT
    );
    const checkedAmount = new Purchase(purchasingAmount);
    MissionUtils.Console.print(
      checkedAmount.getPurchaseCount + MESSAGE_PURCHASING_NUMBER
    );

    const issuance = new Issuance(checkedAmount.getPurchaseCount);
    issuance.printIssuanceNumbers();

    const winningNumber = MissionUtils.Console.readLineAsync(
      MESSAGE_WINNING_NUMBER
    );
    const checkedWinningNumber = new Lotto(winningNumber);

    const bonus = await MissionUtils.Console.readLineAsync(
      MESSAGE_BONUS_NUMBER
    );
    const bonusNumber = new Bonus(bonus, checkedWinningNumber.get());
  }
}

export default App;
