import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../Constants.js';
import Validation from '../Validation/Validation.js';
import Utils from '../Utils.js';

class InputView {
  constructor() {}

  // 구매 금액 입력받고 반환
  async inputBuyAmount() {
    try {
      const buyAmount = await Console.readLineAsync(INPUT_MESSAGES.BUY_INPUT);
      Validation.validateBuyInput(buyAmount);
      return buyAmount;
    } catch (error) {
      Console.print(error.message);
    }
    return await this.inputBuyAmount();
  }
  // 당첨번호 입력받고 반환
  async inputWinningNumber() {
    try {
      const winningNumberInput = await Console.readLineAsync(
        INPUT_MESSAGES.LOTTO_NUMBER,
      );
      const winningNumber = Utils.splitComma(winningNumberInput);
      Validation.validateLottoNumbers(winningNumber);
      return winningNumber;
    } catch (error) {
      Console.print(error.message);
    }
    return await this.inputWinningNumber();
  }

  // 보너스 번호 입력 받고 반환
  async inputBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(
        INPUT_MESSAGES.BONUS_NUMBER,
      );
      Validation.validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
    return await this.inputBonusNumber();
  }
}

export default InputView;
