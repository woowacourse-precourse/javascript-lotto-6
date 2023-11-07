import { MissionUtils } from "@woowacourse/mission-utils";

// 로또 수량 출력
export function printLottoNum(amount){
  const count = amount / 1000;
  MissionUtils.Console.print(`${count}개를 구매했습니다.`);

  return count;
}