import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class InputLottoNumber {
  async inputWinningNumber() {
    const inputWinningNumber = await Console.readLineAsync(
      GAME_MESSAGE.inputNumber,
    );

    const winningNumber = inputWinningNumber.split(',');

    this.inputBonusNumber();
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      GAME_MESSAGE.inputBonusNumber,
    );

    return bonusNumber;
  }
}

export default InputLottoNumber;
