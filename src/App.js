import LottoController from "./controller/LottoController";

class App {

  #controller;
  
  constructor(){
    this.#controller = new LottoController();
  }

  async play() {
    await this.#controller.gameStart();
  }
}

export default App;
