import View from './View/View.js';

class App {
  #view;

  constructor() {
    this.#view = new View();
  }

  async play() {
    const userInput = await this.#view.readPurchaseAmount();
    const winningNumber = await this.#view.readWinningNumber();
    const bonusNumber = await this.#view.readBonusNumber();

    this.#view.print(userInput);
    this.#view.print(winningNumber);
    this.#view.print(bonusNumber);
  }
}

export default App;
