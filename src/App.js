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

    const lottoPrice = await this.#inputView.getLottoPrice();
    Validation.inputLottoPrice(lottoPrice);

    const lottos = this.#lottoGame.purchace(lottoPrice);
    this.#outputView.printTotalLottos(lottos);
  }
}

export default App;
