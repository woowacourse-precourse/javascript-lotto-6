import { Console } from '@woowacourse/mission-utils';

class User {
  async calculateLottoCount() {
    while (true) {
      try {
        const inputAmount =
          await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const amount = parseInt(inputAmount);

        if (isNaN(amount) || amount < 1000) {
          throw new Error('[ERROR] 최소 1,000원 이상 입력해주세요.');
        } else {
          const lottoCount = Math.floor(amount / 1000);
          Console.print(`${lottoCount}개를 구매했습니다.`);
          return lottoCount;
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default User;
