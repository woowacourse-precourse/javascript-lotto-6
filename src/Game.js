import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validation from './Validation.js';
import {
  LOTTO_PURCHASE_UNIT,
  LOTTO_NUMBER,
  FIRST_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  FOURTH_PRIZE,
  FIFTH_PRIZE,
  NO_PRIZE,
} from './constants/Condition.js';

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
    const ticketCount = money / LOTTO_PURCHASE_UNIT;

    const tickets = Array.from({ length: ticketCount }).map(() => {
      return this.createSingleLottoTicket();
    });

    return tickets;
  }

  calculateTotalWinningResults(tickets) {
    const results = {
      [NO_PRIZE.rank]: 0,
      [FIRST_PRIZE.rank]: 0,
      [SECOND_PRIZE.rank]: 0,
      [THIRD_PRIZE.rank]: 0,
      [FOURTH_PRIZE.rank]: 0,
      [FIFTH_PRIZE.rank]: 0,
    };

    tickets.forEach((ticket) => {
      const rank = ticket.calculateLottoResult(this.#winningNumbers, this.#bonusNumber);
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(results, money) {
    const total =
      results[FIRST_PRIZE.rank] * FIRST_PRIZE.reward +
      results[SECOND_PRIZE.rank] * SECOND_PRIZE.reward +
      results[THIRD_PRIZE.rank] * THIRD_PRIZE.reward +
      results[FOURTH_PRIZE.rank] * FOURTH_PRIZE.reward +
      results[FIFTH_PRIZE.rank] * FIFTH_PRIZE.reward;

    return (total / money) * 100;
  }
}

export default Game;
