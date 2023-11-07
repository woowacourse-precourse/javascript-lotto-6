import {
  FIVE_RANK,
  FOUR_RANK,
  LOTTO_SETTING,
  ONE_RANK,
  THREE_RANK,
  TWO_RANK,
} from '../constant.js';
import PurChaseValidator from '../validators/PurchaseValidator.js';
import Lottos from './Lottos.js';

class LottoGame {
  #purchase;

  #rankTemplate;

  #lottos;

  constructor(purchase) {
    this.#lottos = new Lottos();
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
    this.#lottos.generateLotto(purchase);
  }

  getLottos() {
    return this.#lottos.getLottos();
  }

  getWinningResult(winningNumber, bonusNumber) {
    const results = this.#checkLottos(winningNumber, bonusNumber);
    const rate = this.#calulateRate(results);

    return { results, rate };
  }

  #calulateRate(result) {
    const sum = LottoGame.#sumPrize(result);
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
    return this.#lottos.getLottos().reduce((accu, currentLotto) => {
      const result = { ...accu };
      let count = 0;
      count += LottoGame.#sameNumberCount(winningNumber, currentLotto);
      count += LottoGame.#haveBonusNumber(currentLotto, bonusNumber);
      const key = LottoGame.#transNumberToRank(count);
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
export default LottoGame;
