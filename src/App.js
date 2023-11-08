import LottoGame from './LottoGame.js';
import {
  getBonus, getPurchaseMoney, getWinningLotto, printResult,
} from './ConsoleManager.js';

class App {
  async play() {
    const lottoGame = new LottoGame();

    const purchaseMoney = await getPurchaseMoney();
    lottoGame.buyLottos(purchaseMoney / 1000);

    lottoGame.setWinningLotto(await getWinningLotto());

    lottoGame.setBonus(await getBonus());

    const { lottoPrizes, lottoPrizeMoney } = lottoGame.getLottoPrizes();

    printResult(lottoPrizes, lottoPrizeMoney, purchaseMoney);
  }
}

export default App;
