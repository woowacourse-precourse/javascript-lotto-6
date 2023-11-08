import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation/Validation';
import Utils from '../Utils';
import { INPUT_MESSAGE } from '../constants/Message';

class UserInputValidator {
  constructor() {}

  async getPurchaseAmountFromUser() {
    try {
      const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.purchaseAmount,
      );
      Validation.validatepurchaseInput(PURCHASE_AMOUNT);
      return PURCHASE_AMOUNT;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.getPurchaseAmountFromUser();
  }

  async getWinningNumbers() {
    try {
      const WINNING_NUMBER_INPUT = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.winningNumbers,
      );
      const WINNING_NUMBER = Utils.splitByComma(WINNING_NUMBER_INPUT);
      Validation.validateLottoNumbers(WINNING_NUMBER);
      return WINNING_NUMBER;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.getWinningNumbers();
  }

  async getBonusNumber() {
    try {
      const BONUS_NUMBER = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.bonusNumber,
      );
      Validation.validateBonusNumber(BONUS_NUMBER);
      return BONUS_NUMBER;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.getBonusNumber();
  }
}
export default UserInputValidator;
