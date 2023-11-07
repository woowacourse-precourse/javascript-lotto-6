import { INPUT } from './constant/index.js';
import InputView from './View/InputView.js';
import Lotto from './Lotto.js';
import LottoShop from './LottoShop.js';
import LottoWinnerVerifier from './LottoWinnerVerifier.js';
import OutputView from './View/OutputView.js';
import ReturnRateCalculator from './ReturnRateCalculator.js';
import Validator from './validator/Validator.js';

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
      const buyingPrice = await InputView.readNumber(INPUT.BUYING_PRICE);
      Validator.validateGreaterThanZero(buyingPrice);
      Validator.validateValidUnit(buyingPrice);
      const lottos = LottoShop.issueLottoTickets(buyingPrice);

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
      const winningNumbers = await InputView.readNumbers(INPUT.WINNING_NUMBERS);
      Validator.validateLottoNumbersLength(winningNumbers);
      winningNumbers.forEach(Validator.validateLottoNumberRange);
      Validator.validateUniqueLottoNumbers(winningNumbers);
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
      Validator.validateLottoNumberRange(bonusNumber);
      Validator.validateUniqueBonusNumber(bonusNumber, winningNumbers);
      result = bonusNumber;
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
