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

export default App;
