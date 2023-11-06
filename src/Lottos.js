import { Console, Random } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { LOTTO_NUMBER } from './libs/constants';

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
  }

  validate(purchaseAmount) {
    const { errorMessage } = checkValue.purchaseAmount(purchaseAmount);

    if (errorMessage) {
      throwError(errorMessage);
    }
  }
}
