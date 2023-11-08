import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages';

class OutputView {
  static printErrorMessage(error) {
    Console.print(error.message);
  }

  static printPurchaseHeader(perchaseQuentity) {
    Console.print(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);
  }

  static printWinningNumber(winningNumber) {
    Console.print(`[${winningNumber.join(', ')}]`);
  }

  static printLottoResultHeader() {
    Console.print(MESSAGES.winningResult);
    Console.print(MESSAGES.divisionLine);
  }

  static printLottoResult(index, result) {
    Console.print(
      `${MESSAGES.matchResult[index]}${MESSAGES.matchQuantity(result)}`,
    );
  }

  static printProfitRate(profitRate) {
    Console.print(MESSAGES.profitRate(profitRate));
  }
}

export default OutputView;
