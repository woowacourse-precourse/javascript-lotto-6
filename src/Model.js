import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

class Model {
  #lottoNumbers = [];

  #winningLottory;

  #bonusNumber;

  #money;

  // 테스트를 위해 추가한 getter
  getLottoNumbersLength() {
    return this.#lottoNumbers.length;
  }

  generateRandomLottoNumbers(money) {
    let i;
    this.#money = money;
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

  getWinningLottos() {
    const winningLottos = [0, 0, 0, 0, 0];
    this.#lottoNumbers.forEach((lotto) => {
      const [matchCount, matchBonus] = lotto.compareLotto(this.#winningLottory, this.#bonusNumber);
      if (matchCount === 3) {
        winningLottos[0] += 1;
      }
      if (matchCount === 4) {
        winningLottos[1] += 1;
      }
      if (matchCount === 5 && !matchBonus) {
        winningLottos[2] += 1;
      }
      if (matchCount === 5 && matchBonus) {
        winningLottos[3] += 1;
      }
      if (matchCount === 6) {
        winningLottos[4] += 1;
      }
    });
    return winningLottos;
  }

  getBenefit() {
    const winningLottos = this.getWinningLottos();
    const winningMoney = [0, 0, 0, 0, 0];
    winningMoney[0] = winningLottos[0] * 5000;
    winningMoney[1] = winningLottos[1] * 50000;
    winningMoney[2] = winningLottos[2] * 1500000;
    winningMoney[3] = winningLottos[3] * 30000000;
    winningMoney[4] = winningLottos[4] * 2000000000;

    return (winningMoney.reduce((acc, cur) => acc + cur, 0) * 100) / this.#money;
  }
}

export default Model;
