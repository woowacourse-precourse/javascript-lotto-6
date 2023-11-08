import Controller from './controller/Controller.js';

class App {
  async play() {
    const lottoGame = new Controller();
    await lottoGame.buyLotto();
  }
}

export default App;
