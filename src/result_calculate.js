import { Console, MissionUtils } from '@woowacourse/mission-utils';

class CalculationOfResult {
  run(numOfBuy, arrayofLotto, winningNum, bonusNum) {
    const countOfWinning = this.#calculatePrize(arrayofLotto, winningNum, bonusNum);
    const allIncome = this.#calculatePrizemoney(countOfWinning);
    const yeild = this.#calculateYeild(numOfBuy, allIncome);
    this.#printOfResult(countOfWinning, yeild);
  }

  #calculatePrize(arrayofLotto, winningNum, bonusNum) {
    const countOfWinning = [0, 0, 0, 0, 0];

    arrayofLotto.forEach((myLotto) => {
      const matchArray = myLotto.filter((value) => winningNum.includes(value));
      const ranks = matchArray.length;
      const bonusMatch = myLotto.includes(bonusNum);
      if (ranks === 6) countOfWinning[0] += 1; // 1st
      if (ranks === 5 && bonusMatch) {
        // 2nd
        countOfWinning[1] += 1;
      }
      if (ranks === 5 && !bonusMatch) {
        // 3rd
        countOfWinning[2] += 1;
      }
      if (ranks === 4) countOfWinning[3] += 1; // 4th
      if (ranks === 3) countOfWinning[4] += 1; // 5th
    });

    return countOfWinning;
  }

  #calculatePrizemoney(countOfWinning) {
    const FIRST = 2000000000;
    const SECOND = 30000000;
    const THIRD = 1500000;
    const FOURTH = 50000;
    const FIFTH = 5000;
    let allIncome = 0;

    allIncome =
      countOfWinning[0] * FIRST +
      countOfWinning[1] * SECOND +
      countOfWinning[2] * THIRD +
      countOfWinning[3] * FOURTH +
      countOfWinning[4] * FIFTH;

    return allIncome;
  }

  #calculateYeild(numOfBuy, allIncome) {
    const investment = numOfBuy * 1000;
    const yeild = ((allIncome / investment) * 100).toFixed(1);

    return yeild;
  }

  #printOfResult(countOfWinning, yeild) {
    // Console.print('\n');
    Console.print(`당첨 통계
---
3개 일치 (5,000원) - ${countOfWinning[4]}개
4개 일치 (50,000원) - ${countOfWinning[3]}개
5개 일치 (1,500,000원) - ${countOfWinning[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${countOfWinning[1]}개
6개 일치 (2,000,000,000원) - ${countOfWinning[0]}개
총 수익률은 ${yeild}%입니다.`);
  }
}

export default CalculationOfResult;

// const run = new CalculationOfResult();
// run.run();
