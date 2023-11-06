import { Console } from '@woowacourse/mission-utils';

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

  async play() {
    const userMoney = await this.getUserPurchaseMoney();
  }
}

export default App;
