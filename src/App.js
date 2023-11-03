import InputReader from './view/InputReader.js';

class App {
  #inputReader;

  constructor() {
    this.#inputReader = new InputReader();
  }
  async play() {
    this.#inputReader.purchasePrice();
  }
}

export default App;
