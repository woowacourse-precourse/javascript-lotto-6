import { Console } from '@woowacourse/mission-utils';

export default class outputView {
  winningResult() {
    Console.print(`\n당첨 통계\n---`);
  }

  matchedThreeNumber(result) {
    Console.print(`3개 일치 (5,000원) - ${result}개`);
  }

  matchedFourNumber(result) {
    Console.print(`4개 일치 (50,000원) - ${result}개`);
  }

  matchedFiveNumber(result) {
    Console.print(`5개 일치 (1,500,000원) - ${result}개`);
  }

  matchedBonusNumber(result) {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result}개`);
  }

  matchedSixNumber(result) {
    Console.print(`6개 일치 (2,000,000,000원) - ${result}개`);
  }

  profit(result) {
    Console.print(`\n총 수익률은 ${result}%입니다.`);
  }
}
