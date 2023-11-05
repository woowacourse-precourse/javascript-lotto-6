import { Console } from '@woowacourse/mission-utils';
import ExceptionHandler from './utils/ExceptionHandler.js';
import LOTTO from './constants/lotto.js';
import Lotto from './Domain/Lotto.js';
import LottoNumberCreation from './Domain/LottoNumberCreation.js';
import MESSAGE from './constants/message.js';
import { MessageFormat } from './utils/messageFormat.js';
import { calcaulateTicketCountFromAmount } from './utils/index.js';

class App {
  #lotto;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.validatedAmount = 0;
  }

  async play() {
    try {
      const purchaseAmount = await this.inputWithRetry(this.inputUserPurchaseAmount.bind(this));
      const lottoTickets = this.purchaseLotto(purchaseAmount);

      this.#winningNumbers = await this.inputWithRetry(this.inputUserWinningNumbers.bind(this));
      this.#bonusNumber = await this.inputWithRetry(this.inputUserBonusNumber.bind(this));

      this.#lotto = new Lotto(this.#winningNumbers.split(LOTTO.string.comma).map(Number));
      this.#lotto.compareWinningAndLotto(this.#bonusNumber, lottoTickets);
      this.#lotto.printTotalResult();

      this.resultReturnRate();
    } catch (error) {
      Console.print(`${error.stack} ${error.message}`);
    }
  }

  async inputWithRetry(inputMethod) {
    while (true) {
      try {
        return await inputMethod();
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  /**
   * 1. (입력) 로또 구입 금액 입력
   */
  async inputUserPurchaseAmount() {
    const amount = await Console.readLineAsync(MESSAGE.input.PurchaseAmount);
    this.validatedAmount = ExceptionHandler.validateAmount(amount);
    return calcaulateTicketCountFromAmount(this.validatedAmount);
  }

  // utils로 빼는 것이 좋겠..다?
  // calculateTicketCountFromAmount(validatedAmount) {
  //   return validatedAmount / LOTTO.unit.unit;
  // }

  /**
   * 2. (출력) 로또 구매
   * - 입력한 금액에 따른 구매 갯수와 구매한 로또 번호 출력.
   */
  purchaseLotto(ticketCount) {
    this.printPurchaseConfirm(ticketCount);
    return this.purchaseLottoTickets(ticketCount);
  }

  printPurchaseConfirm(ticketCount) {
    /**
     * 2.1. 입력한 금액에 따른 구매 갯수
     */
    Console.print(MessageFormat.purchaseConfirm(ticketCount));
  }

  purchaseLottoTickets(ticketCount) {
    /**
     * 2.2 (출력) 구매 갯수만큼 로또 번호 출력
     */
    const lottoTickets = LottoNumberCreation.generateLottoTickets(ticketCount);
    lottoTickets.forEach((ticket) => this.printLottoTickets(ticket));

    return lottoTickets;
  }

  printLottoTickets(ticket) {
    Console.print(`[${ticket.join(', ')}]`);
  }

  /**
   * 3. (입력)
   * -  당첨 번호 6개와 보너스 번호 입력 받기
   */
  async inputUserWinningNumbers() {
    const inputWinningNumbers = await Console.readLineAsync(MESSAGE.input.WinningNumbers);
    return ExceptionHandler.validateWinningNumbers(inputWinningNumbers);
  }

  async inputUserBonusNumber() {
    const inputBonusNumber = await Console.readLineAsync(MESSAGE.input.BonusNumbers);
    return ExceptionHandler.validateBonusNumber(inputBonusNumber, this.#winningNumbers);
  }

  /**
   * 4. 수익률
   */
  resultReturnRate() {
    this.#lotto.calculateReturnRate(this.validatedAmount);
  }
}

export default App;
