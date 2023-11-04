import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printAutoLotto(lottos, purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const lottoString = `[${lotto.join(', ')}]`;
      Console.print(lottoString);
    });
  },

  printLotteryResultsSummary(winningResult, rateOfReturn) {
    const template = this.getResultStringTemplate(winningResult);
    template.forEach(({ label, count }) => {
      Console.print(`${label} - ${count}개`);
    });

    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  getResultStringTemplate(winningResult) {
    return [
      { label: '3개 일치 (5,000원)', count: winningResult.threeMatching },
      { label: '4개 일치 (50,000원)', count: winningResult.fourMatching },
      {
        label: '5개 일치 (1,500,000원)',
        count: winningResult.fiveMatchingNotBonus,
      },
      {
        label: '5개 일치, 보너스 볼 일치 (30,000,000원)',
        count: winningResult.fiveMatchingAndBonus,
      },
      { label: '6개 일치 (2,000,000,000원)', count: winningResult.allMatching },
    ];
  },
};

export default OutputView;
