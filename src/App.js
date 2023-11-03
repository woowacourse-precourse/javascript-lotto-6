import View from './View.js';

class App {
  #coin;
  #view = new View();

  async play() {
    this.#coin = await this.#view.inputCash();
  }
}

export default App;
