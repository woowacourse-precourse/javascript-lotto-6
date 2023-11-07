import { MissionUtils } from '@woowacourse/mission-utils';
import LottoPurchase from '../Model/LottoPurchase';
import LottoTicket from '../Model/LottoTicket';
import LottoMachine from '../Model/LottoMachine';
import LottoOutput from '../View/LottoOutput';

class GameController {
  async gameLogic() {
    const PURCHASE_AMOUNT = await LottoPurchase.purchaseLottoAmount();
    const LOTTO_TICKETS = LottoTicket.generateLottotickets(PURCHASE_AMOUNT);

    LottoOutput.displayLottoTickets(LOTTO_TICKETS);

    const WINNING_NUMBERS = await LottoMachine.askWinningNumbers();
    const BONUS_NUMBER = await LottoMachine.askBonusNumber();

    const PRIZE_LIST = LottoMachine.calculatePrize(
      LOTTO_TICKETS,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    );

    LottoOutput.displayGameResult(PRIZE_LIST, PURCHASE_AMOUNT);
  }
}

export default GameController;
