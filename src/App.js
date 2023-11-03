import InputView from './view/InputView.js';

import Validation from './util/Validation.js';
import Computer from './Computer.js';
import { generator } from './util/generator.js';

class App {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async play() {
    const lottoPrice = await this.#inputView.getLottoPrice();
    Validation.inputLottoPrice(lottoPrice);
    const computer = new Computer(generator);
    const quantity = computer.calculateQuantity(lottoPrice);
    console.log(quantity);

    const lottos = computer.generateLotto(lottoPrice);
    console.log(this.#checkLottos(lottos));
  }

  #checkLottos(lottos) {
    return lottos.map((lotto) => lotto.findNumbers());
  }
}

export default App;
