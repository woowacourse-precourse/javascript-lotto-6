import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const outputs = {
  // 발행한 로또 수량 출력
  printAmountOfLotto(amount) {
    Console.print(`\n${amount}${MESSAGE.output.amount}`);
  },
  // 발행한 로또 출력
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const lottoNums = lotto.getLottoNum();
      const printLotto = `[${lottoNums.join(", ")}]`;

      Console.print(`${printLotto}`);
    });
    Console.print("");
  },
  // 당첨 통계 출력
  printStats(stats) {
    Console.print(
      `
당첨 통계
---
3개 일치 (5,000원) - ${stats["5등"][1]}개
4개 일치 (50,000원) - ${stats["4등"][1]}개
5개 일치 (1,500,000원) - ${stats["3등"][1]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats["2등"][1]}개
6개 일치 (2,000,000,000원) - ${stats["1등"][1]}개
`
    );
  },
  // 수익률 출력
  printRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  },
};

export default outputs;
