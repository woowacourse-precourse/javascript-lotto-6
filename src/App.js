import lottoController from './Controller/LottoContoller';

class App {
  #controller;

  constructor() {
    this.#controller = lottoController;
  }

  async play() {
    await this.#controller();
  }
}

export default App;
