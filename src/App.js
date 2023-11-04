/* eslint-disable max-lines-per-function */
import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    const payAmount = await Console.readLineAsync('구입금액을 입력해주세요.\n');

    const purchaseQuantity = Number(payAmount) / 1000;
    Console.print(`${purchaseQuantity}개를 구매했습니다.`);

    const lottoNumbers = Array.from({ length: purchaseQuantity }, () => {
      const random = Random.pickUniqueNumbersInRange(1, 45, 6);
      return random.sort((a, b) => a - b);
    });

    // 각 로또 번호를 콘솔 출력
    lottoNumbers.forEach((el) => Console.print(`[${el.join(', ')}]`));

    const userNumber = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );

    const result = userNumber.split(',');

    const lotto = new Lotto(result);
  }
}

export default App;
