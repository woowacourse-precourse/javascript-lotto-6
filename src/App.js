import LottoController from './controllers/LottoController'

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.start();
  }
}

export default App;