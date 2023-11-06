import { Random, Console } from '@woowacourse/mission-utils';
import Input from './UserInput.js';
import Controller from './LottoController.js';
import OutPut from './ComputerOutput.js';
class App {
  async play() {
    const lottoGame = new Controller();
    lottoGame.checkNumber();
    lottoGame.gameStart();
  }
}

const app = new App();
app.play();

export default App;
