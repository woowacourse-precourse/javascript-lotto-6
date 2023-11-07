import LottoGameController from './controllers/LottoGameController';

class App {
  async play() {
    const controller = new LottoGameController();
    await controller.executeLottoGame();
  }
}

export default App;
