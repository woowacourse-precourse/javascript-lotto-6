import AppError from '../errors/error.js';
import { Console } from '@woowacourse/mission-utils';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import MESSAGE from '../constants/message.js';
import { MessageFormat } from '../utils/messageFormat.js';
import { isValidNumber } from '../utils/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = {
      3: 0,
      4: 0,
      5: 0,
      '5_bonus': 0,
      6: 0,
    };
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }

    if (!numbers.every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }

    if (new Set(numbers).size !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  // TODO: 2. 당첨 번호 비교 관련 기능 분리 :
  // 당첨통계
  printCompareWinningAndLotto() {
    Console.print(MESSAGE.output.resultHeader);
  }

  compareWinningAndLotto(bonusNumber, lottoList) {
    this.printCompareWinningAndLotto();

    const { winningMin, bonus } = LOTTO.number;
    const { count: bonusCount, key: bonusKey } = bonus;

    lottoList.forEach((lotto) => {
      const matchedNumbers = this.#numbers.map(Number).filter((num) => lotto.includes(num));
      const matchedNumbersKey = matchedNumbers.length;
      const hasBonusNumber = lotto.includes(Number(bonusNumber));

      if (matchedNumbers.length < winningMin) return;

      const key = hasBonusNumber && matchedNumbersKey === bonusCount ? bonusKey : matchedNumbersKey;
      this.result[key] = (this.result[key] || 0) + 1;
    });

    return this.result;
  }

  printTotalResult() {
    Array.from(LOTTO.lottoPrizesMap.keys()).forEach((key) => {
      Console.print(MessageFormat.resultRow(key, this.result[key]));
    });
  }

  // TODO: 3. 수익관련 기능 분리
  // 수익률 계산
  // 총 당첨 금액 계산 + 총 수익률 계산 및 출력
  calculateTotalPrizeAmount() {
    return Object.keys(this.result).reduce((total, key) => {
      const count = this.result[key];
      const prizeInfo = LOTTO.lottoPrizesMap.get(key);

      if (prizeInfo) total += prizeInfo.prize * count;

      return total;
    }, 0);
  }

  /**
   * (1 - (구매가격 - 당첨금액) / 구매가격) * 100
   */
  calculateReturnRate(totalPurchaseAmount) {
    const totalProfit = totalPurchaseAmount - this.calculateTotalPrizeAmount();
    const totalReturnRate = Math.abs(1 - totalProfit / totalPurchaseAmount) * LOTTO.rate.percent;
    this.printTotalReturnRate(totalReturnRate);
  }

  printTotalReturnRate(totalReturnRate) {
    Console.print(MessageFormat.totalReturnRate(totalReturnRate));
  }
  /**
   * 당첨금 - 총비용 = 이익
   * 이익 / 총비용 = 이익률
   * 이익률 * 100 = 백분율
   */
}

export default Lotto;
