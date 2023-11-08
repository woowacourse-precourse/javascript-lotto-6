import Lotto from './Lotto';
import User from './User';
import outputView from './views/outputView';

class App {
  #player

  constructor() {}

  async play() {
    await this.getPurchaseAmount();
    this.buyLottos();
  }

  async getPurchaseAmount() {
    this.#player = new User();
    await this.#player.setPurchaseAmount();
  }

  buyLottos() {
    this.#player.numberOfLottosAvailable = Lotto.getHowManyLottoCanBuy(this.#player.purchaseAmount);
    this.#player.buyLottos(this.#player.numberOfLottosAvailable, Lotto.generateNumbers);
    outputView.printLottosInfo(this.#player.lottoNumbers);
  }
};

export default App;
