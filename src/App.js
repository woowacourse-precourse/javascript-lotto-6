const WINNING_RESULT_TO_PRICE = {
  three: 5000,
  four: 50000,
  five: 1500000,
  fiveBonus: 30000000,
  six: 2000000000,
};
class App {
  async play() {}
  #calculateProfitRate(totalResult) {
    const winningAmount = Object.keys(WINNING_RESULT_TO_PRICE).reduce(
      (acc, key) => acc + WINNING_RESULT_TO_PRICE[key] * totalResult[key],
      0,
    );
    return ((winningAmount / this.#amount - 1) * 100).toFixed(1);
  }
}

export default App;
