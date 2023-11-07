import LOTTO_NUMBER from '../constants/lottoNumber.js';
import pickUniqueRandomNumbers from '../utils/pickUniqueRandomNumbers.js';
import input from '../utils/input.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';
import User from '../model/User.js';
import InputView from '../view/InputView.js';
import print from '../utils/print.js';

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

  purchaseNLottos() {
    const lottoPurchaseNumber = this.#user.getpurchaseAmount() / 1000;
    const lottos = UserController.#purchaseLottos(lottoPurchaseNumber);
    this.#user.setLottos(lottos);

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
      const purchaseAmount = await input();
      user = new User(Number(purchaseAmount));
    } catch (error) {
      print(error.message);
      return UserController.#recursiveInputPurchaseAmount();
    }

    return user;
  }

  static #purchaseOneLotto() {
    const { min, max, count } = LOTTO_NUMBER;
    const lottoNumbers = pickUniqueRandomNumbers(min, max, count);
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }

  static #purchaseLottos(purchaseAmount, lottos = []) {
    if (purchaseAmount > 0) {
      const newLotto = UserController.#purchaseOneLotto();
      return UserController.#purchaseLottos(purchaseAmount - 1, [...lottos, newLotto]);
    }

    return lottos;
  }
}

export default UserController;
