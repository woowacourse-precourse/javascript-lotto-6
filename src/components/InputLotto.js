import { Console } from '@woowacourse/mission-utils';
import Validate from '../util/Validate.js';
import gameMessage from '../constants/gameMessages.js';

export default class InputLotto {
  async inputWinningNumbers() {
    const inputWinning = await Console.readLineAsync(gameMessage.INPUT.WINNING);
    try {
      Validate.winningNumbers(inputWinning);
    } catch (error) {
      Console.print(error.message);
      return this.inputWinningNumbers();
    }
    return inputWinning.split(',').map((winning) => Number(winning));
  }

  async inputBonusNumber(winningNumbers) {
    const inputBonus = await Console.readLineAsync(gameMessage.INPUT.BONUS);
    try {
      Validate.bonusNumber(inputBonus);
      Validate.notDuplicateBonus(winningNumbers, inputBonus);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber(winningNumbers);
    }
    return Number(inputBonus);
  }
}
