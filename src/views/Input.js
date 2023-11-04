import { Console } from '@woowacourse/mission-utils';
import { Messages } from '../constants/Messages';

class Input {
  static readPurchaseAmout() {
    const purchaseAmount = Console.readLineAsync(Messages.READ_PURCHASE_AMOUNT);

    return purchaseAmount;
  }

  static readLottoNumber() {
    const lottoNumber = Console.readLineAsync(Messages.READ_LOTTO_NUMBER);

    return lottoNumber;
  }

  static readBonusNumber() {
    const bonusNumber = Console.readLineAsync(Messages.READ_BONUS_NUMBER);

    return bonusNumber;
  }
}

export default Input;
