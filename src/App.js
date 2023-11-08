import LottoController from './controller/LottoController.js';

class App {
  async play() {
    const lottoControl = new LottoController();
    await lottoControl.run();
  }
}

export default App;
