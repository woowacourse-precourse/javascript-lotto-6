import { LOTTO } from '../constants/lotto.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import GameError from '../errors/GameError.js';
import paramType from '../lib/paramType/src/paramType.js';
import Lotto from '../Lotto.js';
import RandomNumberGenerator from '../utils/RandomNumberGenerator.js';

export default class LottoMachine {
  #sellingPrice;
  #randomNumberGenerator;

  constructor(
    sellingPrice = LOTTO.SELLING_PRICE,
    randomNumberGenerator,
    _0 = paramType(sellingPrice, 'number'),
    _1 = paramType(randomNumberGenerator, RandomNumberGenerator),
  ) {
    this.#validateSellingPrice(sellingPrice);
    this.#sellingPrice = sellingPrice;
    this.#randomNumberGenerator = randomNumberGenerator;
  }

  purchase(money, _ = paramType(money, 'number')) {
    this.#validateUserInputMoney(money);
    const purchaseLottoCount = this.#calculateCreateLottoCount(money);
    const lottoList = this.#createLottoList(purchaseLottoCount);
    this.#validateIsAllLottoInstance(lottoList);

    return lottoList;
  }

  #calculateCreateLottoCount(money, _ = paramType(money, 'number')) {
    return money / this.#sellingPrice;
  }

  #createLottoList(purchaseCount, _ = paramType(purchaseCount, 'number')) {
    const lottoList = Array.from({ length: purchaseCount }, () => {
      const lottoNumbers = this.#randomNumberGenerator.numbers();
      return this.#createLotto(lottoNumbers);
    });

    return lottoList;
  }

  #createLotto(numbers, _ = paramType(numbers, Array)) {
    return new Lotto(numbers, this.#ascendingSort);
  }

  #ascendingSort() {
    return (a, b) => a - b;
  }

  #validateSellingPrice(sellingPrice, _ = paramType(sellingPrice, 'number')) {
    if (Number.isNaN(sellingPrice)) {
      throw new GameError(ERROR_MESSAGE.INVALID_SELLING_PRICE);
    }
  }

  #validateUserInputMoney(money, _ = paramType(money, 'number')) {
    if (money < LOTTO.SELLING_PRICE) {
      throw new GameError(
        ERROR_MESSAGE.RECEIVE_LESS_THAN_MINIMUM_PURCHASE_PRICE,
      );
    }
    if (!Number.isInteger(this.#calculateCreateLottoCount(money))) {
      throw new GameError(ERROR_MESSAGE.INVALID_PURCHASE_PRICE_CURRENCY);
    }
  }

  #validateIsAllLottoInstance(lottoList, _ = paramType(lottoList, Array)) {
    if (lottoList.some((lotto) => !(lotto instanceof Lotto))) {
      throw new GameError('로또가 잘못 생성되었습니다.');
    }
  }
}
