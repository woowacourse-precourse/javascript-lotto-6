import UserController from './controller/UserController';
import WinningController from './controller/WinningController';
import StoreController from './controller/StoreController';

class App {
  async play() {
    const user = await App.#purchaseLottos();
    const winning = await App.#inputWinningNumbers();
    App.#getMatchResult(user, winning);
  }

  static async #purchaseLottos() {
    const user = (await new UserController().createUser())
      .purchaseLottos()
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
