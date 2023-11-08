import { LOTTO_PRICE, MESSAGES } from '../constants/constants.js';

class User {
  /**
   * @type number - 구입 금액
   */
  #purchaseAmount;
  /**
   * @type Lotto[] - 발행한 로또 배열
   */
  #lottos;

  constructor() {}

  get lottos() {
    return this.#lottos;
  }

  /**
   * @param{Lotto[]} lottos
   */
  set lottos(lottos) {
    this.#lottos = lottos;
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }

  set purchaseAmount(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  #validate(purchaseAmount) {
    if (purchaseAmount <= 0 || purchaseAmount % LOTTO_PRICE !== 0) {
      throw new Error(MESSAGES.ERROR.LOTTO_PURCHASE_PRICE_NOT_A_MULTIPLE_OF_1000_EXCEPTION);
    }
  }

  calculateStatistic(winningNumbers, bonusNumber) {
    let result = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };

    this.#lottos.forEach((lotto) => {
      let coincideCount = 0;
      let bonusCount = 0;

      lotto.forEach((number) => {
        if (winningNumbers.includes(number)) {
          coincideCount++;
        }
      });

      if (lotto.includes(bonusNumber)) {
        bonusCount++;
      }

      const rank = this.#getRank(coincideCount, bonusCount);
      result[rank] += 1;
    });
    return result;
  }

  #getRank(coincideCount, bonusCount) {
    switch (coincideCount) {
      case 6:
        return 'FIRST';
      case 5:
        if (bonusCount === 1) {
          return 'SECOND';
        }
        return 'THIRD';
      case 4:
        return 'FOURTH';
      case 3:
        return 'FIFTH';
    }
  }
}

export default User;
