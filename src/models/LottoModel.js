import { Random } from '@woowacourse/mission-utils';
import {
  checkListSameValue,
  checkListValues,
  getCommonElementCount,
} from '../utils/listUtils.js';
import CONFIG from '../constants/config.js';
import Lotto from './Lotto.js';
import MATCHES from '../constants/matches.js';
import throwError from '../utils/throwError.js';
import { checkNumberType } from '../utils/numberUtils.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';

class LottoModel {
  #correctNumber;

  #bonusNumber;

  #lottoList = [];

  #winCounts = this.initWinCounts();

  #totalBuyPrice = 0;

  #totalWinMoney = 0;

  constructor(correctNumber, bonusNumber) {
    this.#correctNumber = correctNumber;
    this.#bonusNumber = bonusNumber;
  }

  calculatorTotalWinCounts() {
    Object.keys(MATCHES).forEach((key) => {
      this.#totalWinMoney += MATCHES[key].reward * this.#winCounts[key];
    });
  }

  checkAllLottoNumber() {
    this.#lottoList.forEach((lotto) => this.checkNumber(lotto.getNumbers()));
  }

  checkNumber(targetNumber) {
    const keyList = Object.keys(MATCHES).filter(
      (key) => key !== CONFIG.bonusMatchKey
    );
    const winCount = +getCommonElementCount(this.#correctNumber, targetNumber);
    // prettier-ignore
    if (winCount === CONFIG.bonusNumberMatch && targetNumber.includes(this.#bonusNumber)) {
       this.#winCounts[CONFIG.bonusMatchKey] += 1
       return 
    }
    // prettier-ignore
    winCount >= CONFIG.minLottoWinningNumber && (this.#winCounts[keyList[winCount - CONFIG.minLottoWinningNumber]] += 1);
  }

  createLottos(count) {
    Array.from({ length: count }).forEach(() => {
      const randomNumberList = Random.pickUniqueNumbersInRange(
        CONFIG.minLottoNumber,
        CONFIG.maxLottoNumber,
        CONFIG.lottoLength
      );
      this.#lottoList.push(new Lotto(randomNumberList));
    });
  }

  initWinCounts() {
    const results = {};
    Object.keys(MATCHES).forEach((key) => {
      results[key] = 0;
    });
    return results;
  }

  setCorrectNumber(correctNumber) {
    this.#correctNumber = correctNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  setTotalBuyPrice(totalBuyPrice) {
    this.#totalBuyPrice = totalBuyPrice;
  }

  setTotalWinMoney(totalWinMoney) {
    this.#totalWinMoney = totalWinMoney;
  }

  getCorrectNumber() {
    return this.#correctNumber;
  }

  getLottoList() {
    return this.#lottoList;
  }

  getMatchNumberList() {
    return this.#winCounts;
  }

  getTotalBuyPrice() {
    return this.#totalBuyPrice;
  }

  getTotalWinMoney() {
    return this.#totalWinMoney;
  }
}

export default LottoModel;
