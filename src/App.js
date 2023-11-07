import getLottoAmount from './service/input/getLottoAmount.js';
import LottoGenerator from './service/LottoGenerator.js';
import display from './domain/utils/display.js';
import getWinningNumbers from './service/input/getWinningNumbers.js';

class App {
  #lottoAmount;
  #lottoGenerator;
  #lotto;

  constructor() {
    this.#lottoAmount = null;
    this.#lottoGenerator = null;
  }

  async #issueLotto() {
    this.#lottoAmount = await getLottoAmount();

    this.#lottoGenerator = new LottoGenerator(this.#lottoAmount);
    this.#lottoGenerator.generateLottos();

    display.issedLottoInfo({
      count: this.#lottoGenerator.getDrawCount(),
      lottos: this.#lottoGenerator.getLottos(),
    });

    this.#drawWinningNumber();
  }

  #drawWinningNumber() {
    const winningNumbers = getWinningNumbers();

    this.#lotto = new Lotto(winningNumbers);
  }

  async play() {
    this.#issueLotto();
  }
}

export default App;
