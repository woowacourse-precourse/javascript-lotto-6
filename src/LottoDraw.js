import { Console } from "@woowacourse/mission-utils";

class LottoDraw {
  static printResult({ lottos, winningNumbers, bonusNumber, purchasePrice }) {
    const matches = { 3: 0, 4: 0, 5: 0, "5b": 0, 6: 0 };

    lottos.forEach((lotto) => {
      const correctCount = this.#countDuplicateElements(
        lotto.numbers,
        winningNumbers
      );
      const containBonusNumber = lotto.numbers.includes(bonusNumber);
      console.log(correctCount);
      if ([3, 4, 6].includes(correctCount)) {
        matches[correctCount] += 1;
      }

      if (correctCount === 5 && !containBonusNumber) {
        matches[5] += 1;
      } else if (correctCount === 5 && containBonusNumber) {
        matches["5b"] += 1;
      }
    });

    Console.print("당첨 통계\n---");

    this.#printMatches(matches);

    const earningLate = this.#calculateEarningLate(matches, purchasePrice);
    Console.print(`총 수익률은 ${earningLate}%입니다.`);
  }

  static #countDuplicateElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let count = 0;

    for (const element of set1) {
      if (set2.has(element)) {
        count++;
      }
    }

    return count;
  }

  static #printMatches(matches) {
    Console.print(`3개 일치 (5,000원) - ${matches[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${matches[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matches[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matches["5b"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matches[6]}개`);
  }

  static #calculateEarningLate(matches, purchasePrice) {
    let profit = 0;
    profit += matches[3] * 5000;
    profit += matches[4] * 50000;
    profit += matches[5] * 1500000;
    profit += matches["5b"] * 30000000;
    profit += matches[6] * 2000000000;

    const earningLate = (profit / purchasePrice) * 100;
    const roundedearningLate = earningLate.toFixed(1);

    return roundedearningLate;
  }
}

export default LottoDraw;
