import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    const price = await Console.readLineAsync('구입금액을 입력해 주세요.');
    const lottoGame = new LottoGame(price);

    for (let i = 0; i < lottoGame.count; i++) {
      lottoGame.addLotto(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    Console.print(`${lottoGame.count}개를 구매했습니다.`);
    lottoGame.lottos.map(lotto => Console.print(lotto.getNumber()));

    const winningNumberInput =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const bonusNumberInput =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');

    lottoGame.addWinningNumbers(winningNumberInput.split(','));
    lottoGame.addBonusNumber(bonusNumberInput);

    Console.print(lottoGame);
  }
}

export default App;
