import LottoGameController from '../Controller/LottoGameController.js';
import Inputview from '../View/InputView.js';
import Outputview from '../View/OutputView.js';
import LottoMachine from '../Domain/LottoMachine.js';
import WinningJudge from '../Domain/WinningJudge.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoGameController({
      inputview: new Inputview(),
      outputview: new Outputview(),
      LottoMachine: new LottoMachine(),
      WinningJudge: new WinningJudge(),
    });
  }

  async play() {
    await this.#controller.startGame();
  }
}

const app = new App();
app.play();

export default App;
