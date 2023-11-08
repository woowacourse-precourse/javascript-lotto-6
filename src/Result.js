import { Console } from "@woowacourse/mission-utils";

class Result {
  state;

  constructor() {
    this.state = {
      first: { prize: 2000000000, hit: 0 },
      second: { prize: 30000000, hit: 0 },
      third: { prize: 1500000, hit: 0 },
      fourth: { prize: 50000, hit: 0 },
      fifth: { prize: 5000, hit: 0 },
    };
  }

  updateResult(hit, bonusHit) {
    if (hit === 3) {
      this.state.fifth.hit += 1;
    } else if (hit === 4) {
      this.state.fourth.hit += 1;
    } else if (hit === 5 && !bonusHit) {
      this.state.third.hit += 1;
    } else if (hit === 5 && bonusHit) {
      this.state.second.hit += 1;
    } else if (hit === 6) {
      this.state.first.hit += 1;
    }
  }

  calculateTotalYield() {
    let sum = 0;
    sum += this.state.fifth.hit * this.state.fifth.prize;
    sum += this.state.fourth.hit * this.state.fourth.prize;
    sum += this.state.third.hit * this.state.third.prize;
    sum += this.state.second.hit * this.state.fifth.prize;
    sum += this.state.first.hit * this.state.first.prize;

    return sum;
  }

  printResult() {
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000)원 - ${this.state.fifth.hit}개`);
    Console.print(`4개 일치 (50,000)원 - ${this.state.fourth.hit}개`);
    Console.print(`3개 일치 (1,500,000)원 - ${this.state.third.hit}개`);
    Console.print(`3개 일치 (30,000,000)원 - ${this.state.second.hit}개`);
    Console.print(`3개 일치 (2,000,000,000)원 - ${this.state.first.hit}개`);
  }
}

export default Result;
