import { MissionUtils } from "@woowacourse/mission-utils";
import { generateLottoNum } from "../utils/generateRandomNum.js";

// 로또 수량 출력
export function printLottoCount(amount){
  const count = amount / 1000;
  MissionUtils.Console.print(`${count}개를 구매했습니다.`);

  return count;
}

// 로또 번호 출력
export function printLottoNum(count){
  const lottos = [];

  for(let i=0; i<count; i++){
    const lotto = generateLottoNum();
    lottos.push(lotto);

    MissionUtils.Console.print(lotto);
  }
  return lottos;
}