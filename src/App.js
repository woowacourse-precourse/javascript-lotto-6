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

  async play() {
    const userMoney = await this.getUserPurchaseMoney();
    const userTickets = this.purchaseLottoTickets(userMoney);
  }
}

export default App;
