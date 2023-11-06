import LottoController from './controller/LottoController.js';

export default class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async play() {
    this.#lottoController.run();
  }
}
