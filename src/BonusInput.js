import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { Bonus } from './Bonus.js';

class BonusInput {
  constructor(winningNumbers) {
    this.winningNumbers = winningNumbers;
  }
  printBonusNumber = () => {
    Console.print(`\n${Message.INPUT_BONUS_NUMBER}`);
    return this.inputBonusNumber();
  };

  inputBonusNumber = async () => {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync('');
        const bonus = await new Bonus(bonusNumber, this.winningNumbers);
        return bonus.number;
      } catch (error) {
        Console.print(error.message);
      }
    }
  };
}
export { BonusInput };
