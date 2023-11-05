import { Random } from '@woowacourse/mission-utils';
import { getCommonElementCount } from '../utils/listUtils.js';
import CONFIG from '../constants/config.js';
import Lotto from './Lotto.js';
import MATCHES from '../constants/matches.js';

class LottoModel {
  #correctNumber;

  #bonusNumber;

  #lottoList = [];

  #winCounts = this.initWinCounts();

  constructor(correctNumber, bonusNumber) {
    this.#correctNumber = correctNumber;
    this.#bonusNumber = bonusNumber;
  }

  checkNumber(targetNumber) {
    const rewardList = Object.keys(MATCHES);
    const winCount = +getCommonElementCount(this.#correctNumber, targetNumber);
    if (winCount === 5) {
      // prettier-ignore
      targetNumber.includes(this.#bonusNumber) && (this.#winCounts[rewardList[rewardList.length - 1]] += 1);
      return;
    }
    // prettier-ignore
    winCount >= 3 && (this.#winCounts[rewardList[CONFIG.LOTTO_LENGTH - winCount]] += 1);
  }

  setCorrectNumber(correctNumber) {
    this.#correctNumber = correctNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
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

  getMatchNumberList() {
    return this.#winCounts;
  }

  initWinCounts() {
    const results = {};
    Object.keys(MATCHES).forEach((key) => {
      results[key] = 0;
    });
    return results;
  }
}

export default LottoModel;
