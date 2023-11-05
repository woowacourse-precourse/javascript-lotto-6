import View from "./View.js";
import Lotto from "./Lotto.js";
import Price from "./Price.js";
import BonusNumber from "./BonusNumber.js";

class App {
  #view;
  #price;
  #winningNumber;
  #bonusNumber;
  #boughtLotto;

  constructor() {
    this.#view = new View();
  }

  async play() {
    const ENTERED_INPUT_PRICE = await this.#view.getPrice();
    this.#price = new Price(ENTERED_INPUT_PRICE);
    const ENTERED_WINNING_NUMBER = await this.#view.getWinninNumber();
    this.#winningNumber = new Lotto(ENTERED_WINNING_NUMBER);
    const ENTERED_BONUS_NUMBER = await this.#view.getBonusNumber();
    this.#bonusNumber = new BonusNumber(ENTERED_BONUS_NUMBER);
  }
}

export default App;
