import LottoGameController from './controller/LottoGameController.js';

export default class App {
  async play() {
    const lottoGameController = new LottoGameController();
    await lottoGameController.start();
  }
}
