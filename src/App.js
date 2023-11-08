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

    const returnRate = App.calculateLottoReturnRate({
      lottoResult,
      buyingPrice,
    });
    OutputView.lottoRate(returnRate);
  }

  static async buyLotto() {
    try {
      const buyingPrice = await InputView.readNumber(INPUT.BUYING_PRICE);
      Validator.validateBuyingPrice(buyingPrice);
      const lottos = LottoShop.issueLottoTickets(buyingPrice);

      return { lottos, buyingPrice };
    } catch (e) {
      OutputView.print(e.message);
      return await App.buyLotto();
    }
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
    try {
      const winningNumbers = await InputView.readNumbers(INPUT.WINNING_NUMBERS);
      Validator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (e) {
      OutputView.print(e.message);
      return await App.getWinningNumbers();
    }
  }

  static async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readNumber(INPUT.BONUS_NUMBERS);
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (e) {
      OutputView.print(e.message);
      return await App.getBonusNumber([...winningNumbers]);
    }
  }

  static checkLottoResult(lottoBalls, lottoTickets) {
    const verifier = new LottoResultCalculator(lottoBalls);
    return verifier.checkLottoResult(lottoTickets);
  }

  static calculateLottoReturnRate(operands) {
    const calculator = new LottoReturnRateCalculator(operands);
    return calculator.calculateReturnRate();
  }
}

export default App;
