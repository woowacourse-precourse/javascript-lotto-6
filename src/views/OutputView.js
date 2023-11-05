import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  /**
   * 구매한 로또의 개수와 번호 출력
   * @param {numbers: number[][]} lottoes
   */
  outputBuyResult: (numbers) => {
    Console.print(`${numbers.length}개를 구매했습니다.`);
    numbers.forEach((number) => {
      Console.print(`[${number.join(', ')}]`);
    });
  },
};

export default OutputView;
