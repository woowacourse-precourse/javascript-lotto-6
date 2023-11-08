import LottoGameController from './controller/LottoGameController';

export default class App {
  async play() {
    const lottoGameController = new LottoGameController();
    await lottoGameController.start();
  }
}
