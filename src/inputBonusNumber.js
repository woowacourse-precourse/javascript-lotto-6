import { MissionUtils } from "@woowacourse/mission-utils";
import validateBonusNumber from "./validateBonusNumber.js";

async function inputBonusNumber(winningNumbers) {
    let bonusNumber = Number(await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
    try {
        bonusNumber = validateBonusNumber(bonusNumber, winningNumbers);
        MissionUtils.Console.print("");
    } catch(err) {
        MissionUtils.Console.print(err.message);
        return inputBonusNumber(winningNumbers);
    }
    return bonusNumber;
}

export default inputBonusNumber;
