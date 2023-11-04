import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorMessage } from '../Message';

export default class GameUtil {
  buyingMoneyValidator(buyingMoney) {
    if (buyingMoney % 1000) {
      MissionUtils.Console.print(ErrorMessage.INVALID_BUYING_MONEY);
      throw new Error(ErrorMessage.INVALID_BUYING_MONEY);
    }
    if (/\D/.test(buyingMoney)) {
      MissionUtils.Console.print(ErrorMessage.INVALID_MONEY_TYPE);
      throw new Error(ErrorMessage.INVALID_MONEY_TYPE);
    }
  }
  bonusNumberValidatro(bonusNumber, duplicateCheckArray) {
    if (/\D/.test(bonusNumber)) {
      throw new Error(ErrorMessage.INVALID_BONUS_NUMBER_TYPE);
    }

    if (!(Number(bonusNumber) >= 1) && !(Number(bonusNumber) <= 45)) {
      throw new Error(ErrorMessage.INVALID_BONUS_NUMBER);
    }

    const isDuplicate = new Set(duplicateCheckArray).size;
    if (isDuplicate !== 7) {
      throw new Error(ErrorMessage.DUPLICATE_BONUS_NUMBER);
    }
  }
}
