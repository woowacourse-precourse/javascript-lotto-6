import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';
import { ErrorMessage } from '../Message';
import GameUtil from './GameUtil';

export default class GameModel {
  constructor() {
    this.BUYING_MONEY = 0;
    this.LOTTO_COUNT = 0;
    this.LOTTOS = [];
    this.WINNING_NUMBER = [];
    this.BONUS_NUMBER = 0;
    this.RESULT = {
      SIX_MATCH: 0, // 6개 일치
      FIVE_BONUS_MATCH: 0, // 5개 + 보너스 번호 일치
      FIVE_MATCH: 0, // 5개 일치
      FOUR_MATCH: 0, // 4개 일치
      THREE_MATCH: 0, // 3개 일치
      PROFIT_RATE: 0,
    };
    this.util = new GameUtil();
  }

  lottoCount(buyingMoney) {
    const lottoCount = Math.floor(buyingMoney / 1000);
    this.LOTTO_COUNT = lottoCount;
    return lottoCount;
  }

  generateLotto(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(number);
      this.LOTTOS.push(lotto);
    }
  }

  generateWinningNumber(winningNumber) {
    const number = new Lotto(winningNumber);
    this.WINNING_NUMBER = number.getLottoNumber();
  }

  generateBonusNumber(bonusNumber) {
    const duplicateCheckArray = [bonusNumber, ...this.WINNING_NUMBER];
    this.util.bonusNumberValidatro(bonusNumber, duplicateCheckArray);
    this.BONUS_NUMBER = Number(bonusNumber);
  }

  calculateResult() {
    for (const lotto of this.LOTTOS) {
      const matchingNumbers = this.util.countMatchingNumbers(
        lotto.getLottoNumber(),
        this.WINNING_NUMBER,
      );
      const isBonusNumberMatched = this.util.isBonusNumberMatched(
        lotto.getLottoNumber(),
        this.BONUS_NUMBER,
        matchingNumbers,
      );
      this.updateResult(matchingNumbers, isBonusNumberMatched);
    }
  }

  updateResult(matchingNumbers, isBonusNumberMatched) {
    if (matchingNumbers === 6) {
      this.RESULT['SIX_MATCH'] += 1;
    }
    if (matchingNumbers === 5 && isBonusNumberMatched) {
      this.RESULT['FIVE_BONUS_MATCH'] += 1;
    }
    if (matchingNumbers === 5) {
      this.RESULT['FIVE_MATCH'] += 1;
    }
    if (matchingNumbers === 4) {
      this.RESULT['FOUR_MATCH'] += 1;
    }
    if (matchingNumbers === 3) {
      this.RESULT['THREE_MATCH'] += 1;
    }
  }

  calculateProfitRate() {
    let totalProfit = 0;
    if (this.RESULT['SIX_MATCH'] !== 0) {
      totalProfit += 2000000000 * Number(this.RESULT['SIX_MATCH']);
    }
    if (this.RESULT['FIVE_BONUS_MATCH'] !== 0) {
      totalProfit += 30000000 * Number(this.RESULT['FIVE_BONUS_MATCH']);
    }
    if (this.RESULT['FIVE_MATCH'] !== 0) {
      totalProfit += 1500000 * Number(this.RESULT['FIVE_MATCH']);
    }
    if (this.RESULT['FOUR_MATCH'] !== 0) {
      totalProfit += 50000 * Number(this.RESULT['FOUR_MATCH']);
    }
    if (this.RESULT['THREE_MATCH'] !== 0) {
      totalProfit += 5000 * Number(this.RESULT['THREE_MATCH']);
    }
    this.RESULT['PROFIT_RATE'] = (
      (totalProfit / (this.LOTTO_COUNT * 1000)) *
      100
    ).toFixed(1);
  }
}
