import { Random } from '@woowacourse/mission-utils';
import { getCommonElementCount } from '../utils/listUtils.js';
import CONFIG from '../constants/config.js';
import Lotto from './Lotto.js';

class LottoModel {
  #correctNumber;

  #bonusNumber;

  #lottoList = [];

  constructor(correctNumber, bonusNumber) {
    this.#correctNumber = correctNumber;
    this.#bonusNumber = bonusNumber;
  }

  checkNumber(targetNumber) {
    console.log(getCommonElementCount(this.#correctNumber, targetNumber));
  }

  setCorrectNumber(correctNumber) {
    this.#correctNumber = correctNumber;
  }

  createLotto() {
    const randomNumberList = Random.pickUniqueNumbersInRange(
      CONFIG.MIN_LOTTO_NUMBER,
      CONFIG.MAX_LOTTO_NUMBER,
      CONFIG.LOTTO_LENGTH
    );
    this.#lottoList.push(new Lotto(randomNumberList));
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default LottoModel;
