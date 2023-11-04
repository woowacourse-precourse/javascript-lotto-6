import { Console, Random } from '@woowacourse/mission-utils';

import AppError from '../errors/error.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import MESSAGE from '../constants/message.js';
import { MessageFormat } from '../utils/messageFormat.js';

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
    if (numbers.length !== 6) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }

    if (!numbers.every((num) => num >= 1 && num <= 45 && Number.isInteger(num))) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }

    if (new Set(numbers).size !== 6) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  // TODO: 1. 로또 생성 관련 기능 분리 :
  // 로또 번호 생성
  static generateRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  // 넘겨 받은 갯수만큼 로또 티켓 리스트 생성
  static generateLottoTickets(num) {
    return Array.from({ length: num }, () => this.generateRandomLottoNumber());
  }

  // TODO: 2. 당첨 번호 비교 관련 기능 분리 :
  // 당첨통계
  printCompareWinningAndLotto() {
    Console.print(MESSAGE.output.resultHeader);
  }

  compareWinningAndLotto(userLotto, lottoList) {
    this.printCompareWinningAndLotto();
    const { winningNumbers, bonusNumber } = userLotto;

    lottoList.forEach((lotto) => {
      const hasUserNumber = winningNumbers
        .split(',')
        .map(Number)
        .filter((num) => lotto.includes(num)).length;
      const hasBonusNumber = lotto.includes(Number(bonusNumber));

      if (hasUserNumber >= 3 && !hasBonusNumber) {
        this.result[hasUserNumber] = (this.result[hasUserNumber] || 0) + 1;
      } else if (hasUserNumber === 5 && hasBonusNumber) {
        this.result['5_bonus'] = (this.result['5_bonus'] || 0) + 1;
      }
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
    const totalReturnRate = Math.abs(1 - totalProfit / totalPurchaseAmount) * 100;
    this.printTotalReturnRate(totalReturnRate);
  }

  printTotalReturnRate(totalReturnRate) {
    Console.print(MessageFormat.totalReturnRate(totalReturnRate));
  }
}

export default Lotto;
