import { MissionUtils } from "@woowacourse/mission-utils";
import validateBonusNumber from "./validateBonusNumber.js";

async function inputBonusNumber(winningNumbers) {
    let bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    bonusNumber = Number(bonusNumber);
    try {
        bonusNumber = validateBonusNumber(bonusNumber, winningNumbers);
        MissionUtils.Console.print("");
        return bonusNumber;
    } catch(err) {
        MissionUtils.Console.print(err.message);
        return inputBonusNumber(winningNumbers);
    }
}

export default inputBonusNumber;
