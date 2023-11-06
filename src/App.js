import { MissionUtils } from "@woowacourse/mission-utils";
import LottoPurchase from "./LottoPurchase";
import LottoTicket from "./LottoTicket";
import LottoMachine from "./LottoMachine";

class App {
  async play() {
    const PURCHASE_AMOUNT = await LottoPurchase.purchaseLottoAmount();
    const LOTTO_TICKETS = LottoTicket.generateLottotickets(PURCHASE_AMOUNT);

    LottoMachine.displayLottoTickets(LOTTO_TICKETS);

    const WINNING_NUMBERS = await LottoMachine.askWinningNumbers();
    const BONUS_NUMBER = await LottoMachine.askBonusNumber();

    const PRIZE_LIST = LottoMachine.calculatePrize(
      LOTTO_TICKETS,
      WINNING_NUMBERS,
      BONUS_NUMBER
    );

    LottoMachine.displayGameResult(PRIZE_LIST, PURCHASE_AMOUNT);
  }
}

export default App;
