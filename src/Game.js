import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validation from './Validation.js';

class Game {
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(',').map((number) => {
      return Number(number);
    });
  }

  #validateWinningNumbers(winningNumbers) {
    Validation.validateInputHasCommas(winningNumbers);

    const parsedWinningNumbers = this.#parseWinningNumbers(winningNumbers);

    Validation.validateInputDuplicate(parsedWinningNumbers);
    Validation.validateInputLength(parsedWinningNumbers, 6);

    parsedWinningNumbers.forEach((number) => {
      Validation.validateInputNumber(number);
      Validation.validateInputOutOfLottoRange(number);
    });
  }

  #validateBonusNumber(bonusNumber) {
    Validation.validateInputNumber(bonusNumber);
    Validation.validateInputOutOfLottoRange(bonusNumber);
    Validation.validateInputDuplicateWinningNumbers(
      bonusNumber,
      this.#winningNumbers
    );
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
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createSingleLottoTicket() {
    const numbers = this.createLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets() {
    const ticketCount = user.getMoney() / 1000;

    const tickets = Array.from({ length: ticketCount }).map(() => {
      return this.createSingleLottoTicket();
    });

    return tickets;
  }

  calculateTotalWinningResults(tickets) {
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    tickets.forEach((ticket) => {
      const rank = ticket.calculateLottoWinning(
        this.#winningNumbers,
        this.#bonusNumber
      );
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(results, money) {
    const total =
      results['1'] * 2000000000 +
      results['2'] * 30000000 +
      results['3'] * 1500000 +
      results['4'] * 50000 +
      results['5'] * 5000;

    return (total / money) * 100;
  }
}

export default Game;
