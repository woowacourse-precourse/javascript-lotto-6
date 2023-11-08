import LottoController from './controller/LottoController.js';

class App {
  async play() {
    const start = new LottoController();
    await start.lottoDraw();
  }
}
export default App;
