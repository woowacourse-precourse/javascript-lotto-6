import { MissionUtils } from "@woowacourse/mission-utils";

const results = (result, rate) => {
  for (let key in result) {
    MissionUtils.Console.print(`${key} - ${result[key]}개`);
  }
  MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
};
export default results;
