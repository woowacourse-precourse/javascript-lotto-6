import Validator from '../Validator/index.js';
import { MESSAGE } from '../constants/index.js';
import { Input } from '../View/index.js';
import LottoMachine from '../LottoMachine/index.js';

class LottoGame {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async start() {
    await this.askPurchaseAmount();
  }

  async askPurchaseAmount() {
    const amount = await Input.readLine(MESSAGE.askPurchaseAmount, (answer) =>
      Validator.validatePurchaseAmount(answer),
    );
    this.purchase(Number(amount));
  }
}

export default LottoGame;
