import { MissionUtils } from "@woowacourse/mission-utils";

const playerNumber = async (answer) => {
  const number = MissionUtils.Console.readLineAsync(answer);
  return number;
};

export default playerNumber;
