import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { Conditions, throwError } from '../util/Validator.js';
import ERROR from '../constants/Error.js';
import { SETTING } from '../constants/GameSetting.js';

const { PAYMENT_NUMBER, PAYMENT_THOUSAND } = ERROR;
const { UNIT, RANGE_MIN, RANGE_MAX, MAX_SIZE } = SETTING;
const { isPositiveInteger, isThousandUnits } = Conditions;

class LottoMachine {
  #quantity;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#quantity = this.#calculateQuantity(purchaseAmount);
  }

  #validate(number) {
    this.#validatePositiveInteger(number);
    this.#validateThousandUnit(number);
  }

  #validatePositiveInteger(number) {
    throwError(PAYMENT_NUMBER, isPositiveInteger(number));
  }

  #validateThousandUnit(number) {
    throwError(PAYMENT_THOUSAND, isThousandUnits(number));
  }

  #calculateQuantity(purchaseAmount) {
    return Math.floor(purchaseAmount / UNIT);
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(RANGE_MIN, RANGE_MAX, MAX_SIZE);
  }

  #generateLotto() {
    return new Lotto(this.#generateLottoNumbers());
  }

  getLotto() {
    const lottoArray = [];

    while (lottoArray.length < this.#quantity) {
      lottoArray.push(this.#generateLotto());
    }

    return lottoArray;
  }
}

export default LottoMachine;
