import { MissionUtils } from '@woowacourse/mission-utils';
import {
  validateBonusNumber,
  validateWinningNumbers,
  validateMoney
} from '../utils/Validation';

const { Console } = MissionUtils;
class InputView {
  static async inputMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    validateMoney(parseInt(money, 10));
    return money;
  }

  static async inputNumbers() {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('\n');
    validateWinningNumbers(parseInt(winningNumbers, 10));
    return winningNumbers.split(',');
  }

  static async inputBonusNumber() {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('\n');
    validateBonusNumber(parseInt(bonusNumber, 10));
    return bonusNumber;
  }
}

export default InputView;
