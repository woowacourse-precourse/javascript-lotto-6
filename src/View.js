import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE, STATS_MESSAGE } from './constants/messages.js';
import Validator from './utils/Validator.js';

class View {
  static getUserInput(amount) {
    return Console.readLineAsync(amount);
  }

  static printMessage(message) {
    return Console.print(message);
  }

  async getPurchaseAmount() {
    try {
      const purchaseAmount = await View.getUserInput(
        INFO_MESSAGE.PURCHASE_AMOUNT_ASK_MESSAGE,
      );

      Validator.checkPurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      // View.printMessage(error);
      return this.getPurchaseAmount();
    }
  }

  async getLottoNumber() {
    try {
      const lottoNumbers = await View.getUserInput(
        INFO_MESSAGE.LOTTO_NUMBERS_ASK_MESSAGE,
      );
      const lottoNumbersArray = lottoNumbers.split(',').map(Number);
      Validator.checkLottoNumbers(lottoNumbersArray);
      return lottoNumbersArray;
    } catch (error) {
      // View.printMessage(error);
      return this.getLottoNumber();
    }
  }

  async getBonusNumber(lottoNumbersArray) {
    try {
      const bonusNumber = Number(
        await View.getUserInput(INFO_MESSAGE.BONUS_NUMBER_ASK_MESSAGE),
      );
      Validator.checkBonusNumber(bonusNumber, lottoNumbersArray);
      return bonusNumber;
    } catch (error) {
      // View.printMessage(error);
      return this.getBonusNumber(lottoNumbersArray);
    }
  }

  static printPurchasedTicketNumber(purchasedTicktesCount) {
    return Console.print(`\n${purchasedTicktesCount}개를 구매했습니다.`);
  }

  static printPurchasedTicketsInfo(ticktes) {
    return ticktes.forEach(ticket => {
      Console.print(`[${ticket.sort((a, b) => a - b).join(', ')}]`);
    });
  }

  static printWinningResult(rank) {
    View.printMessage(STATS_MESSAGE.WINNING_STATS_INFO);
    return Object.entries(rank).forEach(rankElem => {
      View.printMessage(`${STATS_MESSAGE[rankElem[0]]} - ${rankElem[1]}개`);
    });
  }

  static printProfitRate(profitRate) {
    return View.printMessage(`\n총 수익률은 ${profitRate}%입니다.`);
  }
}

export default View;
