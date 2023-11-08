import { Console } from "@woowacourse/mission-utils";
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
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  // TODO: 추가 기능 구현
  winningResult(randomNumbers, bonusNumber) {
    // 당첨 결과 구하기
    const count = this.countMatchNumbers(randomNumbers);
    if (count === 6) {
      this.prizes[1].matchCount += 1;
    } else if (count === 5 && randomNumbers.includes(bonusNumber)) {
      this.prizes[2].matchCount += 1;
    } else if (count === 5) {
      this.prizes[3].matchCount += 1;
    } else if (count === 4) {
      this.prizes[4].matchCount += 1;
    } else if (count === 3) {
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
    // 등수별 당첨 개수 구하기
    return this.prizes[rank].matchCount;
  }

  printWinningResult() {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5000원)- ${this.getMatchCount(5)}개`);
    Console.print(`4개 일치 (50000원)- ${this.getMatchCount(4)}개`);
    Console.print(`5개 일치 (1500000원)- ${this.getMatchCount(3)}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30000000원)- ${this.getMatchCount(2)}개`);
    Console.print(`6개 일치 (2000000000원)- ${this.getMatchCount(1)}개`);
  }
}

export default Lotto;
