import { MissionUtils } from "@woowacourse/mission-utils";
import { generateLottoNum } from "../utils/generateRandomNum.js";

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