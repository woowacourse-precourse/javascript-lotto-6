import * as GameFactors from './GameFactors';

class App {
  async play() {
    const amount = await GameFactors.getPurchaseAmount();
    GameFactors.validatePurchaseAmount(amount);

    const quantity = parseInt(amount / 1000);
    const lotteries = GameFactors.LottoMaker(quantity);
    GameFactors.printLotteries(quantity, lotteries);

    const lottoNumbers = await GameFactors.validateLottoNumbers();

    const winningNumbers = lottoNumbers.getWinningNumbers().getWinningNumbers();
    const bonusNumber = lottoNumbers.getBonusNumber();

    GameFactors.printLottoCount(winningNumbers, bonusNumber, lotteries);
    GameFactors.printLottoReturns(quantity, winningNumbers, bonusNumber, lotteries);

  }
}

export default App;
