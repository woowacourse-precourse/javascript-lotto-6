import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

import { conditions, throwError } from '../util/Validator.js';
import ERROR from '../constants/Error.js';

const { PAYMENT_NUMBER, PAYMENT_THOUSAND } = ERROR;
const { isPositiveInteger, isThousandUnits } = conditions;

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
    return Math.floor(purchaseAmount / 1000);
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
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
