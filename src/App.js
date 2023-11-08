import InputHandler from './InputHandler.js';

class App {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async play() {
    const userAmount = await this.#inputHandler.inputAmount();
  }
}

export default App;
