import { Console } from '@woowacourse/mission-utils';
import Validation from '../utils/validation.js';
import MESSAGE from '../constants/messages.js';

class InputView {
  async readMoney() {
    let userMoney;

    do {
      userMoney = await Console.readLineAsync(MESSAGE.userMoney);
      userMoney = Number(userMoney);
    } while (!Validation.isUserMoneyOk(userMoney));

    return userMoney;
  }

  async readWinningLottoNumber() {
    let winningLottoNumber;
    do {
      const userInput = await Console.readLineAsync(MESSAGE.winningNumbers);
      const userInputStrArray = userInput.split(',');
      winningLottoNumber = userInputStrArray.map((strNumber) => parseInt(strNumber, 10));
    } while (!Validation.isWinningLottoNumberOk(winningLottoNumber));

    return winningLottoNumber;
  }

  async readBonusNumber() {
    let bonusNumber;

    do {
      bonusNumber = await Console.readLineAsync(MESSAGE.bonusNumber);
      bonusNumber = Number(bonusNumber);
    } while (!Validation.isBonusNumberOk(bonusNumber));

    return bonusNumber;
  }
}
export default InputView;
