import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Validation from './util/Validation.js';
import Computer from './Computer.js';
import { generator } from './util/generator.js';

class App {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    const lottoPrice = await this.#inputView.getLottoPrice();
    Validation.inputLottoPrice(lottoPrice);

    const computer = new Computer(generator);
    const quantity = computer.calculateQuantity(lottoPrice);

    const lottos = computer.generateLotto(lottoPrice);

    this.#outputView.printTotalLottos({ quantity, lottos: this.#checkLottos(lottos) });
  }

  #checkLottos(lottos) {
    return lottos.map((lotto) => lotto.findNumbers());
  }
}

export default App;
