import { Console } from '@woowacourse/mission-utils';
import { Messages } from '../constants/Messages.js';
import InputValidator from '../validators/InputValidator.js';

class Input {
  static async readPurchaseAmout() {
    const purchaseAmount = await Console.readLineAsync(
      Messages.READ_PURCHASE_AMOUNT
    );

    const validatedPurchaseAmout =
      InputValidator.purchaseAmountValidator(purchaseAmount);

    return validatedPurchaseAmout;
  }

  static async readLottoNumber() {
    const lottoNumbers = await Console.readLineAsync(
      `\n${Messages.READ_LOTTO_NUMBER}`
    );

    const validatedLottoNumbers =
      InputValidator.lottoNumberValidator(lottoNumbers);

    return validatedLottoNumbers;
  }

  static async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      `\n${Messages.READ_BONUS_NUMBER}`
    );

    const validatedBonusNumber =
      InputValidator.bonusNumberValidator(bonusNumber);

    return validatedBonusNumber;
  }
}

export default Input;
