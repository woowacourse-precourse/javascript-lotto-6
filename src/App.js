import LottoController from './controller/LottoController.js';

class App {
  async play() {
    const lotto = new LottoController();
    await lotto.playLotto();
  }
}

export default App;
