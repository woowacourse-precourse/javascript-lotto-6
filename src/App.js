import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    const purchaseCount = purchaseAmount / 1000;

    Console.print(`${purchaseCount}개를 구매했습니다.\n`);
    const lottoRandomNumbers = [];
    for (let i = 0; i < purchaseCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoRandomNumbers.push(randomNumber);
    }

    const winningNumbers = await Console.readLineAsync('당첨 번호를 입력해주세요.\n');
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해주세요.\n');
  }
}

export default App;
