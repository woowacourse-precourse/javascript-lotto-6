import Lotto from './Lotto';
import User from './User';
import BonusNumber from './BonusNumber';
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
    await this.getBonusNumber();
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

  async getBonusNumber() {
    const bonusNumberInput = await this.#player.setBonusNumber();
    this.#bonusNumber = new BonusNumber(bonusNumberInput, this.#winningNumbers);
  }
};

export default App;
