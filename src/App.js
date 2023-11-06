import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validation from './Validation.js';

class App {
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
        const input = await Console.readLineAsync(
          '구입 금액을 입력해 주세요.\n'
        );
        this.validateUserPurchaseMoney(input.trim());
        return Number(input);
      } catch (err) {
        Console.print(err.message);
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
        const input = await Console.readLineAsync(
          '당첨 번호를 입력해 주세요.\n'
        );

        this.validateWinningNumbers(input);

        const winningNumbers = input.split(',').map((number) => {
          return Number(number);
        });

        return winningNumbers;
      } catch (err) {
        Console.print(err.message);
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
        const bonusNumber = await Console.readLineAsync(
          '보너스 번호를 입력해 주세요.\n'
        );

        this.validateBonusNumber(winningNumbers, bonusNumber);

        return bonusNumber;
      } catch (err) {
        Console.print(err.message);
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

  printLottoTicketCount(userTickets) {
    Console.print(`${userTickets.length}개를 구매했습니다.`);
  }

  printLottoTicketNumbers(userTickets) {
    userTickets.forEach((userTicket) => userTicket.printLottoNumbers());
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

  printWinningResult(results) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${results['5']}개`);
    Console.print(`4개 일치 (50,000원) - ${results['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results['3']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results['2']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results['1']}개`);
  }

  printTotalReturn(totalReturn) {
    Console.print(totalReturn);
    Console.print(`총 수익률은 ${Math.round(totalReturn * 100) / 100}%입니다.`);
  }

  async play() {
    const userMoney = await this.getUserPurchaseMoney();
    const userTickets = this.purchaseLottoTickets(userMoney);

    this.printLottoTicketCount(userTickets);
    this.printLottoTicketNumbers(userTickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const results = this.calculateWinningResult(
      userTickets,
      winningNumbers,
      bonusNumber
    );

    const totalReturn = this.calculateTotalReturn(results, userMoney);

    this.printWinningResult(results);
    this.printTotalReturn(totalReturn);
  }
}

export default App;
