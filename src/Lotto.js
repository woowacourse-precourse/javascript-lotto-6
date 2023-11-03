import { Console, Random } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from './constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    console.log(numbers); // [1,2,3,4,5,6]
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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
  calculateRateOfReturn(구매금액, result) {
    //
  }
}

export default Lotto;
