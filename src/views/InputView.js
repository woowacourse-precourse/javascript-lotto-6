import { Console } from '@woowacourse/mission-utils';
import validate from '../utils/validate';

const InputView = {
  async InputMoney() {
    const money = parseInt(
      await Console.readLineAsync('구매금액을 입력해 주세요.'),
      10,
    );
    validate.isValidate(money);
    return money;
  },
  async InputWinningNumber() {
    const winningNumber = parseInt(
      await Console.readLineAsync('당첨 번호를 입력해 주세요.'),
      10,
    );
    return winningNumber;
  },
  async InputBonusNumber() {
    const bonusNumber = parseInt(
      await Console.readLineAsync('보너스 번호를 입력해 주세요.'),
      10,
    );
    return bonusNumber;
  },
};

export default InputView;
