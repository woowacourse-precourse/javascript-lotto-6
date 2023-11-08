import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../constants/constants.js';

class UserLottoNumber {
  #lottoNumber;

  constructor() {
    this.#lottoNumber = this.#generateLottoNumber();
  }

  getUserLottoNumber() {
    return this.#lottoNumber;
  }

  #generateLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber.sort((a, b) => a - b);
  }

  calculateMatchingNumber(winningLotto) {
    const matchingNumbers = this.#lottoNumber.filter((number) =>
      winningLotto.lottoNumber.includes(number)
    );
    const bonusNumber = this.#lottoNumber.includes(winningLotto.bonusNumber);

    if (matchingNumbers.length === NUMBER.six) return 'first';
    if (matchingNumbers.length === NUMBER.five && bonusNumber) return 'second';
    if (matchingNumbers.length === NUMBER.five) return 'third';
    if (matchingNumbers.length === NUMBER.four) return 'fourth';
    if (matchingNumbers.length === NUMBER.three) return 'fifth';
    return 'none';
  }
}

export default UserLottoNumber;
