import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validation from './utils/Validation.js';
import { LOTTO_PURCHASE_UNIT, LOTTO_NUMBER, PRIZE, TOTAL_RETURN } from './constants/Condition.js';

class Game {
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(LOTTO_NUMBER.seperator).map((number) => {
      return Number(number);
    });
  }

  #validateWinningNumbers(winningNumbers) {
    Validation.validateInputHasCommas(winningNumbers);

    const parsedWinningNumbers = this.#parseWinningNumbers(winningNumbers);

    Validation.validateInputDuplicate(parsedWinningNumbers);
    Validation.validateInputLength(parsedWinningNumbers, LOTTO_NUMBER.length);

    parsedWinningNumbers.forEach((number) => {
      Validation.validateInputNumber(number);
      Validation.validateInputOutOfLottoRange(number);
    });
  }

  #validateBonusNumber(bonusNumber) {
    Validation.validateInputNumber(bonusNumber);
    Validation.validateInputOutOfLottoRange(bonusNumber);
    Validation.validateInputDuplicateWinningNumbers(bonusNumber, this.#winningNumbers);
  }

  setWinningNumbers(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = this.#parseWinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUMBER.min, LOTTO_NUMBER.max, LOTTO_NUMBER.length);
  }

  createSingleLottoTicket() {
    const numbers = this.createLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets(money) {
    const tickets = Array.from({ length: money / LOTTO_PURCHASE_UNIT }).map(() => {
      return this.createSingleLottoTicket();
    });

    return tickets;
  }

  calculateWinningResults(tickets) {
    const results = PRIZE.reduce((obj, prize) => {
      obj[prize.rank] = 0;
      return obj;
    }, {});

    tickets.forEach((ticket) => {
      const rank = ticket.calculateLottoResult(this.#winningNumbers, this.#bonusNumber);
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(money, results) {
    const total = PRIZE.reduce((acc, prize) => {
      return acc + results[prize.rank] * prize.reward;
    }, 0);

    return Math.round((total / money) * TOTAL_RETURN.multiplier) / TOTAL_RETURN.divider;
  }

  calculateGameResult(tickets, money) {
    const winningResults = this.calculateWinningResults(tickets);
    const totalReturn = this.calculateTotalReturn(money, winningResults);

    return { winningResults, totalReturn };
  }
}

export default Game;
