import generateLotto from "../utils/generateLotto.js";

export default class LottoModel {
  #purchaseAmount;
  #purchaseCount;
  #lottoArray;
  #winningNumber;
  #bonusNumber;

  constructor(purchaseAmount) {
    this.#purchaseAmount;
    this.#purchaseCount;
    this.#lottoArray;
    this.#winningNumber;
    this.#bonusNumber;
  }

  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  setPurchaseCount() {
    this.#purchaseCount = this.#purchaseAmount / 1000;
  }

  getPurchaseCount() {
    return this.#purchaseCount;
  }

  setLottoArray() {
    this.#lottoArray = generateLotto(this.#purchaseCount);
  }

  getLottoArray() {
    return this.#lottoArray;
  }

  setWinningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }
}
