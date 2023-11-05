import { Console } from '@woowacourse/mission-utils';
import ExceptionHandler from './utils/ExceptionHandler.js';
import LOTTO from './constants/lotto.js';
import Lotto from './Domain/Lotto.js';
import LottoNumberCreation from './Domain/LottoNumberCreation.js';
import MESSAGE from './constants/message.js';
import { MessageFormat } from './utils/messageFormat.js';

class App {
  #lotto;

  constructor() {
    this.validatedAmount = 0;
  }

  async play() {
    try {
      const amount = await this.inputUserPurchaseAmount();
      const lottoTickets = this.purchaseLotto(amount);

      // 6. (출력) 당첨 내역 출력
      const userLotto = await this.inputUserLotto();
      this.#lotto = new Lotto(userLotto.winningNumbers.split(',').map(Number));
      this.#lotto.compareWinningAndLotto(userLotto.bonusNumber, lottoTickets);
      this.#lotto.printTotalResult();

      this.resultReturnRate();
    } catch (error) {
      Console.print(`"play" ${error.message}`);
    }
  }

  /**
   * 1. (입력) 로또 구입 금액 입력
   */
  async inputUserPurchaseAmount() {
    while (true) {
      try {
        const amount = await Console.readLineAsync(MESSAGE.input.PurchaseAmount);
        this.validatedAmount = ExceptionHandler.validateAmount(amount);
        return this.calculateTicketCountFromAmount(this.validatedAmount);
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  calculateTicketCountFromAmount(validatedAmount) {
    return validatedAmount / LOTTO.unit.unit;
  }

  /**
   * 2. (출력) 로또 구매
   * - 입력한 금액에 따른 구매 갯수와 구매한 로또 번호 출력.
   */
  purchaseLotto(ticketCount) {
    this.printPurchaseConfirm(ticketCount);
    return this.purchaseLottoTickets(ticketCount);
  }

  /**
   * 2.1. 입력한 금액에 따른 구매 갯수
   */
  printPurchaseConfirm(ticketCount) {
    Console.print(MessageFormat.purchaseConfirm(ticketCount));
  }

  /**
   * 2.2 (출력) 구매 갯수만큼 로또 번호 출력
   */
  purchaseLottoTickets(ticketCount) {
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

  async inputUserLotto() {
    while (true) {
      try {
        const userLotto = await this.getUserLottoInput();
        return userLotto;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  async getUserLottoInput() {
    const inputWinningNumbers = await Console.readLineAsync(MESSAGE.input.WinningNumbers);
    const winningNumbers = ExceptionHandler.validateWinningNumbers(inputWinningNumbers);

    const inputBonusNumber = await Console.readLineAsync(MESSAGE.input.BonusNumbers);
    const bonusNumber = ExceptionHandler.validateBonusNumber(inputBonusNumber, winningNumbers);

    return {
      winningNumbers,
      bonusNumber,
    };
  }

  /**
   * 4. 수익률
   */
  resultReturnRate() {
    this.#lotto.calculateReturnRate(this.validatedAmount);
  }
}

export default App;
