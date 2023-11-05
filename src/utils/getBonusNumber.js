import { Console } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';

export const getBonusNumber = async winningLotto => {
  Console.print(inputMessage.ENTER);
  let input = await Console.readLineAsync(inputMessage.BONUS_MESSAGE);
  let bonusNumber;
  while (true) {
    try {
      bonusNumber = parseInt(input, 10);
      winningLotto.getBonus(bonusNumber);
      break;
    } catch (error) {
      Console.print(error.message);
      input = await Console.readLineAsync(inputMessage.BONUS_MESSAGE);
    }
  }
};
