import { Console } from '@woowacourse/mission-utils';
import Bonus from './Bonus.js';

class BonusUI {
  constructor(numbers) {
    this.numbers = numbers;
  }
  async output() {
    while (true) {
      try {
        const NUMBER = await Console.readLineAsync(
          '\n보너스 번호를 입력해 주세요.\n'
        );
        const BONUS = new Bonus(NUMBER, this.numbers);
        const BOUNUS_WINNING_NUMBER = BONUS.winningNumber();

        return BOUNUS_WINNING_NUMBER;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default BonusUI;
