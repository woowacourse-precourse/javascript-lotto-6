import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constants.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    // numbers 입력받는 로또 당첨번호
    this.#validate(numbers);
    this.#numbers = numbers;
    this.prizes = {
      1: { matchCount: 0, winningMoney: 2000000000 },
      2: { matchCount: 0, winningMoney: 30000000 },
      3: { matchCount: 0, winningMoney: 1500000 },
      4: { matchCount: 0, winningMoney: 50000 },
      5: { matchCount: 0, winningMoney: 5000 },
    };
  }

  #validate(numbers) {
    // 입력 로또 번호 검증
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_NUMBER); // 로또 번호가 6개인지 확인
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER); // 로또 번호에 중복된 값이 있는지 확인
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(ERROR_MESSAGE.OVER_NUMBER); // 로또 번호가 1~45 사이인지 확인
    }
  }

  winningResult(randomNumbers, bonusNumber) {
    // 당첨 결과 구하기
    const count = this.countMatchNumbers(randomNumbers);
    if (count === 6) {
      this.prizes[1].matchCount += 1;
    }
    if (count === 5 && randomNumbers.includes(bonusNumber)) {
      this.prizes[2].matchCount += 1;
    }
    if (count === 5) {
      this.prizes[3].matchCount += 1;
    }
    if (count === 4) {
      this.prizes[4].matchCount += 1;
    }
    if (count === 3) {
      this.prizes[5].matchCount += 1;
    }
  }
  countMatchNumbers(randomNumbers) {
    // 당첨번호와 일치하는 숫자 개수 구하기
    let count = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
      if (this.#numbers.includes(randomNumbers[i])) {
        count += 1;
      }
    }
    return count;
  }
  getMatchCount(rank) {
    // 등수별 당첨 개수 반환
    return this.prizes[rank].matchCount;
  }

  printWinningResult() {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.getMatchCount(5)}개`);
    Console.print(`4개 일치 (50,000원) - ${this.getMatchCount(4)}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.getMatchCount(3)}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.getMatchCount(2)}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.getMatchCount(1)}개`);
  }

  calculateRate(inputPrice) {
    // 수익률 구하기
    let totalWinningMoney = 0;
    for (let i = 1; i <= 5; i++) {
      totalWinningMoney += this.getMatchCount(i) * this.prizes[i].winningMoney;
    }
    return Math.round((totalWinningMoney / inputPrice) * 100 * 100) / 100;
  }

  printCalculateRate(inputPrice) {
    Console.print(`총 수익률은 ${this.calculateRate(inputPrice)}%입니다.`);
  }
}

export default Lotto;
