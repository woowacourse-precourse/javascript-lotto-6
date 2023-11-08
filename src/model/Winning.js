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
}
export default Winning;
