import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  count(number) {
    Console.print(`\n${number}개를 구매했습니다.`);
  },
  makeLottos(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  },
  result(ranking) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${ranking[4]}개
4개 일치 (50,000원) - ${ranking[3]}개
5개 일치 (1,500,000원) - ${ranking[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranking[1]}개
6개 일치 (2,000,000,000원) - ${ranking[0]}개`);
  },
  profit(number) {
    Console.print(`총 수익률은 ${number}%입니다.`);
  },
  err(error) {
    Console.print(error);
  },
}