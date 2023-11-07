import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import Lotto from './Lotto.js';
class LottoInput {
  printWinningNumber = () => {
    Console.print(`\n${Message.INPUT_WINNING_NUMBER}`);
    return this.inputWinningNumber();
  };

  inputWinningNumber = async () => {
    while (true) {
      try {
        const winningNumbers = await Console.readLineAsync('');
        const winningNumberArray = winningNumbers
          .replace(/\s+/g, '')
          .split(',')
          .map(Number);
        const lotto = new Lotto(winningNumberArray);
        return lotto.numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  };
}
export { LottoInput };
