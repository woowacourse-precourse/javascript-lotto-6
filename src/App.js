import View from "./View.js";
import Lotto from "./Lotto.js";
import Price from "./Price.js";

class App {
  view;
  price;
  winningNumber;
  bonusNumber;
  boughtLotto;

  constructor() {
    this.view = new View();
  }

  async play() {
    const INPUT_PRICE = await this.view.getPrice();
    this.price = new Price(INPUT_PRICE);
    const ENTERED_WINNING_NUMBER = await this.view.getWinninNumber();
    this.winningNumber = new Lotto(ENTERED_WINNING_NUMBER);
  }
}

export default App;
