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
    lottoGame.calculateLottoResult();

    Console.print('당첨 통계');
    Console.print(`3개 일치 (5,000)원 - ${lottoGame.fifth}개`);
    Console.print(`4개 일치 (50,000)원 - ${lottoGame.fourth}개`);
    Console.print(`5개 일치 (1,500,000)원 - ${lottoGame.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000)원 - ${lottoGame.seccond}개`,
    );
    Console.print(`6개 일치 (2,000,000,000)원 - ${lottoGame.fifth}개`);
  }
}

export default App;
