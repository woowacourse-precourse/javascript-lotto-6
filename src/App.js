import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoManager from './domain/LottoManager.js';
import Bank from './domain/Bank.js';

class App {
  async play() {
    const money = await InputView.readMoney();
    const amount = money / 1000;
    OutputView.printPurchaseAmount(amount);

    const lottoManager = new LottoManager(amount);
    OutputView.printNumbers(lottoManager.getLottos());

    const winNumbers = await InputView.readWinNumbers();
    lottoManager.generateWinLotto(winNumbers);

    const bonusNumber = await InputView.readBonusNumber(winNumbers);
    lottoManager.setBonusNumber(bonusNumber);

    const prize = lottoManager.getPrizeCount();
    OutputView.printPrize(prize);

    const bank = new Bank(money, prize);
    OutputView.printProfitRate(bank.getProfitRate());
  }
}

export default App;
