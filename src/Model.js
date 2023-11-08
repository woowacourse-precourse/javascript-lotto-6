import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

class Model {
  #lottoNumbers = [];

  #winningLottory;

  #bonusNumber;

  // 테스트를 위해 추가한 getter
  getLottoNumbersLength() {
    return this.#lottoNumbers.length;
  }

  generateRandomLottoNumbers(money) {
    let i;
    const count = money / 1000;

    for (i = 0; i < count; i += 1) {
      const temp = Random.pickUniqueNumbersInRange(1, 45, 6);
      temp.sort((a, b) => a - b);
      const lotto = new Lotto(temp);
      this.#lottoNumbers.push(lotto);
    }

    return this.#lottoNumbers;
  }

  setLottoNumbers(lottoNumbers) {
    this.#winningLottory = new Lotto(lottoNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이여야 합니다.');
    }
    if (Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자를 입력해주셔야합니다.');
    }
    if (this.#winningLottory.duplicateTest(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default Model;
