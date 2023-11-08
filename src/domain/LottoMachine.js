import { Random } from '@woowacourse/mission-utils';

import Lotto from '../Lotto.js';
import LottoNumber from './LottoNumber.js';

import { sortAscending } from '../utils/sort.js';
import { isIndivisible } from '../utils/validator.js';

import ERROR_MESSAGE_GENERATOR from '../constants/error.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class LottoMachine {
  /**
   * 로또 하나의 가격입니다.
   * @type {number}
   * @readonly
   */
  static LOTTO_PRICE = 1_000;

  /**
   * 로또 머신의 에러메세지입니다.
   * @type {number}
   * @readonly
   */
  static ERROR_MESSAGES = Object.freeze({
    notNumberMoney: ERROR_MESSAGE_GENERATOR.notNumber('구매 금액'),
    insufficientMoney: ERROR_MESSAGE_GENERATOR.underMinNumber(
      '구매 금액',
      LottoMachine.LOTTO_PRICE.toLocaleString(),
    ),
    indivisible: `${LottoMachine.LOTTO_PRICE.toLocaleString()}으로 나누어 떨어지는 금액을 입력해주세요!`,
  });

  /**
   * @returns {LottoMachine} 로또 머신입니다.
   */
  static of() {
    return new LottoMachine();
  }

  /**
   * 입력받은 money에 따라 Lotto 배열을 반환합니다.
   * @param {number} money 구매할 금액입니다.
   * @returns {Lotto[]} 구매한 로또 목록입니다.
   */
  buy(money) {
    this.#validateMoney(money);

    const sheets = money / LottoMachine.LOTTO_PRICE;
    const lottos = Array.from({ length: sheets }, () => this.#publish());

    return lottos;
  }

  #validateMoney(money) {
    if (typeof money !== 'number') {
      throw new ApplicationError(LottoMachine.ERROR_MESSAGES.notNumberMoney);
    }
    if (money < LottoMachine.LOTTO_PRICE) {
      throw new ApplicationError(LottoMachine.ERROR_MESSAGES.insufficientMoney);
    }
    if (isIndivisible(LottoMachine.LOTTO_PRICE, money)) {
      throw new ApplicationError(LottoMachine.ERROR_MESSAGES.indivisible);
    }
  }

  /**
   * 로또를 하나 발행합니다.
   * @returns {Lotto} 발행된 로또입니다.
   */
  #publish() {
    const randomNumber = Random.pickUniqueNumbersInRange(
      LottoNumber.MIN_NUMBER,
      LottoNumber.MAX_NUMBER,
      Lotto.NUMBER_QUANTITY,
    );

    return Lotto.of(sortAscending(randomNumber));
  }
}

export default LottoMachine;
