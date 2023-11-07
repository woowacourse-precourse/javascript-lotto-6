import { INPUT } from './constant/index.js';
import InputView from './View/InputView.js';
import LottoReturnRateCalculator from './LottoReturnRateCalculator.js';
import LottoResultCalculator from './LottoResultCalculator.js';
import LottoShop from './LottoShop.js';
import OutputView from './View/OutputView.js';
import Validator from './validator/Validator.js';

class App {
  async play() {
    const { lottos, buyingPrice } = await App.buyLotto();
    OutputView.printBuyingLottos(lottos);

    const { winningNumbers, bonusNumber } = await App.drawLottoBalls();
    const lottoResult = App.checkLottoResult(
      {
        winningNumbers,
        bonusNumber,
      },
      lottos
    );
    OutputView.lottoOutcome(lottoResult);

    const calculator = new LottoReturnRateCalculator(lottoResult, buyingPrice);
    OutputView.lottoRate(calculator.calculateReturnRate());
  }

  static async buyLotto() {
    let result;

    try {
      const buyingPrice = await InputView.readNumber(INPUT.BUYING_PRICE);
      Validator.validateBuyingPrice(buyingPrice);
      const lottos = LottoShop.issueLottoTickets(buyingPrice);

      result = { lottos, buyingPrice };
    } catch (e) {
      OutputView.print(e.message);
      result = await App.buyLotto();
    }

    return result;
  }

  static async drawLottoBalls() {
    const winningNumbers = await App.getWinningNumbers();
    const bonusNumber = await App.getBonusNumber(winningNumbers);

    return {
      winningNumbers,
      bonusNumber,
    };
  }

  static async getWinningNumbers() {
    let result;

    try {
      const winningNumbers = await InputView.readNumbers(INPUT.WINNING_NUMBERS);
      Validator.validateLottoNumbers(winningNumbers);
      result = winningNumbers;
    } catch (e) {
      OutputView.print(e.message);
      result = await App.getWinningNumbers();
    }

    return result;
  }

  static async getBonusNumber(winningNumbers) {
    let result;

    try {
      const bonusNumber = await InputView.readNumber(INPUT.BONUS_NUMBERS);
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
      result = bonusNumber;
    } catch (e) {
      OutputView.print(e.message);
      result = await App.getBonusNumber([...winningNumbers]);
    }

    return result;
  }

  static checkLottoResult(lottoBalls, lottos) {
    const verifier = new LottoResultCalculator(lottoBalls);
    return verifier.checkLottoResult(lottos);
  }
}

export default App;
