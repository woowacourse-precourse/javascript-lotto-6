import { Console, Random } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { LOTTO, LOTTO_NUMBER } from './libs/constants';
import Lotto from './Lotto';

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

  //랜덤 로또번호 생성
  generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT,
    );

    return new Lotto(lottoNumbers);
  }
}
