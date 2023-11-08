import generateLotto from "../utils/generateLotto.js";
import { PRICE } from "../constants/price.js";

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

  getWinningStatistics() {
    const winningStatistics = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      ["5+bonus", 0],
      [6, 0],
    ]);
    this.addCount(winningStatistics);
    const roundedProfit = this.getRoundedProfit(winningStatistics);

    return { winningStatistics, roundedProfit };
  }

  checkWinningLotto(count, bonusCount, winningStatistics) {
    if (count < 6 && count > 2 && bonusCount === 0)
      winningStatistics.set(count, winningStatistics.get(count) + 1);

    if (count === 5 && bonusCount === 1)
      winningStatistics.set("5+bonus", winningStatistics.get("5+bonus") + 1);

    if (count === 6)
      winningStatistics.set(count, winningStatistics.get(count) + 1);
  }

  addCount(winningStatistics) {
    this.#lottoArray.forEach((lotto) => {
      const count = this.#winningNumber.filter((number) =>
        lotto.includes(number)
      ).length;
      const bonusCount = lotto.includes(this.#bonusNumber) ? 1 : 0;
      this.checkWinningLotto(count, bonusCount, winningStatistics);
    });
  }

  getRoundedProfit(winningStatistics) {
    let totalPrice = 0;

    winningStatistics.forEach(
      (value, key) => (totalPrice += PRICE.PRICE_LIST[key] * value)
    );

    const totalProfit = (totalPrice / this.#purchaseAmount) * 100;
    const roundedProfit = Math.round(totalProfit * 10) / 10;

    return roundedProfit;
  }
}
