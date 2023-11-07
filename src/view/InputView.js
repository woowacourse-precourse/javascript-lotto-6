import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

const InputView = {
  async purchaseLotto() {
    const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    Validator.inputPurchaseAmount(amount);

    return amount;
  },

  async readWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );

    Validator.inputWinningNumber(winningNumbers);

    return winningNumbers;
  },

  async readBonusNumbers(winningNumber) {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );

    Validator.inputBonusNumber(bonusNumber, winningNumber);

    return bonusNumber;
  },
};

export default InputView;
