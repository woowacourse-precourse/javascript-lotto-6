import { Console } from '@woowacourse/mission-utils';
import LottoPurchase from '../validates/lottoPurchase.js';
import { MESSAGES } from '../constants/messages.js';

class User {
  async calculateLottoCount() {
    while (true) {
      try {
        const inputAmount = await Console.readLineAsync(
          MESSAGES.input.purchaseAmount,
        );
        const amount = parseInt(inputAmount);

        LottoPurchase.validateFormat(amount);
        LottoPurchase.validateMinimumAmount(amount);

        const lottoCount = Math.floor(amount / 1000);
        Console.print(`\n${lottoCount}${MESSAGES.output.lottoPurchased}`);
        return lottoCount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default User;
