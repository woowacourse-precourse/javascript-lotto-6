import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE, resultMessage } from '../Constants/Message.js';
import { validateBonusNumber, validatePurchaseAmount } from '../Validator/Validate.js';

const View = {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);
    const [check, message] = await validatePurchaseAmount(purchaseAmount);
    if (check) {
      Console.print(message);
      const newPurchaseAmount = await this.getPurchaseAmount();
      return newPurchaseAmount;
    }
    return purchaseAmount;
  },

  async getGoalNumber() {
    const goalNumber = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_GOAL_NUMBER);
    const goalLotto = goalNumber.split(',').map(Number);
    return goalLotto;
  },

  async getBonusNumber(goalLotto) {
    const bonusNumber = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_BONUS_NUMBER);
    const [check, message] = validateBonusNumber(bonusNumber, goalLotto);
    if (check) {
      Console.print(message);
      const newBonusNumber = await this.getBonusNumber(goalLotto);
      return newBonusNumber;
    }
    return bonusNumber;
  },

  printCountOfLotto(countOfLotto) {
    Console.print(`\n${countOfLotto}${SYSTEM_MESSAGE.PURCHASE_LOTTO_MESSAGE}`);
  },

  printLottoNumbers(lottoArray) {
    lottoArray.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(', ')}]`));
    Console.print('\n');
  },

  printResult(resultArray, rateOfReturn) {
    Console.print(resultMessage(resultArray, (rateOfReturn.toFixed(2) * 100) / 100));
  },

  printMessage(message) {
    Console.print(message);
  },
};

export default View;
