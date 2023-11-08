import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  /**
   * @param {numbers: number[][]} lottoes
   */
  printBuyResult: (numbers) => {
    Console.print(`\n${numbers.length}개를 구매했습니다.`);
    numbers.forEach((number) => {
      Console.print(`[${number.join(", ")}]`);
    });
  },

  /**
   * @param {number} rank
   * @returns {string}
   */
  getCorrectMessage: (rank) => {
    if (rank > 2) {
      return "${6 - rank + 2}개 일치";
    }
    if (rank === 2) {
      return `${6 - 1}개 일치, 보너스 볼 일치`;
    }
    return `${6}개 일치`;
  },

  /**
   * @param {number[]} result
   * @param {number} profit
   */
  printWinningResult: (results, profit) => {
    Console.print("\n당첨 통계\n---");
    results.forEach((result, index) => {
      Console.print(
        `${OutputView.getCorrectMessage(5 - index)} (${[
          2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000,
        ][5 - index - 1].toLocaleString()}원) - ${result}개`
      );
    });
    Console.print(`총 수익률은 ${profit}%입니다.`);
  },
};

export default OutputView;
