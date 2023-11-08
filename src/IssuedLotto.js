/* eslint-disable array-callback-return */
import { MissionUtils } from '@woowacourse/mission-utils';

class IssuedLotto {
  #numOfPurchasedLotto;

  constructor(numOfPurchasedLotto) {
    this.#numOfPurchasedLotto = numOfPurchasedLotto;
  }

  lottoIssuance() {
    const issuedLottos = [];
    for (let i = 0; i < this.#numOfPurchasedLotto; i += 1) {
      const currentLotto = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      ).sort((a, b) => a - b);
      issuedLottos.push(currentLotto);
    }
    return issuedLottos;
  }

  printOut(issuedLottos) {
    MissionUtils.Console.print(
      `\n${this.#numOfPurchasedLotto}개를 구매했습니다.`,
    );
    issuedLottos.map((lotto) => {
      MissionUtils.Console.print(lotto);
    });
  }
}

export default IssuedLotto;
