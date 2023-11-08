import Controller from './Controller/LottoController.js';
class App {
  async play() {
    const lottoGame = new Controller();
    lottoGame.gameStart();
  }
}

const app = new App();
app.play();

export default App;