import { MissionUtils } from "@woowacourse/mission-utils";

async function getBounsNumberInput(winningNumber) {
  try {
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumber = await MissionUtils.Console.readLineAsync("");
    checkBonusNumberInput(bonusNumber, winningNumber);
    MissionUtils.Console.print("");
    return bonusNumber;
  } catch (error) {
    MissionUtils.Console.print(`${error}`);
    return await getBounsNumberInput(winningNumber);
  }
}

function checkBonusNumberInput(number, winningNumber) {
  if (winningNumber.number.includes(number)) {
    throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
  }
  if (isNaN(number)) {
    throw new Error("[ERROR] 숫자 형식이 아닙니다.");
  }
  if (number < 1 || number > 45) {
    throw new Error("[ERROR] 숫자는 1부터 45까지 입력해야 합니다.");
  }
}

export default getBounsNumberInput;
