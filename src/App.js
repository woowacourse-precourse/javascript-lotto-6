import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  validateUserPurchaseMoney(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력이 없습니다.');
    }

    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 입력이 숫자가 아닙니다.');
    }

    if (number <= 0) {
      throw new Error('[ERROR] 입력이 0 이하입니다');
    }

    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 입력이 1,000원 단위가 아닙니다.');
    }
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
    if (input === '') {
      throw new Error('[ERROR] 입력이 없습니다.');
    }

    if (!input.includes(',')) {
      throw new Error('[ERROR] 입력이 쉼표로 구분되지 않습니다.');
    }

    const numbers = input.split(',').map((number) => {
      return number;
    });

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 입력이 6개가 아닙니다.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 입력에 중복된 값이 있습니다.');
    }

    numbers.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error('[ERROR] 입력이 숫자가 아닙니다.');
      }

      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 입력이 1 ~ 45 사이가 아닙니다');
      }
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
    if (input === '') {
      throw new Error('[ERROR] 입력이 없습니다.');
    }

    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 입력이 숫자가 아닙니다.');
    }

    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 입력이 1 ~ 45 사이가 아닙니다.');
    }

    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 입력이 당첨 번호와 중복되는 값입니다.');
    }
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
    const results = userTickets.map((userTicket) => {
      return userTicket.calculateLottoWinning(winningNumbers, bonusNumber);
    });

    return results.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
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

    this.printLottoTicketCount(userTickets);
    this.printLottoTicketNumbers(userTickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const results = this.calculateWinningResult(
      userTickets,
      winningNumbers,
      bonusNumber
    );

    const totalReturn = this.calculateTotalReturn(results);
  }
}

export default App;
