import { Console } from '@woowacourse/mission-utils';
import LottoPurchase from '../validates/lottoPurchase.js';

class User {
  async calculateLottoCount() {
    while (true) {
      try {
        const inputAmount =
          await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const amount = parseInt(inputAmount);

        LottoPurchase.validateFormat(amount);
        LottoPurchase.validateMinimumAmount(amount);

        const lottoCount = Math.floor(amount / 1000);
        Console.print(`\n${lottoCount}개를 구매했습니다.`);
        return lottoCount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default User;
