import { Random } from '@woowacourse/mission-utils';
import { getCommonElementCount } from '../utils/listUtils.js';
import CONFIG from '../constants/config.js';
import Lotto from './Lotto.js';
import MATCHES from '../constants/matches.js';

class LottosModel {
  #totalBuyPriceModel;

  #correctNumbersModel;

  #bonusNumberModel;

  #lottoList = [];

  #winCounts = this.initWinCounts();

  #totalWinMoney = 0;

  calculatorTotalWinCounts() {
    Object.keys(MATCHES).forEach((key) => {
      this.#totalWinMoney += MATCHES[key].reward * this.#winCounts[key];
    });
  }

  checkAllLottoNumber() {
    this.#lottoList.forEach((lotto) => this.checkNumber(lotto.getNumbers()));
  }

  // prettier-ignore
  checkNumber(targetNumber) {
    const keyList = Object.keys(MATCHES).filter(
      (key) => key !== CONFIG.bonusMatchKey
    );
    const winCount = +getCommonElementCount(this.#correctNumbersModel.getNumbers(), targetNumber);

    if (winCount === CONFIG.bonusNumberMatch && targetNumber.includes(this.#bonusNumberModel.getNumber())) {
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

  setTotalWinMoney(totalWinMoney) {
    this.#totalWinMoney = totalWinMoney;
  }

  setTotalBuyPriceModel(totalBuyPriceModel) {
    this.#totalBuyPriceModel = totalBuyPriceModel;
  }

  setCorrectNumbersModel(correctNumbersModel) {
    this.#correctNumbersModel = correctNumbersModel;
  }

  setBonusNumberModel(bonusNumberModel) {
    this.#bonusNumberModel = bonusNumberModel;
  }

  getLottoList() {
    return this.#lottoList;
  }

  getMatchNumberList() {
    return this.#winCounts;
  }

  getTotalWinMoney() {
    return this.#totalWinMoney;
  }
}

export default LottosModel;
