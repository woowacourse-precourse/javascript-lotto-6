import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../Consts';

class UserInput {
  static async purchasedLotto() {
    const purchasedLotto = await MissionUtils.Console.readLineAsync(
      message.tryPurchaseLotto,
    );
    return purchasedLotto;
  }

  static async winningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      message.winningNumbers,
    );
    return winningNumbers;
  }

  static async bonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      message.bonusNumber,
    );
    return bonusNumber;
  }
}

export default UserInput;
