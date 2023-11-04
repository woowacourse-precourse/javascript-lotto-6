import View from './View/View.js';

class App {
  #view;

  constructor() {
    this.#view = new View();
  }

  async play() {
    const userInput = await this.#view.readUserInput();

    this.#view.print(userInput);
  }
}

export default App;
