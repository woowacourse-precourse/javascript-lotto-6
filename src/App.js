/* eslint-disable */
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('구입금액을 입력해 주세요.');
    const money = Number(await Console.readLineAsync(''));
    if (money % 1000 > 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요');
    }

    Console.print('');
    Console.print(`${money / 1000}개를 구매했습니다.`);
    const lottos = Array.from({ length: money / 1000 }, () => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => a - b);
      console.log(`[${lotto.join(', ')}]`);
      return lotto;
    });

    Console.print('');
    Console.print('당첨 번호를 입력해 주세요.');
    const winningNumbers = (await Console.readLineAsync(''))
      .trim()
      .split(',')
      .map(Number);

    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
    const bonus = Number(await Console.readLineAsync(''));
  }
}

export default App;
