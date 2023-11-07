import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER } from './constants/policy.js';

class CheckManager {
  #ranks;

  constructor(luckyNumber, bonusNumber, tryCount) {
    this.#ranks = this.#checkRanks(
      luckyNumber,
      bonusNumber,
      this.#publishLottos(tryCount),
    );
  }

  #publishLottos(count) {
    const publishLottos = [];
    for (let i = 0; i < count; i++) {
      const publishLotto = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.startNumber,
        LOTTO_NUMBER.endNumber,
        LOTTO_NUMBER.lottoLength,
      );
      Console.print('[' + publishLotto.sort((a, b) => a - b).join(', ') + ']');
      publishLottos.push(publishLotto);
    }
    return publishLottos;
  }

  #checkRanks(luckyNumber, bonusNumber, randomPublishLottos) {
    return randomPublishLottos.map((randomPublishLotto) => {
      const differentCount = this.#checkLuckyNumber(luckyNumber,randomPublishLotto);
      const isBonus = this.#checkBonus(bonusNumber, randomPublishLottos);
      if (differentCount === 0) return 1;
      if (differentCount === 1) {
        if (isBonus) {
          return 2;
        }
        return 3;
      }
      return differentCount + 2;
    });
  }

  #checkLuckyNumber(luckyNumber, randomPublishLotto) {
    let differentCount = 6;
    randomPublishLotto.forEach((number) => {
      if (luckyNumber.includes(number)) {
        differentCount--;
      }
    });
    return differentCount;
  }

  #checkBonus(bonusNumber, randomPublishLotto) {
    return randomPublishLotto.includes(bonusNumber);
  }

  getRanks() {
    return this.#ranks;
  }
}

export default CheckManager;
