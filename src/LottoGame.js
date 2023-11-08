import { Console } from '@woowacourse/mission-utils';

class LottoGame {
  #userLottoNumberList;

  #winningNumber;

  #bonusNumber;

  constructor(userLottoNumberList, winningNumber, bonusNumber) {
    this.#userLottoNumberList = userLottoNumberList;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.winnerStatic = Array.from({ length: 5 }, () => 0);
    this.#checkWinner();
    console.log(this.winnerStatic); // TODO 디버기용
  }

  #checkWinner() {
    this.#userLottoNumberList.forEach((value) => {
      const count = this.#checkNumber(value);
      const bonusCount = this.#checkBonusNumber(value);
      this.#checkWinnerResult(count, bonusCount);
    });
  }

  #checkNumber(value) {
    let count = 0;
    for (let i = 0; i < 6; i += 1) {
      if (value.includes(Number(this.#winningNumber[i]))) {
        count += 1;
      }
    }
    return count;
  }

  #checkBonusNumber(value) {
    let bonusCount = 0;
    if (value.includes(this.#bonusNumber)) {
      bonusCount += 1;
    }
    return bonusCount;
  }

  #checkWinnerResult(count, bonusCount) {
    if (count === 3) {
      this.winnerStatic[0] += 1;
    } else if (count === 4) {
      if (bonusCount === 1) {
        this.winnerStatic[3] += 1;
      } else {
        this.winnerStatic[1] += 1;
      }
    } else if (count === 5) {
      this.winnerStatic[2] += 1;
    } else if (count === 6) {
      this.winnerStatic[4] += 1;
    }
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    this.#print3MatchedResult();
    this.#print4MatchedResult();
    this.#print5MatchedResult();
    this.#print5MatchedWithBonusResult();
    this.#print6MatchedResult();
  }

  printProfit() {
    const result = (
      ((Number(this.winnerStatic[0]) * 5000 +
        Number(this.winnerStatic[1]) * 50000 +
        Number(this.winnerStatic[2]) * 1500000 +
        Number(this.winnerStatic[3]) * 30000000 +
        Number(this.winnerStatic[4]) * 2000000000) *
        100) /
      (this.#userLottoNumberList.length * 1000)
    ).toFixed(1);
    Console.print(`\n총 수익률은 ${result}%입니다.`);
  }

  #print3MatchedResult() {
    Console.print(`3개 일치 (5,000원) - ${this.winnerStatic[0]}개`);
  }

  #print4MatchedResult() {
    Console.print(`4개 일치 (50,000원) - ${this.winnerStatic[1]}개`);
  }

  #print5MatchedResult() {
    Console.print(`5개 일치 (1,500,000원) - ${this.winnerStatic[2]}개`);
  }

  #print5MatchedWithBonusResult() {
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winnerStatic[3]}개`,
    );
  }

  #print6MatchedResult() {
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winnerStatic[4]}개`);
  }
}
export default LottoGame;
