import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Validation from './util/Validation.js';
import LottoGame from './LottoGame.js';

class App {
  #inputView;
  #outputView;
  #lottoGame;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoGame = new LottoGame();
  }

  async play() {
    this.#lottoGame.setUpGame();
    await this.#getLottoTickets();

    const winnigNumbers = await this.#inputView.getWinnigNumbers();
    const bonusNumber = await this.#inputView.getBonusNumber();
    const result = this.#lottoGame.resultOfWinningDetails(winnigNumbers, bonusNumber);
    console.log(result);
  }

  async #getLottoTickets() {
    const lottoPrice = await this.#inputView.getLottoPrice();
    Validation.inputLottoPrice(lottoPrice);

    const lottos = this.#lottoGame.purchace(lottoPrice);
    this.#outputView.printTotalLottos(lottos);
  }
}

export default App;
