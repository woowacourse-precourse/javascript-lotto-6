import { Console, Random } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from './ErrorMessage.js';
import Lotto from './Lotto.js';

const LOTTO_PRICE = 1000;

class Input {
  static async inputPayment() {
    const payment = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    Validate.validatePayment(payment);
    return Number(payment);
  }

  static async inputWinning() {
    const userSelected = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    return new Lotto(userSelected.split(',').map((string) => Number(string)));
  }

  static async inputBonusNumber(winning) {
    const bonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    Validate.validateBonusNumber(bonus, winning);
    return bonus;
  }
}

class Validate {
  static validatePayment(input) {
    const payment = Number(input);

    if (Number.isNaN(payment)) {
      throw new Error(ERROR_MESSAGE.nonNumeric);
    }
    if (payment <= 0 || !Number.isInteger(payment / LOTTO_PRICE)) {
      throw new Error(ERROR_MESSAGE.invalidAmount);
    }
  }

  static validateBonusNumber(input, winning) {
    const bonus = Number(input);

    if (Number.isNaN(bonus)) {
      throw new Error(ERROR_MESSAGE.nonNumeric);
    }
    if (!Number.isInteger(bonus) || bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGE.outOfRange);
    }
    if (winning.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.duplicateWinningNumber);
    }
  }
}

class App {
  #winning;
  #bonus;
  #payment;

  constructor() {
    this.lottos = [];
  }

  generateLottos(amount) {
    for (let i = 0; i < amount; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
      this.lottos[i].print();
    }
  }

  async play() {
    this.#payment = await Input.inputPayment();
    const amount = this.#payment / LOTTO_PRICE;
    Console.print(`\n${amount}개를 구매했습니다.`);

    this.generateLottos(amount);

    this.#winning = await Input.inputWinning();
    this.#bonus = await Input.inputBonusNumber(this.#winning);
  }
}

export default App;
