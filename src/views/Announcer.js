import { Console } from '@woowacourse/mission-utils';

class Announcer {
  printLottos(lottos, amount) {
    const lottoList = lottos.getLottos();
    Console.print(`${amount}개를 구매했습니다.\n`);
    lottoList.forEach((lotto) => {
      const lottoNumbers = lotto.getLotto();
      Console.print(`[${lottoNumbers.join(', ')}]\n`);
    });
    Console.print('\n');
  }

  printPrizeInfo(analyzer) {
    const prizeInfo = analyzer.getPrizeInfo();
    Console.print('당첨 통계\n---\n');
    Console.print(`3개 일치 (5,000원) - ${prizeInfo.fifthPlace}개\n`);
    Console.print(`4개 일치 (50,000원) - ${prizeInfo.fourthPlace}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeInfo.thirdPlace}개\n`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeInfo.secondPlace}개\n`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeInfo.firstPlace}개\n`);
    Console.print(`총 수익률은 ${prizeInfo.prizeYield}%입니다.`);
  }
}

export default Announcer;
