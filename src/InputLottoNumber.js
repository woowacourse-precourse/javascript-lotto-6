import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from './Constants.js';
import Lotto from './Lotto.js';
import CompareLotto from './CompareLotto.js';
import Validator from './Validator.js';

class InputLottoNumber extends CompareLotto {
  constructor(user) {
    super();
    this.user = user;
    this.winningNumber;
    this.bonusNumber;
  }

  async inputWinningNumber() {
    const inputWinningNumber = await Console.readLineAsync(
      GAME_MESSAGE.inputNumber,
    );
    if (!inputWinningNumber.includes(',')) {
      throw new Error(ERROR_MESSAGE.commaError);
    }
    this.winningNumber = inputWinningNumber.split(',').map(Number);

    try {
      const lotto = new Lotto(this.winningNumber);
      this.inputBonusNumber(this.winningNumber);
    } catch (error) {
      Console.print(error.message);

      return this.inputWinningNumber();
    }
  }

  async inputBonusNumber(winningNumber) {
    const bonusNumber = await Console.readLineAsync(
      GAME_MESSAGE.inputBonusNumber,
    );
    this.bonusNumber = Number(bonusNumber);

    try {
      Validator.bonusNumber(bonusNumber, winningNumber);
      super.compareLottoNumber();
    } catch (error) {
      Console.print(error.message);

      return this.inputBonusNumber(winningNumber);
    }
  }
}

export default InputLottoNumber;
