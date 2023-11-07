import { Console } from '@woowacourse/mission-utils';
import Validation from '../utils/validation.js';

class InputView {
  async readMoney() {
    let userMoney;

    do {
      userMoney = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      userMoney = Number(userMoney);
    } while (!Validation.isUserMoneyOk(userMoney));

    return userMoney;
  }

  async readWinningLottoNumber() {
    let winningLottoNumber;
    do {
      const userInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      const userInputStrArray = userInput.split(',');
      winningLottoNumber = userInputStrArray.map((strNumber) => parseInt(strNumber, 10));
    } while (!Validation.isWinningLottoNumberOk(winningLottoNumber));

    return winningLottoNumber;
  }

  async readBonusNumber() {
    let bonusNumber;
    // 유효성 검사 추가

    do {
      bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      bonusNumber = Number(bonusNumber);
    } while (!Validation.isBonusNumberOk(bonusNumber));

    return bonusNumber;
  }
}
export default InputView;
