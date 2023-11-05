import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printUserLottos(lottos) {
    this.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  },

  printResult({ result, profitability }) {
    const answer = result.reduce((acc, cur) => {
      if (cur < 3) return acc;
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    this.print(`3개 일치 (5,000원) - ${answer[3] ?? 0}개`);
    this.print(`4개 일치 (50,000원) - ${answer[4] ?? 0}개`);
    this.print(`5개 일치 (1,500,000원) - ${answer[5] ?? 0}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${answer[7] ?? 0}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${answer[6] ?? 0}개`);
    this.print(
      `총 수익률은 ${profitability.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}%입니다.`,
    );
  },
};

export default OutputView;
