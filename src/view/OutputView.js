import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printLottoCount(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printBlankLine() {
    Console.print("");
  },

  printPrizes(prizes) {
    Console.print(`\
당첨 통계
---
3개 일치 (5,000원) - ${this.countElementInArray("5등", prizes)}개  
4개 일치 (50,000원) - ${this.countElementInArray("4등", prizes)}개
5개 일치 (1,500,000원) - ${this.countElementInArray("3등", prizes)}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countElementInArray("2등", prizes)}개
6개 일치 (2,000,000,000원) - ${this.countElementInArray("1등", prizes)}개`);
  },

  countElementInArray(target, array) {
    return array.filter((element) => element === target).length;
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${parseFloat(profitRate).toLocaleString()}%입니다.`);
  },
};

export default OutputView;
