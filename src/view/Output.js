import { MissionUtils } from "@woowacourse/mission-utils";
import { generateLottoNum } from "../utils/generateRandomNum.js";

// 로또 수량 출력
export function printLottoCount(count){
  MissionUtils.Console.print(`${count}개를 구매했습니다.`);
}

// 로또 번호 출력
export function printLottoNum(nums){
  MissionUtils.Console.print(`[${nums.join(", ")}]`);
}

// 로또 당첨 내역 출력
export function printLottoResult(result){
  MissionUtils.Console.print("당첨통계");
  MissionUtils.Console.print("---");
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${result["3"]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${result["4"]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result["5"]}개`);
  MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["bonus"]}개`);
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result["6"]}개`);
}

// 수익률 출력
export function printRate(rate){
  MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
}