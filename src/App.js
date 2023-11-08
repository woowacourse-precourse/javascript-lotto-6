import { inputMoney } from './ui/input.js';
import { printLottoNumbers } from './ui/output.js';
import Model from './Model.js';

class App {
  #model;

  constructor() {
    this.#model = new Model();
  }

  async intro() {
    const money = await inputMoney();
    const lottoNumbers = this.#model.generateRandomLottoNumbers(money);
    printLottoNumbers(lottoNumbers);
  }

  async play() {
    await this.intro();
  }
}

export default App;
