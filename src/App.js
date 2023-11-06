import { Console } from '@woowacourse/mission-utils';
import ExceptionHandler from './utils/ExceptionHandler.js';
import LOTTO from './constants/lotto.js';
import Lotto from './Domain/Lotto.js';
import LottoChecker from './Domain/LottoChecker.js';
import LottoPurchaseInput from './Domain/LottoPurchaseInput.js';
import LottoReturn from './Domain/LottoReturn.js';
import MESSAGE from './constants/message.js';

class App {
  /**
   * 로또 게임을 실행합니다.
   */
  async play() {
    const lottoPurchaseInput = new LottoPurchaseInput();
    const purchaseAmount = await this.inputWithRetry(
      lottoPurchaseInput.inputPurchaseAmount.bind(lottoPurchaseInput),
    );

    const lottoTickets = lottoPurchaseInput.purchaseLotto(purchaseAmount);

    const winningNumbers = await this.inputWithRetry(this.inputUserWinningNumbers.bind(this));
    const bonusNumber = await this.inputWithRetry(
      this.inputUserBonusNumber.bind(this),
      winningNumbers,
    );

    this.checkLottoAndPrizeResult(winningNumbers, bonusNumber, lottoTickets, purchaseAmount);
  }

  /**
   * 입력을 받고 검증합니다. 검증에 실패하면 다시 입력을 받습니다.
   * @param {Function} inputMethod 입력을 받는 메서드
   * @param {Array} winningNumbers 당첨 번호
   * @returns {Promise<string>} 검증된 입력 값
   */
  async inputWithRetry(inputMethod, winningNumbers) {
    while (true) {
      try {
        return await inputMethod(winningNumbers);
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  async inputUserWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(MESSAGE.input.WinningNumbers);
    return ExceptionHandler.validateWinningNumbers(inputWinningNumbers);
  }

  async inputUserBonusNumber(winningNumbers) {
    const inputBonusNumber = await Console.readLineAsync(MESSAGE.input.BonusNumbers);
    return ExceptionHandler.validateBonusNumber(inputBonusNumber, winningNumbers);
  }

  /**
   * 로또 번호를 확인하고 결과를 출력합니다.
   * @param {string} winningNumbers 당첨 번호
   * @param {string} bonusNumber 보너스 번호
   * @param {Array} lottoTickets 로또 티켓들
   * @param {number} purchaseAmount 구매 금액
   */
  checkLottoAndPrizeResult(winningNumbers, bonusNumber, lottoTickets, purchaseAmount) {
    const lotto = new Lotto(winningNumbers.split(LOTTO.string.comma).map(Number));
    const lottoChecker = new LottoChecker(lotto);
    const lottoCheckerResult = lottoChecker.compareWinningAndLotto(bonusNumber, lottoTickets);
    lottoChecker.printTotalResult(lottoCheckerResult);

    LottoReturn.calculateReturnRate(lottoCheckerResult, purchaseAmount);
  }
}

export default App;
