import { MissionUtils } from "@woowacourse/mission-utils";

const bonusNumber = async (answer) => {
  const bonusNumber = MissionUtils.Console.readLineAsync(answer);
  return bonusNumber;
};
export default bonusNumber;
