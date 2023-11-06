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

  async play() {
    const userMoney = await this.getUserPurchaseMoney();
    const userTickets = this.purchaseLottoTickets(userMoney);

    this.printLottoTicketCount(userTickets);
    this.printLottoTicketNumbers(userTickets);

    const winningNumbers = await this.getWinningNumbers();
  }
}

export default App;
