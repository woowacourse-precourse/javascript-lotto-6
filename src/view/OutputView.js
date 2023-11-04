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
    const {
      threeMatching,
      fourMatching,
      fiveMatchingNotBonus,
      fiveMatchingAndBonus,
      allMatching,
    } = winningResult;
    Console.print(`3개 일치 (5,000원) - ${threeMatching}개`);
    Console.print(`4개 일치 (50,000원) - ${fourMatching}개`);
    Console.print(`5개 일치 (1,500,000원) - ${fiveMatchingNotBonus}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchingAndBonus}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${allMatching}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },
};

export default OutputView;
