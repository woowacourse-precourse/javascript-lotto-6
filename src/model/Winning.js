import CONSTRAINTS from '../constants/Constraints';

class Winning {
  #winningResult;

  constructor() {
    this.#winningResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  getWinningResult() {
    return this.#winningResult;
  }

  setWinningResult(index) {
    this.#winningResult[index] += 1;
  }

  getWinningTotalPrice() {
    return Object.keys(this.#winningResult).reduce(
      (totalPrice, prize) =>
        totalPrice +
        CONSTRAINTS.WINNING_PRICE[prize] * this.#winningResult[prize],
      0,
    );
  }
}
export default Winning;
