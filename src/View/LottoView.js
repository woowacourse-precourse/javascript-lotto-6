import { INPUT } from '../constant/index.js';
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
    OutputView.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto =>
      OutputView.print(`[${lotto.getNumbers().join(', ')}]`)
    );
    OutputView.printNewLine();
  }

  static printlottoResult({ first, second, third, fourth, fifth }) {
    OutputView.printNewLine();
    OutputView.print('당첨 통계');
    OutputView.print('---');
    OutputView.print(`3개 일치 (5,000원) - ${fifth}개`);
    OutputView.print(`4개 일치 (50,000원) - ${fourth}개`);
    OutputView.print(`5개 일치 (1,500,000원) - ${third}개`);
    OutputView.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
    OutputView.print(`6개 일치 (2,000,000,000원) - ${first}개`);
  }

  static printLottoReturnRate(rate) {
    OutputView.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default LottoView;
