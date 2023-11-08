import LottoController from './controllers/LottoController';

class App {
  async play() {
    const lottoGame = new LottoController();
    await lottoGame.lottoStart();
  }
}

export default App;
