import InputManager from './InputManager.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const inputManager = new InputManager();
    const amount = await inputManager.enterAmount();
    const lottos = Lotto.generateMultipleLottos(amount);

    Lotto.printLottos(lottos);
  }
}

export default App;
