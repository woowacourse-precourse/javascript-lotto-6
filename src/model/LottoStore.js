import { Random } from '@woowacourse/mission-utils';
import OPTIONS from '../constants/options.js';
import Validator from '../validators/Validator.js';
import Lotto from './Lotto.js';

class LottoStore {
  /**
   * 유저가 입력한 구입금액
   * @type {number}
   */
  #purchaseAmount;

  /**
   * 구입 수량
   * @type {number}
   */
  #purchaseQuantity;

  /**
   * 발행한 유저의 로또 번호 배열
   * @type {number[][]}
   */
  #userLottos = [];

  #lotto;

  /**
   * 입력받은 구입금액을 number type으로 형변환 후 유효성 검증
   * @param {string} purchaseAmount
   */
  constructor(purchaseAmount) {
    this.#purchaseAmount = Number(purchaseAmount);
    this.#validate();
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  /**
   * 중복되지 않는 1~45 사이의 무작위 수를 6개 담은 배열 반환
   */
  #getUniqueNumbers() {
    return Random.pickUniqueNumbersInRange(
      OPTIONS.minLottoNumber,
      OPTIONS.maxLottoNumber,
      OPTIONS.lottoLength,
    ).sort((currentNumber, nextNumber) => currentNumber - nextNumber);
  }

  /**
   *  구입금액을 기본 금액 단위(1,000)으로 나누어 구입 수량 반환
   * @returns {number}
   */
  #getPurchaseQuantity() {
    return this.#purchaseAmount / OPTIONS.baseAmount;
  }

  /**
   * 구입 수량에 따라 로또를 발급.
   */
  #publishLottos() {
    while (this.#purchaseQuantity) {
      this.#lotto = new Lotto(this.#getUniqueNumbers());
      this.#userLottos.push(this.#lotto.getUserLotto());
      this.#purchaseQuantity -= 1;
    }
  }

  /**
   * 구입금액에 따른 무작위 로또 번호가 담긴 배열 반환
   * @returns {number[][]}
   */
  getUserLottos() {
    this.#purchaseQuantity = this.#getPurchaseQuantity();
    this.#publishLottos();

    return this.#userLottos;
  }
}

export default LottoStore;
