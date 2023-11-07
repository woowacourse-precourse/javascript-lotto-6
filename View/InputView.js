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
    winningLottoNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    // 유효성 검사
    return winningLottoNumber;
  }

  async readBonusNumber() {
    bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    // 유효성 검사
    return bonusNumber;
  }
}
export default InputView;
