import { MissionUtils } from "@woowacourse/mission-utils";

async function getBounsNumberInput() {
  MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
  const bonusNumber = await MissionUtils.Console.readLineAsync("");
  MissionUtils.Console.print("");
  return bonusNumber;
}

export default getBounsNumberInput;
