import Lotto from './Lotto.js';
import Validation from './Validation.js';
import { Random } from '@woowacourse/mission-utils';
const LOTTO_PRICE = 1000;
const LOTTO_MAX_COUNT = 6;
const LOTTO_RANGE_MIN = 1;
const LOTTO_RANGE_MAX = 45;

class LottoMachine {
  issueLotto(price) {
    const lottoBundle = [];
    if (!Validation.isProperPurchaseAmount(price)) {
      throw new Error('[ERROR] 로또 구입 금액이 잘못되었습니다.');
    }
    const purchaseNumber = price / LOTTO_PRICE;
    while (lottoBundle.length < purchaseNumber) {
      lottoBundle.push(this.#makeLottoNumber());
    }
    return [...lottoBundle];
  }

  #makeLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_RANGE_MIN,
      LOTTO_RANGE_MAX,
      LOTTO_MAX_COUNT
    );
  }
}
export default LottoMachine;
