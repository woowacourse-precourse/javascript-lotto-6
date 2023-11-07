import {
  FIVE_AND_BONUS_MATCHES_MESSAGE,
  FIVE_MATCHES_MESSAGE,
  FOUR_MATCHES_MESSAGE,
  PURCHASE_AMOUNT_GUIDE_MESSAGE,
  SEPERATOR,
  SIX_MATCHES_MESSAGE,
  THREE_MATCHES_MESSAGE,
  TOTAL_RETURN_GUIDE_MESSAGE,
  TOTAL_RETURN_MESSAGE,
  UNIT_MESSAGE,
  WINNING_STATISTICS_GUIDE_MESSAGE,
} from "./constants/messages.js";
import { WINNING_LOTTO_COUNT } from "./constants/winningLottoCount.js";
import {
  checkLottoNumbers,
  getPurchasedLottoArray,
  getPurchasedLottoCounts,
  printMessage,
  printPurchasedLottoNumbers,
  totalProfitMargin,
  userLottoInputAmount,
  userLottoInputBonusNumber,
  userLottoInputSixNumbers,
} from "./utils/gameSupport.js";

class App {
  async play() {
    const amount = await userLottoInputAmount();
    const purchasedLottoCounts = getPurchasedLottoCounts(amount);
    printMessage(`${purchasedLottoCounts}${PURCHASE_AMOUNT_GUIDE_MESSAGE}`);

    const lottoArray = getPurchasedLottoArray(purchasedLottoCounts);
    printPurchasedLottoNumbers(lottoArray);
    const winningNumberArray = await userLottoInputSixNumbers();
    const bonusNumber = await userLottoInputBonusNumber(winningNumberArray);

    printMessage(WINNING_STATISTICS_GUIDE_MESSAGE);
    printMessage(SEPERATOR);
    const winningResults = checkLottoNumbers(
      winningNumberArray,
      lottoArray,
      bonusNumber
    );

    printMessage(
      `${THREE_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.THREE]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FOUR_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.FOUR]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FIVE_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.FIVE]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${FIVE_AND_BONUS_MATCHES_MESSAGE}${winningResults["winningResultWithBonus"]}${UNIT_MESSAGE}`
    );
    printMessage(
      `${SIX_MATCHES_MESSAGE}${
        winningResults[WINNING_LOTTO_COUNT.SIX]
      }${UNIT_MESSAGE}`
    );
    printMessage(
      `${TOTAL_RETURN_MESSAGE}${totalProfitMargin(
        amount,
        winningResults
      )}${TOTAL_RETURN_GUIDE_MESSAGE}`
    );
  }
}

export default App;
