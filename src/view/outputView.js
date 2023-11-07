import { Console } from '@woowacourse/mission-utils';

export default class outputView {
  insertCoins(coins) {
    Console.print(`\n${coins}개를 구매했습니다.`);
  }

  boughtLotto(lotto) {
    Console.print(lotto);
  }

  winningResult() {
    Console.print(`\n당첨 통계\n---`);
  }

  matchedThree(result) {
    Console.print(`3개 일치 (5,000원) - ${result}개`);
  }

  matchedFour(result) {
    Console.print(`4개 일치 (50,000원) - ${result}개`);
  }

  matchedFive(result) {
    Console.print(`5개 일치 (1,500,000원) - ${result}개`);
  }

  matchedBonus(result) {
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result}개`);
  }

  matchedSix(result) {
    Console.print(`6개 일치 (2,000,000,000원) - ${result}개`);
  }

  profit(result) {
    Console.print(`\n총 수익률은 ${result}%입니다.`);
  }
}
