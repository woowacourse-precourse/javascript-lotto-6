import UserController from './controller/UserController.js';
import WinningController from './controller/WinningController.js';
import StoreController from './controller/StoreController.js';

class App {
  async play() {
    const user = await App.#purchaseLottos();

    const winning = await App.#inputWinningNumbers();

    App.#getMatchResult(user, winning);
  }

  static async #purchaseLottos() {
    const user = (await new UserController().createUser())
      .purchaseNLottos()
      .printUserLottosNumber()
      .getUser();

    return user;
  }

  static async #inputWinningNumbers() {
    const winning = (await new WinningController().createWinning()).getWinning();

    return winning;
  }

  static #getMatchResult(user, winning) {
    new StoreController().createStore(user, winning).printMatchResults();
  }
}

export default App;
