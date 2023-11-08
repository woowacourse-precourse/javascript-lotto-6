import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants.js';
import validator from '../Validator/validator.js';

class InputView {
  winNumbers;
  // 구매 금액 입력
  static async inputPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(
          MESSAGE.INPUT_PURCHASE_AMOUNT,
        );
        const amount = purchaseAmount / 1000;
        // TODO : validation
        validator.validatePurchaseAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 당첨 번호 입력
  static async inputLottoNumbers() {
    while (true) {
      try {
        const inputNumbers = await Console.readLineAsync(
          MESSAGE.INPUT_LOTTO_NUMBERS,
        );
        const lottoNumbers = inputNumbers.split(',').map(Number);
        // TODO : validation
        validator.validateLottoNumbers(lottoNumbers);
        this.winNumbers = lottoNumbers;
        return lottoNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 보너스 번호 입력
  static async inputBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          MESSAGE.INPUT_BONUS_NUMBERS,
        );
        validator.validateBonusNumber(bonusNumber, this.winNumbers);
        return parseInt(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
export default InputView;
