import { Random, Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Output from './Output.js';
import Lotto from './Lotto.js';
import Validation from './Validation.js';

class App {
  #input;
  #output;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
  }

  validateUserPurchaseMoney(input) {
    Validation.validateInputEmpty(input);

    const number = Number(input);

    Validation.validateInputNumber(number);
    Validation.validateInputZeroOrLess(number);
    Validation.validateInputThousands(number);
  }

  async getUserPurchaseMoney() {
    while (true) {
      try {
        const userMoney = await this.#input.userMoney();
        this.validateUserPurchaseMoney(userMoney);

        return Number(userMoney);
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  validateWinningNumbers(input) {
    Validation.validateInputEmpty(input);
    Validation.validateInputHasCommas(input);

    const numbers = input.split(',').map((number) => {
      return Number(number);
    });

    Validation.validateInputDuplicate(numbers);
    Validation.validateInputLength(numbers, 6);

    numbers.forEach((number) => {
      Validation.validateInputNumber(number);
      Validation.validateInputOutOfLottoRange(number);
    });
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#input.winningNumbers();

        this.validateWinningNumbers(winningNumbers);

        const winningNumbersArray = winningNumbers
          .split(',')
          .map((winningNumber) => {
            return Number(winningNumber);
          });

        return winningNumbersArray;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  validateBonusNumber(winningNumbers, input) {
    Validation.validateInputEmpty(input);

    const number = Number(input);

    Validation.validateInputNumber(number);
    Validation.validateInputOutOfLottoRange(number);
    Validation.validateInputDuplicateWinningNumbers(number, winningNumbers);
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();

        this.validateBonusNumber(winningNumbers, bonusNumber);

        return bonusNumber;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  generateRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  generateSingleLottoTicket() {
    const numbers = this.generateRandomLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets(userMoney) {
    const userTickets = Array.from({ length: userMoney / 1000 }).map(() => {
      return this.generateSingleLottoTicket();
    });

    return userTickets;
  }

  calculateWinningResult(userTickets, winningNumbers, bonusNumber) {
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    userTickets.forEach((userTicket) => {
      const rank = userTicket.calculateLottoWinning(
        winningNumbers,
        bonusNumber
      );

      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(results, userMoney) {
    const total =
      results['1'] * 2000000000 +
      results['2'] * 30000000 +
      results['3'] * 1500000 +
      results['4'] * 50000 +
      results['5'] * 5000;

    return (total / userMoney) * 100;
  }

  async play() {
    const userMoney = await this.getUserPurchaseMoney();
    const userTickets = this.purchaseLottoTickets(userMoney);

    this.#output.lottoTicketCount(userTickets);
    this.#output.lottoTicketNumbers(userTickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const results = this.calculateWinningResult(
      userTickets,
      winningNumbers,
      bonusNumber
    );

    const totalReturn = this.calculateTotalReturn(results, userMoney);

    this.#output.winningResult(results);
    this.#output.totalReturnResult(totalReturn);
  }
}

export default App;
