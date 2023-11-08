import Lotto from "./Lotto.js";
class App {
  async play() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    await lotto.buyLotto();
  }
}

export default App;
