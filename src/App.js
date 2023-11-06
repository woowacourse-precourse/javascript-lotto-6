import LottoController from './controllers/LottoController';

class App {
  async play() {
    const lottoGame = LottoController();
    await lottoGame.lottoStart();
  }
}

export default App;
