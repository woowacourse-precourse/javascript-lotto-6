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
    const userInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

    const userInputStrArray = userInput.split(',');
    const winningLottoNumber = userInputStrArray.map((strNumber) => parseInt(strNumber, 10));
    // 유효성 검사 // 6개
    return winningLottoNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    // 유효성 검사
    return Number(bonusNumber);
  }
}
export default InputView;
