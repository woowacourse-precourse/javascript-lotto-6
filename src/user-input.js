import { MissionUtils } from "@woowacourse/mission-utils";
import { validationUserMoney, validationWinnerNumber, validationBonusNumber } from "./validation.js";
const Console = MissionUtils.Console;

async function inputMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    validationUserMoney(userMoney);
    return userMoney;
}

export { inputMoney };