import { Console, Random } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { AMOUNT, LOTTO } from './libs/constants';
import Lotto from './Lotto';

class Lottos {
  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    //몇장 구매인지 계산
    this.count = purchaseAmount / AMOUNT.UNIT;
    //여러장 발행해야해서
    this.list = [];
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

  //로또 구매 장수만큼 로또번호 생성
  publishLotto() {
    for (let num = 0; num < this.count; num++) {
      const newLotto = this.generateLotto();
      this.list.push(newLotto);
    }
  }
}
