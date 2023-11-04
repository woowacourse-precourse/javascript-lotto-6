import Lotto from './Lotto.js';
import getUserInput from './utils/getUserInput.js';
import createLottoNumbers from './utils/createLottoNumbers.js';
import { LOTTO } from './constants/lotto.js';
import { INPUT_MESSAGE } from './constants/messages.js';
import { validateNumberType, validateUnit } from './utils/validate.js';

class Game {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.validate(purchaseAmount);
    this.purchaseLotto(Number(purchaseAmount));
  }

  validate(amount) {
    validateNumberType(amount);
    validateUnit(amount);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await getUserInput(INPUT_MESSAGE.purchaseAmount);
    return purchaseAmount;
  }

  purchaseLotto(amount) {
    const lottoCount = amount / LOTTO.price;

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = createLottoNumbers();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  getLottos() {
    const lottos = this.#lottos.map((lotto) => lotto.getNumbers());
    return lottos;
  }
}

export default Game;
