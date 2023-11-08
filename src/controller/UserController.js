import input from '../utils/input';
import OutputView from '../view/OutputView';
import User from '../model/User';
import InputView from '../view/InputView';
import print from '../utils/print';

class UserController {
  #user;

  async createUser() {
    InputView.printInputPurchaseAmountPhrase();
    this.#user = await UserController.#recursiveInputPurchaseAmount();
    print();

    return this;
  }

  getUser() {
    return this.#user;
  }

  purchaseLottos() {
    this.#user.purchaseLottos();

    return this;
  }

  printUserLottosNumber() {
    const lottos = this.#user.getLottos();
    OutputView.outputLottosNumbers(lottos);

    return this;
  }

  static async #recursiveInputPurchaseAmount() {
    let user;

    try {
      const purchaseAmount = Number(await input());
      user = new User(purchaseAmount);
    } catch (error) {
      print(error.message);
      return UserController.#recursiveInputPurchaseAmount();
    }

    return user;
  }
}

export default UserController;
