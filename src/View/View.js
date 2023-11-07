import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE, resultMessage } from '../Constants/Message.js';
import { validatePurchaseAmount } from '../Validator/Validate.js';

const View = {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);
    validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },

  async getGoalNumber() {
    const goalNumber = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_GOAL_NUMBER);
    return goalNumber;
  },

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_BONUS_NUMBER);
    return bonusNumber;
  },

  printCountOfLotto(countOfLotto) {
    Console.print(`\n${countOfLotto}${SYSTEM_MESSAGE.PURCHASE_LOTTO_MESSAGE}`);
  },

  printLottoNumbers(lottoArray) {
    lottoArray.forEach((lotto) => Console.print(lotto.getNumbers()));
  },

  printResult(resultArray, rateOfReturn) {
    Console.print(resultMessage(resultArray, rateOfReturn.toFixed(2)));
  },
};

export default View;
