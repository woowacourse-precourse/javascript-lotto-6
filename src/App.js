import Lotto from './Lotto';
import User from './User';
import outputView from './views/outputView';

class App {
  #player;
  #winningNumbers;
  #bonusNumber;

  constructor() {}

  async play() {
    await this.getPurchaseAmount();
    this.buyLottos();
    await this.getWinningNumbers();
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

  async getWinningNumbers() {
    const winningNumbersArray = await this.#player.setWinningNumbers();
    this.#winningNumbers = new Lotto(winningNumbersArray);
  }
};

export default App;
