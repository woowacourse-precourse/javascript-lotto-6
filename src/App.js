import LottoController from './controller/LottoController.js';
import retryOnError from './utils/retry.js';
import InputView from './views/InputView.js';

class App {
  async play() {
    const money = await retryOnError(InputView.readMoney);
    const lottoController = new LottoController(money);

    const winningNumbers = await retryOnError(InputView.readWinningNumbers);
    const bonusNumber = await retryOnError(
      InputView.readBonusNumber,
      winningNumbers,
    );

    lottoController.compareLottos(winningNumbers, bonusNumber);
    lottoController.showLottoResult();
  }
}

export default App;
