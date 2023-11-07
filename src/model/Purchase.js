import { Random } from "@woowacourse/mission-utils";
import errorMessage from "../constant/ErrorMessage";
import { PURCHASE_UNIT, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_LENGTH } from "../constant/Constant";

/**
 * 구매 금액을 입력받고 유효성 검사와 구매 갯수, 갯수에 따른 랜덤 로또 번호들을 구하는 클래스
 */
class Purchase {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = +purchaseAmount;
  }

  /**
   * 타입오류, 범위오류, 단위오류 유효성 검사
   * @param {String} purchaseAmount 구매금액
   */
  #validate(purchaseAmount) {
    if (Number.isNaN(+purchaseAmount)) {
      errorMessage.typeError();
    }
    if (+purchaseAmount < 0) {
      errorMessage.purchaseRangeError();
    }
    if (+purchaseAmount % PURCHASE_UNIT !== 0) {
      errorMessage.purchaseError();
    }
  }

  /**
   * 구매 갯수를 구하는 함수
   * @returns 구매 갯수
   */
  purchaseNumber() {
    return this.#purchaseAmount / PURCHASE_UNIT;
  }

  /**
   * 생성된 로또 번호를 정렬하는 함수
   * @param {Array} randomNumber 생성된 로또 번호
   * @returns {Array} randomNumber 정렬된 로또 번호 배열
   */
  #sortRandomNumber(randomNumber) {
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }

  /**
   * 구매 갯수에 때른 랜덤 로또 번호를 생성하는 함수
   * @returns {Array} randomNumbers 랜덤 로또 번호들을 담은 배열
   */
  createRandomNumbers() {
    const randomNumbers = [];
    for (let k = 0; k < this.purchaseNumber(); k++) {
      let randomNumber = Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_LENGTH);
      randomNumber = this.#sortRandomNumber(randomNumber);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }
}

export default Purchase;
