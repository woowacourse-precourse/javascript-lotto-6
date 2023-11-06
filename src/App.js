import { Random, Console } from '@woowacourse/mission-utils';
import Input from './UserInput.js';
import Controller from './LottoController.js';
class App {
  async play() {
    const lottoGame = new Controller();
    lottoGame.gameStart();
    const input = new Input();
    await input.userPurchase();
    await input.userNumber();
    await input.userBonusNumber();
  }
}

const app = new App();
app.play();

export default App;
