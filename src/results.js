import { MissionUtils } from "@woowacourse/mission-utils";

const results = (result) => {
  for (let key in result) {
    MissionUtils.Console.print(`${key} - ${result[key]}개`);
  }
};
export default results;
