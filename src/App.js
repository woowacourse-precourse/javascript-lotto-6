import LottoController from "./controller/LottoController.js";

class App {
  constructor(){
    this.lottoController = new LottoController();
  }
  async play() {
    await this.lottoController.lottoStart();
  }
}

export default App;
