import Input from './utils/inputOutput/input.js';

class StartGame {
  #inputMoney;

  constructor() { }

  async runGame() {
    this.#inputMoney = await this.getValidatedPurchaseInput();
  }
}

export default StartGame;
