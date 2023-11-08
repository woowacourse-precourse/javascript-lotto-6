import * as Game from './Game';
import * as Input from './UserInput';
import * as Print from './Print';


class App {
  async play() {
    const amount = await Input.getPurchaseAmount();
    Input.validatePurchaseAmount(amount);

    const quantity = parseInt(amount / 1000);
    const lotteries = Game.LottoMaker(quantity);
    Print.printLotteries(quantity, lotteries);

    const lottoNumbers = await Input.validateLottoNumbers();

    const winningNumbers = lottoNumbers.getWinningNumbers().getWinningNumbers();
    const bonusNumber = lottoNumbers.getBonusNumber();

    Print.printLottoCount(winningNumbers, bonusNumber, lotteries);
    Print.printLottoReturns(quantity, winningNumbers, bonusNumber, lotteries);

  }
}

export default App;
