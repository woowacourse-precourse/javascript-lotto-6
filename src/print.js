import { MissionUtils } from "@woowacourse/mission-utils";

export function printCnt(count, change) {
  MissionUtils.Console.print(`${count}개 구매했습니다.`);
  if (change > 0) {
    MissionUtils.Console.print(`거스름돈은 ${change}원입니다.`);
  }
}

export function printLottoNumber(lottos) {
  lottos.forEach(lotto => {
    const numbers = lotto.getNumbers();
    MissionUtils.Console.print(`[${numbers.join(', ')}]`);
  });
}
