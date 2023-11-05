import Lotto from '../Lotto.js';
import {
  FIVE_RANK,
  FOUR_RANK,
  LOTTO_SETTING,
  ONE_RANK,
  THREE_RANK,
  TWO_RANK,
} from '../constant.js';
import Util from '../utils/Util.js';
import PurChaseValidator from '../validators/PurchaseValidator.js';

class Lottos {
  #purchase;

  #lottos;

  #rankTemplate;

  constructor(purchase) {
    this.#lottos = [];
    this.#purchase = purchase;
    this.#rankTemplate = {
      [FIVE_RANK]: 0,
      [FOUR_RANK]: 0,
      [THREE_RANK]: 0,
      [TWO_RANK]: 0,
      [ONE_RANK]: 0,
    };
  }

  setPurchase(purchase) {
    PurChaseValidator.checkPurchase(purchase);
    this.#purchase = purchase;
  }

  generateLotto() {
    const amount = this.#purchase / LOTTO_SETTING.unit;
    const newLottos = [];
    Array.from({ length: amount }).forEach(() => newLottos.push(Lottos.#makeLotto()));
    this.#lottos = newLottos;
  }

  static #makeLotto() {
    const randomNumber = Util.getLottoNumberList();
    return new Lotto(randomNumber);
  }

  getLottos() {
    if (this.#lottos.length === 0) {
      return [];
    }

    return this.#lottos.map((lotto) => lotto.getLottoNumbers());
  }

  getWinningResult(winningNumber, bonusNumber) {
    const results = this.#checkLottos(winningNumber, bonusNumber);
    const rate = this.#calulateRate(results);

    return { results, rate };
  }

  #calulateRate(result) {
    const sum = Lottos.#sumPrize(result);
    return ((sum / this.#purchase) * 100).toFixed(1);
  }

  static #sumPrize(result) {
    let sum = 0;
    [...Object.entries(result)].forEach(([rank, count]) => {
      sum += LOTTO_SETTING.prize[rank] * count;
    });

    return sum;
  }

  #checkLottos(winningNumber, bonusNumber) {
    return this.#lottos.reduce((accu, currentLotto) => {
      const result = { ...accu };
      let count = 0;
      count += Lottos.#sameNumberCount(winningNumber, currentLotto.getLottoNumbers());
      count += Lottos.#haveBonusNumber(currentLotto.getLottoNumbers(), bonusNumber);
      const key = Lottos.#transNumberToRank(count);

      if (key) result[key] += 1;

      return result;
    }, this.#rankTemplate);
  }

  static #transNumberToRank(number) {
    if (number === 3) return FIVE_RANK;
    if (number === 4) return FOUR_RANK;
    if (number === 5) return THREE_RANK;
    if (number === 5.5) return TWO_RANK;
    if (number === 6) return ONE_RANK;
    return false;
  }

  static #sameNumberCount(referenceArray, findArray) {
    let count = 0;
    referenceArray.forEach((number) => {
      if (findArray.includes(number)) count += 1;
    });

    return count;
  }

  static #haveBonusNumber(referenceArray, bonusNumber) {
    if (referenceArray.includes(bonusNumber)) {
      return 0.5;
    }

    return 0;
  }
}

export default Lottos;
