import { MissionUtils } from '@woowacourse/mission-utils';
import Messages from './Messages.js';

class LottoGame {
  #purchaseAmount;

  getPurchaseAmount = async () => {
    const input_amount = await MissionUtils.Console.readLineAsync(
      Messages.PURCHASE_AMOUNT_INPUT
    );
    if (isNaN(input_amount)) {
      throw new Error(Messages.PURCHASE_AMOUNT_ISNAN);
    }
    if (input_amount % 1000 !== 0) {
      throw new Error(Messages.PURCHASE_AMOUNT_NOT_DIVIDED);
    }
    this.#purchaseAmount = parseInt(input_amount) / 1000;
  };

  playGame = () => {
    try {
      this.getPurchaseAmount();
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default LottoGame;
