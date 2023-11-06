class UserLotto {
  #purchaseAmount;
  #numberOfPurchase;
  #userLottoNumbers = [];

  constructor(purchaseAmount) {
    try {
      this.#validate(purchaseAmount);
      this.#setPurchaseVariable(purchaseAmount);
    } catch (error) {
      throw error;
    }

    for (let i = 0; i < this.#numberOfPurchase; i++) {
      this.#userLottoNumbers.push(new UserLottoNumber());
    }
  }

  #setPurchaseVariable(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#numberOfPurchase = purchaseAmount / 1000;
  }

  getNumberOfPurchase() {
    return this.#numberOfPurchase;
  }

  getUserLottoNumbers() {
    return this.#userLottoNumbers;
  }

  #validate(purchaseAmount) {
    this.#typeCheck(purchaseAmount);
    this.#divisionCheck(purchaseAmount);
  }

  #typeCheck(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
  }

  #divisionCheck(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.');
    }
  }
}
