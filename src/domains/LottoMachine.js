import { LOTTO } from '../constants/lotto';
import { ERROR_MESSAGE } from '../constants/message';
import GameError from '../errors/GameError';
import paramType from '../lib/paramType/src/paramType';
import Lotto from '../Lotto.js';
import RandomNumberGenerator from '../utils/RandomNumberGenerator';

export default class LottoMachine {
  #sellingPrise;
  #randomNumberGenerator;

  constructor(
    sellingPrice = LOTTO.SELLING_PRISE,
    randomNumberGenerator,
    _0 = paramType(sellingPrice, 'number'),
    _1 = paramType(randomNumberGenerator, RandomNumberGenerator),
  ) {
    this.#validateSellingPrice(sellingPrice);
    this.#sellingPrise = sellingPrice;
    this.#randomNumberGenerator = randomNumberGenerator;
  }

  purchase(money, _ = paramType(money, 'number')) {
    this.#validateUserInputMoney(money);
    const purchaseLottoCount = this.#calculateCreateLottoCount(money);
    const lottoList = this.#createLottoList(purchaseLottoCount);

    return lottoList;
  }

  #calculateCreateLottoCount(money, _ = paramType(money, 'number')) {
    return money / this.#sellingPrise;
  }

  #createLottoList(purchaseCount, _ = paramType(purchaseCount, 'number')) {
    const lottoNumbers = this.#randomNumberGenerator.numbers();
    const lottoList = Array.from({ length: purchaseCount }, () =>
      this.#createLotto(lottoNumbers),
    );
    return lottoList;
  }

  #createLotto(numbers, _ = paramType(numbers, Array)) {
    return new Lotto(numbers);
  }

  #validateSellingPrice(sellingPrice, _ = paramType(sellingPrice, 'number')) {
    if (Number.isNaN(sellingPrice)) {
      throw new GameError(ERROR_MESSAGE.INVALID_SELLING_PRISE);
    }
  }

  #validateUserInputMoney(money, _ = paramType(money, 'number')) {
    if (money < LOTTO.SELLING_PRISE) {
      throw new GameError(
        ERROR_MESSAGE.RECEIVE_LESS_THAN_MINIMUM_PURCHASE_PRISE,
      );
    }
    if (!Number.isInteger(this.#calculateCreateLottoCount(money))) {
      throw new GameError(ERROR_MESSAGE.INVALID_PURCHASE_PRISE_CURRENCY);
    }
  }
}
