import AppError from './errors/error.js';
import { Console } from '@woowacourse/mission-utils';
import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';
import Lotto from './Domain/Lotto.js';
import MESSAGE from './constants/message.js';
import { MessageFormat } from './utils/messageFormat.js';

class App {
  #lotto;

  constructor() {
    this.amount = 0;
  }

  async play() {
    try {
      /**
       * 1. 로또 구입 금액 입력
       */
      this.amount = await this.inputUserPurchaseAmount();
      const ticketCount = App.calculateTicketCountFromAmount(this.amount);
      const lottoTickets = this.purchaseLotto(ticketCount);

      // 6. (출력) 당첨 내역 출력
      const userLotto = await this.inputUserLotto();
      this.#lotto = new Lotto(userLotto.winningNumbers.split(',').map(Number));
      this.#lotto.compareWinningAndLotto(userLotto, lottoTickets);
      this.#lotto.printTotalResult();

      this.resultReturnRate();
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }

  /**
   * 1. (입력) 로또 구입 금액 입력
   */
  async inputUserPurchaseAmount() {
    const amount = await Console.readLineAsync(MESSAGE.input.PurchaseAmount);
    return App.validateNumericAmount(amount);
  }

  /**
   * 1.1. 문자가 포함되는 경우 걸러낸다.
   */
  static validateNumericAmount(amount) {
    const numericPattern = /^(?:[1-9]\d{3,}|[1-9]\d{0,2}(,\d{3})+)$/;
    if (!numericPattern.test(amount)) {
      throw new AppError(ERROR.message.invalidPurchase);
    }
    return parseInt(amount.replace(/,/g, ''), 10);
  }

  /**
   * 1.2. 1000단위 이상의 숫자를 받아서 티켓의 갯수를 알려준다.
   */
  static calculateTicketCountFromAmount(validatedAmount) {
    if (validatedAmount % LOTTO.unit.unit) {
      throw new AppError(ERROR.message.invalidUnit);
    }
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
    const lottoTickets = Lotto.generateLottoTickets(ticketCount);
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
    // 3.1 winningNumbers
    const winningNumbers = await Console.readLineAsync(MESSAGE.input.WinningNumbers);
    const winningNumbersSet = new Set(winningNumbers.split(',').map(Number));
    // 3.1.1 (예외) 중복인 경우
    if (winningNumbersSet.size !== 6) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
    // // 3.1.2 (예외) ,, 이 중복으로 들어간 경우 : 1,2,,3,4,5
    // if (winningNumbersSet.has(0)) {
    //   throw new AppError(ERROR.message.noZero);
    // }
    // console.log(winningNumbersSet);

    // 3.2 bonusNumber
    const inputbonusNumber = await Console.readLineAsync(MESSAGE.input.BonusNumbers);
    const bonusNumber = Number(inputbonusNumber);
    if (winningNumbersSet.has(bonusNumber)) {
      throw new AppError(ERROR.message.duplicateBonusNumber);
    }

    const userLotto = {
      winningNumbers,
      bonusNumber,
    };

    return userLotto;
  }

  /**
   * 4. 수익률
   */
  resultReturnRate() {
    this.#lotto.calculateReturnRate(this.amount);
  }
}

export default App;
