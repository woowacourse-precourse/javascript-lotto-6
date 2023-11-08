import { Console } from '@woowacourse/mission-utils';
import validate from '../utils/validate.js';

const InputView = {
  async InputMoney() {
    const money = parseInt(
      await Console.readLineAsync('구매금액을 입력해 주세요.\n'),
      10,
    );
    validate.isValidateMoney(money);
    return money;
  },
  async InputWinningNumber() {
    const winningInput = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    const winningArray = winningInput.split(',');
    const winningNumber = winningArray.map((number) => parseInt(number, 10));
    return winningNumber;
  },
  async InputBonusNumber() {
    const bonusNumber = parseInt(
      await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'),
      10,
    );
    return bonusNumber;
  },
};

export default InputView;
