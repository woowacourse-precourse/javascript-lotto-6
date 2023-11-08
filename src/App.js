import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';
import SCENARIO from './constant/scenario.js';
import { getUserValidInputRecursive } from './util.js';

class App {
  lottoGame;

  async play() {
    await getUserValidInputRecursive(SCENARIO.enter_price, result => {
      this.lottoGame = new LottoGame(result);
    });

    this.lottoGame.addLottos();
    Console.print(`${this.lottoGame.count}${SCENARIO.buy_count}`);
    this.lottoGame.printLottos();

    await getUserValidInputRecursive(SCENARIO.enter_winning_number, result => {
      this.lottoGame.addWinningNumbers(result);
    });
    await getUserValidInputRecursive(SCENARIO.enter_bonus_number, result => {
      this.lottoGame.addBonusNumber(result);
    });

    this.lottoGame.calculateLottoResult();
    this.lottoGame.calculateLottoPrize();
    this.lottoGame.printResult();
  }
}

export default App;
