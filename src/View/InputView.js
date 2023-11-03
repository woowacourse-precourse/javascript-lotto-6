import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE_PURCHASE_AMOUNT = '구입금액을 입력해 주세요.';
const INPUT_MESSAGE_WINNING_NUMBERS = '당첨 번호를 입력해 주세요.';
const INPUT_MESSAGE_BONUS_NUMBER = '보너스 번호를 입력해 주세요.';

const InputView = {
  async readPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE_PURCHASE_AMOUNT);

      return purchaseAmount;
    } catch (error) {
      throw new Error(error);
    }
  },

  async readWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE_WINNING_NUMBERS);

      return winningNumbers;
    } catch (error) {
      throw new Error(error);
    }
  },

  async readBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE_BONUS_NUMBER);

      return bonusNumber;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default InputView;