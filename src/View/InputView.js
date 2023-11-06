import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/constants';

class InputView {
  // 구매 금액 입력
  static async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGE.INPUT_PURCHASE_AMOUNT,
    );
    // TODO : validation
    return purchaseAmount;
  }

  // 당첨 번호 입력
  static async inputLottoNumbers() {
    const inputNumbers = await Console.readLineAsync(
      MESSAGE.INPUT_LOTTO_NUMBERS,
    );
    const lottoNumbers = inputNumbers.split(',');
    // TODO : validation
    return lottoNumbers;
  }

  // 보너스 번호 입력
  static async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      MESSAGE.INPUT_BONUS_NUMBERS,
    );
    // TODO : validation
    return bonusNumber;
  }
}
export default InputView;
