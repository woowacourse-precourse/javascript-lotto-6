import LottoController from './LottoController.js';

class App {
  async play() {
    await new LottoController().play();
  }
}

export default App;
