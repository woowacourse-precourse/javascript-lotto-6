import { Console, Random } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (!numbers.every((num) => num >= 1 && num <= 45 && Number.isInteger(num))) {
      throw new Error('[ERROR] 1에서 45 사이의 정수를 입력해주세요.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 6개의 서로 다른 숫자를 입력해주세요.');
    }
  }
  // TODO: 함수 분리, SOLID 원칙 적용하기

  // 로또 번호 생성
  static generateRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  // 넘겨 받은 갯수만큼 로또 티켓 리스트 생성
  static generateLottoTickets(num) {
    return Array.from({ length: num }, () => this.generateRandomLottoNumber());
  }

  // 당첨 번호와 비교
  compareWinningAndLotto(winningNumbers, bonusNumber, lottoList) {
    Console.print(OUTPUT_MESSAGE.RESULT_HEADER);

    const matchingCount = lottoList.map((lotto) => {
      return lotto.filter((num) => winningNumbers.includes(num)).length;
    });

    this.lotteryStatistics(matchingCount);
  }

  // 당첨 통계
  lotteryStatistics(matchingCount) {
    const result = {};
    matchingCount.forEach((count) => {
      if (count < 3) return;
      result[count] = result[count] ? result[count] + 1 : 1;
    });

    console.log(result);
    for (let index = 3; index <= 6; index++) {
      Console.print(OUTPUT_MESSAGE.RESULT_ROW(index, result[Number(index)]));
    }
  }

  // 수익률 계산
  // 총 당첨 금액 계산 + 총 수익률 계산 및 출력
  calculateTotalPrizeAmount() {
    return Object.keys(this.result).reduce((total, key) => {
      const count = this.result[key];
      const prizeInfo = MATCH_COUNT_PRIZES.get(key);

      if (prizeInfo) total += prizeInfo.prize * count;
      return total;
    }, 0);
  }

  calculateReturnRate(totalPurchaseAmount) {
    const totalPrizeAmount = this.calculateTotalPrizeAmount();
    const totalProfit = totalPurchaseAmount - totalPrizeAmount;
    const totalReturnRate = 100 - (totalProfit / totalPurchaseAmount) * 100;
    this.printTotalReturnRate(totalReturnRate);
  }

  printTotalReturnRate(totalReturnRate) {
    Console.print(OUTPUT_MESSAGE.TOTAL_RETURN_RATE(totalReturnRate));
  }
}

export default Lotto;
