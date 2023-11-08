import { INPUT, OUTPUT } from '../constant/index.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../validator/Validator.js';

class LottoView {
  static async readBuyingPrice() {
    try {
      const buyingPrice = await InputView.readNumber(INPUT.BUYING_PRICE);
      Validator.validateBuyingPrice(buyingPrice);
      return buyingPrice;
    } catch (e) {
      LottoView.printErrorMessage(e.message);
      return await LottoView.readBuyingPrice();
    }
  }

  static async readWinningNumbers() {
    try {
      const winningNumbers = await InputView.readNumbers(INPUT.WINNING_NUMBERS);
      Validator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (e) {
      LottoView.printErrorMessage(e.message);
      return await LottoView.readWinningNumbers();
    }
  }

  static async readBonusNumber(winningNumbers) {
    try {
      OutputView.printNewLine();
      const bonusNumber = await InputView.readNumber(INPUT.BONUS_NUMBERS);
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (e) {
      LottoView.printErrorMessage(e.message);
      return await LottoView.readBonusNumber(winningNumbers);
    }
  }

  static printErrorMessage(message) {
    OutputView.printNewLine(message);
    OutputView.print(message);
    OutputView.printNewLine(message);
  }

  static printBuyingLottos(lottos) {
    OutputView.printNewLine();
    OutputView.print(OUTPUT.BUY_TICKET(lottos));
    lottos.forEach(lotto =>
      OutputView.print(`[${lotto.getNumbers().join(', ')}]`)
    );
    OutputView.printNewLine();
  }

  static printlottoResult({ first, second, third, fourth, fifth }) {
    OutputView.printNewLine();
    OutputView.print('당첨 통계');
    OutputView.print('---');
    OutputView.print(OUTPUT.FIFTH_PRIZE(fifth));
    OutputView.print(OUTPUT.FOURTH_PRIZE(fourth));
    OutputView.print(OUTPUT.THIRD_PRIZE(third));
    OutputView.print(OUTPUT.SECOND_PRIZE(second));
    OutputView.print(OUTPUT.FIRST_PRIZE(first));
  }

  static printLottoReturnRate(rate) {
    OutputView.print(OUTPUT.RETURN_RATE(rate));
  }
}

export default LottoView;
