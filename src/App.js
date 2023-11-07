import LottoController from './controller/LottoController';

class App {
  #lottoController

  constructor(){
    this.#lottoController = new LottoController();
  }

  async play() {
    this.#lottoController.play();
  }
}

const app = new App();
app.play();

export default App;
