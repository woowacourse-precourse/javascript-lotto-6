import UserLottoNumber from './UserLottoNumber.js';
import { NUMBER, ERRORMESSAGE } from '../constants/constants.js';

class UserLotto {
  #purchaseAmount;
  #numberOfPurchase;
  #userLottoNumbers = [];

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#setPurchaseVariable(purchaseAmount);
  }

  #setPurchaseVariable(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#numberOfPurchase = purchaseAmount / NUMBER.lottoPrice;
    this.#userLottoNumbers = Array.from(
      { length: this.#numberOfPurchase },
      () => new UserLottoNumber()
    );
  }

  getNumberOfPurchase() {
    return this.#numberOfPurchase;
  }

  getUserLottoNumbers() {
    return this.#userLottoNumbers;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  // prettier-ignore
  calculateMatchingNumber(winningLotto) {
    const ranking = this.#userLottoNumbers.reduce((accumulator, userLottoNumber) => {
      const rank = userLottoNumber.calculateMatchingNumber(winningLotto);
      accumulator[rank] = (accumulator[rank] || 0) + 1;
      return accumulator;
    }, {});

    return ranking;
  }

  #validate(purchaseAmount) {
    this.#typeCheck(purchaseAmount);
    this.#rangeCheck(purchaseAmount);
    this.#divisionCheck(purchaseAmount);
  }

  #rangeCheck(purchaseAmount) {
    if (purchaseAmount > Number.MAX_SAFE_INTEGER)
      throw new Error(ERRORMESSAGE.purchaseToBig);

    if (purchaseAmount < Number.MIN_SAFE_INTEGER)
      throw new Error(ERRORMESSAGE.purchaseToSmall);

    // eslint-disable-next-line prettier/prettier
    if (purchaseAmount <= 0) throw new Error(ERRORMESSAGE.purchaseRange1);

    if (purchaseAmount > 4000000000)
      throw new Error(ERRORMESSAGE.purchaseRange2);
  }

  #typeCheck(purchaseAmount) {
    if (Number.isNaN(purchaseAmount))
      throw new Error(ERRORMESSAGE.purchaseInput);
  }

  #divisionCheck(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERRORMESSAGE.purchaseAmount);
  }
}

export default UserLotto;
