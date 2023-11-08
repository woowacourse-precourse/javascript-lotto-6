import Consumer from "./Consumer.js";
import User from "./User.js";
import Lotto from "./Lotto.js";
import Provider from "./Provider.js";
import LottoMachine from "./LottoMachine.js";

export default class Computer {
  user;
  consumer;
  provider;
  lotto;

  constructor() {
    this.user = User.createUser();
  }

  static createComputer() {
    return new this();
  }

  #init(purchaseAmount) {
    this.consumer = Consumer.createConsumer(purchaseAmount);
    this.provider = Provider.createProvider();
  }

  async simulateLotto() {
    const purchaseAmount = await this.user.promptPurchaseAmount();
    this.#init(purchaseAmount);
    this.#buyLottos(purchaseAmount);
    this.user.printLottosCount(this.consumer.lottos);
    this.user.printLottos(this.consumer.lottos);
    const correctNumbers = await this.user.promptCorrectNumber();
    const bonusNumber = await this.user.promptBounusNumber();
    this.lottoMachine = LottoMachine.createLottoMachine(correctNumbers, bonusNumber);
  }

  #buyLottos(purchaseAmount) {
    const lottosCount = this.provider.countLottos(purchaseAmount);
    this.consumer.consumeLottos(
      Array(lottosCount).fill(null).map(() => {
        return Lotto.createLotto(this.provider.provideLotto()).getNumbers();
      })
    );
  }
}
