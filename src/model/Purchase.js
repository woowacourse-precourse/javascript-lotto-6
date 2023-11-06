import { Random } from "@woowacourse/mission-utils";
import errorMessage from "../constant/ErrorMessage";
import { PURCHASE_UNIT, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_LENGTH } from "../constant/Constant";

class Purchase {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = +purchaseAmount;
  }

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

  purchaseNumber() {
    return this.#purchaseAmount / PURCHASE_UNIT;
  }

  #sortRandomNumber(randomNumber) {
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }

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
