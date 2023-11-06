import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printTotalLottos(lottos) {
    OutputView.printLottoPurchaceQuantity(lottos.length);
    OutputView.printLottos(lottos);
  },

  printLottoPurchaceQuantity(lottoQuantity) {
    if (Number.isNaN(lottoQuantity)) return;
    OutputView.print(`\n${lottoQuantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    const result = [...lottos].reduce(
      (totalLottos, currentLotto) => (totalLottos += `[${currentLotto.join(', ')}]\n`),
      ''
    );

    OutputView.print(result);
  },

  printResult(result) {
    const prize = Object.keys(result[0]).map((price) => Number(price).toLocaleString());
    const matchedLength = Object.values(result[0]);
    const rateOfReturn = result[1];

    OutputView.print(
      `\n당첨 통계
---
3개 일치 (${prize[0]}원) - ${matchedLength[0]}개
4개 일치 (${prize[1]}원) - ${matchedLength[1]}개
5개 일치 (${prize[2]}원) - ${matchedLength[2]}개
5개 일치, 보너스 볼 일치 (${prize[3]}원) - ${matchedLength[3]}개
6개 일치 (${prize[4]}원) - ${matchedLength[4]}개
총 수익률은 ${rateOfReturn}%입니다.`
    );
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
