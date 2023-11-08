import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';
import SCENARIO from './constant/scenario.js';
import { getUserValidInputRecursive } from './util.js';

class App {
  async play() {
    let lottoGame;

    await getUserValidInputRecursive(SCENARIO.enter_price, result => {
      lottoGame = new LottoGame(result);
    });

    lottoGame.addLottos();
    Console.print(`${lottoGame.count}${SCENARIO.buy_count}`);
    lottoGame.printLottos();

    await getUserValidInputRecursive(SCENARIO.enter_winning_number, result => {
      lottoGame.addWinningNumbers(result);
    });
    await getUserValidInputRecursive(SCENARIO.enter_bonus_number, result => {
      lottoGame.addBonusNumber(result);
    });

    lottoGame.calculateLottoResult();
    lottoGame.calculateLottoPrize();
    lottoGame.printResult();
  }
}

export default App;
