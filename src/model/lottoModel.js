import generateLotto from "../utils/generateLotto";

export default class lottoModel {
  #purchaseAmount;
  #purchaseCount;
  #lottoArray;
  #winningNumber;
  #bonusNumber;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseCount;
    this.#lottoArray;
    this.#winningNumber;
    this.#bonusNumber;
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

  setLottoArray() {
    this.#lottoArray;
  }

  setBonusNumber() {
    this.#bonusNumber;
  }
}
