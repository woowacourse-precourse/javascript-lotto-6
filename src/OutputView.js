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
};

export default OutputView;
