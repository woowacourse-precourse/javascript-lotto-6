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
    const result = userNumber.split(',').map(Number);
    const lotto = new Lotto(result);

    const BonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );

    const winningNumbers = {};
    const winningStats = {
      3: '3개 일치 (5,000원) ',
      4: '4개 일치 (50,000원) ',
      5: '5개 일치 (1,500,000원) ',
      '2nd': '5개 일치, 보너스 볼 일치 (30,000,000원) ',
      6: '6개 일치 (2,000,000,000원) ',
    };

    lottoNumbers.forEach((lottoNum) => {
      const sameCount = lotto.checkLotteryResult(lottoNum, Number(BonusNumber));

      if (sameCount > 2) {
        winningNumbers[sameCount] = (winningNumbers[sameCount] || 0) + 1;
      }
    });

    Object.keys(winningStats).forEach((el) => {
      if (!winningStats[el]) winningStats[el] = 0;
      if (!winningNumbers[el]) winningNumbers[el] = 0;

      Console.print(`${winningStats[el]}- ${winningNumbers[el]}개`);
    });
  }
}

export default App;
