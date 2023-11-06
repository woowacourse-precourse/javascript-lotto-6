import { INPUT } from './constant/index.js';
import BonusNumber from './BonusNumber.js';
import InputView from './View/InputView.js';
import LottoVendingMachine from './LottoVendingMachine.js';
import LottoWinnerVerifier from './LottoWinnerVerifier.js';
import OutputView from './View/OutputView.js';
import ReturnRateCalculator from './ReturnRateCalculator.js';
import WinningNumbers from './WinningNumbers.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const { lottos, buyingPrice } = await App.buyLotto();
    OutputView.printBuyingLottos(lottos);

    const winningNumbers = await App.drawLottoNumbers();
    const outcome = App.getLottoOutcome({ winningNumbers, lottos });
    OutputView.lottoOutcome(outcome);

    const returnRate = ReturnRateCalculator.getReturnRate(outcome, buyingPrice);
    OutputView.lottoRate(returnRate);
  }

  static async buyLotto() {
    let result;

    try {
      const buyingPrice = await InputView.readLine(INPUT.BUYING_PRICE);
      const lottos = LottoVendingMachine.buyLottoTickets(buyingPrice);

      result = { lottos, buyingPrice };
    } catch (e) {
      OutputView.print(e.message);
      result = await App.buyLotto();
    }

    return result;
  }

  static async drawLottoNumbers() {
    const winningNumbers = await App.getWinningNumbers();
    const bonusNumber = await App.getBonusNumber(winningNumbers);

    return {
      winningNumbers: winningNumbers,
      bonusNumber: bonusNumber,
    };
  }

  static async getWinningNumbers() {
    let result;

    try {
      const winningNumbersInput = await InputView.readLine(
        INPUT.WINNING_NUMBERS
      );

      result = new WinningNumbers(
        winningNumbersInput.split(',').map(Number)
      ).getWinningNumbers();
    } catch (e) {
      OutputView.print(e.message);
      result = await App.getWinningNumbers();
    }

    return result;
  }

  static async getBonusNumber(winningNumbers) {
    let result;

    try {
      const bonusNumberInput = await InputView.readLine(INPUT.BONUS_NUMBERS);

      result = new BonusNumber(
        winningNumbers,
        bonusNumberInput
      ).getBonusNumber();
    } catch (e) {
      OutputView.print(e.message);
      result = await App.getBonusNumber([...winningNumbers]);
    }

    return result;
  }

  static getLottoOutcome({ winningNumbers, lottos }) {
    const verifier = new LottoWinnerVerifier(winningNumbers);
    return verifier.checkLottoOutcome(lottos);
  }
}

export default App;
