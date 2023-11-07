import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, PRIZES_MESSAGE } from "../constants/constants.js";

// 로또 수량 출력
export function printLottoCount(count){
  MissionUtils.Console.print(OUTPUT_MESSAGE.printLottoCnt(count));
}

// 로또 번호 출력
export function printLottoNum(nums){
  MissionUtils.Console.print(`[${nums.join(", ")}]`);
}

// 로또 당첨 내역 출력
export function printLottoResult(result){
  MissionUtils.Console.print(OUTPUT_MESSAGE.printLottoStatistics);
  MissionUtils.Console.print(`${PRIZES_MESSAGE[3]}${result["3"]}개`);
  MissionUtils.Console.print(`${PRIZES_MESSAGE[4]}${result["4"]}개`);
  MissionUtils.Console.print(`${PRIZES_MESSAGE[5]}${result["5"]}개`);
  MissionUtils.Console.print(`${PRIZES_MESSAGE["bonus"]}${result["bonus"]}개`);
  MissionUtils.Console.print(`${PRIZES_MESSAGE[6]}${result["6"]}개`);
}

// 수익률 출력
export function printRate(rate){
  MissionUtils.Console.print(OUTPUT_MESSAGE.printRate(rate));
}