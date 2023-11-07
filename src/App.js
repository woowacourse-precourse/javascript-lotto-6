import LottoController from './controller/LottoController.js';

export default class App {
  async play() {
    const lottoController = new LottoController();
    await lottoController.run();
  }
}
