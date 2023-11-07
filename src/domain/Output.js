import { Console } from '@woowacourse/mission-utils';

export default class Output {
  printLotto(ticketCount, lottoNumbers) {
    Console.print(`\n${ticketCount}개를 구매했습니다.`);
    lottoNumbers.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printResult(winningNumber, roi) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winningNumber[0]}개
4개 일치 (50,000원) - ${winningNumber[1]}개
5개 일치 (1,500,000원) - ${winningNumber[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningNumber[3]}개
6개 일치 (2,000,000,000원) - ${winningNumber[4]}개
총 수익률은 ${roi}%입니다.`);
  }
}
