import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';
import Lotto from './Lotto.js';
import CompareLotto from './CompareLotto.js';

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

    this.winningNumber = inputWinningNumber.split(',').map(Number);
    const lotto = new Lotto(this.winningNumber);

    this.inputBonusNumber();
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      GAME_MESSAGE.inputBonusNumber,
    );

    this.bonusNumber = bonusNumber;

    super.compareLottoNumber();
  }
}

export default InputLottoNumber;
