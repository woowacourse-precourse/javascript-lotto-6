import LottoGame from './LottoGame.js';
import {
  getBonus, getPurchaseMoney, getWinningLotto, printResult,
} from './ConsoleManager.js';

class App {
  async play() {
    const purchaseMoney = await getPurchaseMoney();

    const lottos = LottoGame.getRandomLottos(purchaseMoney / 1000);

    const winningLotto = await getWinningLotto();

    const bonus = await getBonus();

    const lottoGame = new LottoGame(lottos, winningLotto, bonus);
    const { lottoPrizes, lottoPrizeMoney } = lottoGame.getLottoPrizes();

    printResult(lottoPrizes, lottoPrizeMoney, purchaseMoney);
  }
}

export default App;
