import { Console } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import getUserInput from './utils/getUserInput.js';
import createLottoNumbers from './utils/createLottoNumbers.js';
import { LOTTO } from './constants/lotto.js';
import { INPUT_MESSAGE, PURCHASE_MESSAGE } from './constants/messages.js';
import {
  validateMinimumAmount,
  validateNumberType,
  validateUnit,
} from './utils/validate.js';

class Game {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.validate(purchaseAmount);
    this.purchaseLotto(Number(purchaseAmount));
    this.printPurchaseLottos();
  }

  validate(amount) {
    validateNumberType(amount);
    validateMinimumAmount(amount);
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

  printPurchaseLottos() {
    const lottos = this.getLottos();

    Console.print(PURCHASE_MESSAGE(lottos.length));
    lottos.forEach((lotto) => Console.print(lotto));
  }
}

export default Game;
