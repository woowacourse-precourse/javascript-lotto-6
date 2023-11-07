import getLottoAmount from './service/input/getLottoAmount.js';
import LottoGenerator from './service/LottoGenerator.js';
import IssuedLottInfo from './domain/info/IssuedLottoInfo.js';
import display from './domain/utils/display.js';

class App {
  #lottoAmount;
  #lottoGenerator;

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
  }

  async play() {
    this.#issueLotto();
  }
}

export default App;
